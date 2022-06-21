const CalendarController = require('../controllers/calendar.controller');

module.exports = (app) => {
    app.get('/api/calendarEvents/', CalendarController.getCalendarEvents);
    app.get('/api/calendarEvents/:id', CalendarController.getCalendarEventeById);
    app.post('/api/calendarEvents/', CalendarController.createCalendarEvent);
    app.put('/api/calendarEvents/:id', CalendarController.updateCalendarEvent);
    app.delete('/api/calendarEvents/:id', CalendarController.deleteCalendarEvent);
}