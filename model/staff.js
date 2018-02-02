var mongoose = require("mongoose");
module.exports = mongoose.model("Staff",{
    "id" : Number,
    "name" : String,
    "age" : Number,
    "sex" : String,
    "phone" : Number,
    "state" : String,
    "site" : String,
    "entryDate" : Date,
    "section" : String,
    "identityCard" : Number,
    "education" : String,
    "nation" : String,
    "poli_status" : String,
    "mail" : String
});

