const Calendar = require('../models/calendar.model');

module.exports = {
    getCalendarEvents: (req, res) => {
        Calendar.find({})
            .then((calendarEvents) => {
                res.json(calendarEvents);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in getCalendarEvents", error: err });
            });
    },
    createCalendarEvent: (req, res) => {
        Calendar.create(req.body)
            .then(newCalendarEvent => {
                res.status(201).json(newCalendarEvent);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in createCalendarEvent", error: err });
            });
    },
    getCalendarEventeById: (req, res) => {
        Calendar.findOne({ _id: req.params.id })
            .then(calendarEvent => {
                res.json(calendarEvent);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in getCalendarEventeById", error: err });
            });
    },
    deleteCalendarEvent: (req, res) => {
        Calendar.deleteOne({ _id: req.params.id })
            .then(calendarEvent => {
                res.json(calendarEvent);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in deleteNote", error: err });
            });
    },
    updateCalendarEvent: (req, res) => {
        Calendar.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
            .then(calendarEvent => {
                res.json(calendarEvent);
            })
            .catch((err) => {
                res.status(400).json({ message: "Something went wrong in updateCalendarEvent", error: err });
            });
    },
};