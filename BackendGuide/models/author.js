const mongoose = require("mongoose")

/*
    Schema: defines the structure of the document
*/
const authorSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },

    /*
        function (parameters) {
            // function body
        }
                                is equivalent to
        (parameters) => {
            // function body
        }

        //SHORT VERSION//
        age: {
            type: Number,
            min: 0,
            max: 120
        }
    */
    age: {
        type: Number,
        validate: {                                     // This is used to constraint the value of the field
            validator: (age) => {                       // A function that returns a boolean value given a value of age
                return age > 0 && age < 120
            },
            message: "Age should be between 0 and 120"  // Outputed when validator returns false
        }
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
module.exports = mongoose.model("Author", authorSchema)
