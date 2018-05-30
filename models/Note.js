const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

const NoteSchema = new Schema({
    // Schema properties
    task: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    createdWeekday: {
        type: Date,
        default: moment(Date.now).format('DDD')
    },
    completed: {
        type: Boolean,
        default: false
    }

});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;