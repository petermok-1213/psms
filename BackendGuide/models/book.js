const mongoose = require("mongoose")

/*
    Schema: defines the structure of the document
*/
const bookSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    title: {
        type: String,
        required: true
    },

    // Stores the id of the author
    author: {
        type: mongoose.Schema.Types.ObjectId,           // Should be the same type as the _id of Author
        ref: "Author"                                   // Name of the Model exported in author.js
    },

    isbn: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        default: Date.now                               // Default value for the attribute
    }

})

/*
    Model:
        a Wrapper on the Schema,
        which provides an interface for CRUD operations on the DB.
*/
module.exports = mongoose.model("Book", bookSchema)     // nameOfCollection="Book", schema=bookSchema
