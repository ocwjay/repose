const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Calendar title is required"],
    },
    startDateDay: {
        type: String,
        required: [true, "Start day is required"],
    },
    startDateMonth: {
        type: String,
        required: [true, "Start month is required"],
    },
    startDateYear: {
        type: String,
        required: [true, "Start year is required"],
    },
    startTimeHour: {
        type: String,
        required: [true, "Start hour is required"],
    },
    startTimeMinute: {
        type: String,
        required: [true, "Start minute is required"],
    },
    startAmPm: {
        type: String,
        required: [true, "Start AM/PM is required"],
        enum: [
            'AM',
            'PM'
        ],
    },
    endDateDay: {
        type: String,
        required: [true, "End day is required"],
    },
    endDateMonth: {
        type: String,
        required: [true, "End month is required"],
    },
    endDateYear: {
        type: String,
        required: [true, "End year is required"],
    },
    endTimeHour: {
        type: String,
        required: [true, "End hour is required"],
    },
    endTimeMinute: {
        type: String,
        required: [true, "End minute is required"],
    },
    endAmPm: {
        type: String,
        required: [true, "End AM/PM is required"],
        enum: [
            'AM',
            'PM'
        ],
    }
}, { timestamps: true })

const Note = mongoose.model('Calendar', CalendarSchema);
module.exports = Note;