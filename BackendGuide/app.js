const e = require("express")
const mongoose = require("mongoose")

let Author = require("./models/author")
let Book = require("./models/book")

/*
    "mongodb://localhost:27017/libDb" ->
    mongodb://
        is like http://
    localhost
        means the server is running locally i.e. on your pc, usually and IP address
    :27017
        is the port number. 27017 is the default port num of mongoDB
    /libDb
        is the path to the DB.

    The second parameter is the callback function, executed only after connected to the DB
        (err) => { //codes } <- refering this
*/
mongoose.connect("mongodb://localhost:27017/libDb", (err) => {
    
    // <=> if (err !== null)
    if (err) {                                  
        console.log("Error in connection")
        throw err                           // see more: https://www.w3schools.com/js/js_errors.asp
    }
    console.log("Connected to DB")

    insertSample()
    querySample()
    updateSample()
    deleteSample()

})

let insertSample = () => {
    // creating new Author
    let authorA = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: "A",
            lastName: "Author"
        },
        age: 30
        // created: Date  is created automatically, which == Date.now()
    })

    authorA.save((err) => {     // saving authorA into libDb/Author
        
        if (err) {
            console.log("Error in saving Author")
            throw err
        }
        console.log("Author is saved")

        // creating new Book
        let bookA = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: "I am a book",
            author: authorA._id,
            isbn: "abcdefg"
        })

        // saving bookA
        bookA.save((err) => {
            if (err) {
                console.log("Error in saving Book")
                throw err
            }
            console.log("Book is saved")
        })

    })

    // Demo for using Model.insertMany()
    let authorB = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: "B",
            lastName: "Author"
        },
        age: 50
    })
    let authorC = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: "C",
            lastName: "Author"
        },
        age: 100
    })
    Author.insertMany([authorB, authorC], (err) => {
        if (err) {
            console.log("Error in saving multiple author")
            throw err
        }
        console.log("Saved multiple authors")
    })
}

let querySample = () => {

    // Find all authors 
    Author.find(
        {
            "name.lastName": "Author"
        },
        (err, docs) => {        // docs is the output, which is an array
            if (err)
                throw err
            console.log(docs)
        }
    )

    // Find AuthorA
    Author.findOne(
        {
            "name.firstName": "A",
            "name.lastName": "Author"
        },
        (err, doc) => {        // doc is the output, which is an Object
            if (err)
                throw err
            console.log(doc)
        }
    )

    // Get the age of AuthorA
    Author.findOne(
        {
            "name.firstName": "A",
            "name.lastName": "Author"
        },
        "age",
        (err, doc) => {        // doc is the output, which is an Object
            if (err)
                throw err
            console.log(doc)
        }
    )

    // using where
    Author
        .where({"name.lastName": "Author"})
        .where("age")                           // where age is:
        .gte(30)                                    // greater than
        .lte(100)                                   // less than
        .limit(10)                              // limit the amount of results
        .sort("age")                            // sort by age
        .exec( (err, docs) => {                 // at last, execute
            console.log(docs)
        })

    // populate() allows refererning document in another collection
    Book.find({}).populate("author").exec((err, docs) => {  // find({}) -> no constraints -> find all books
        console.log(docs)                                   // populate("author") would return the author details linked by the authorId in Book
    })
}

let updateSample = () => {

    // Updateing 1 document
    Author.updateOne(
        {"name.firstName" : "A"},
        {
            $set: {"name.firstName": "Z"}
        },
        (err, doc) => {
            console.log(doc)
        }
    )
    // updateMany() is the same

}

let deleteSample = () => {

    // Deleting "AuthorZ"
    Author.deleteOne(
        {"name.firstName" : "Z"},
        (err, doc) => {
            console.log(doc)
        }
    )
    // deleteMany() is the same

}