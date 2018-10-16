module.exports = (app) => {
    const controller = require('./controller.js');
    // Retrieve all Notes
    app.get('/api/user', controller.findAll);

    // Retrieve a single Note with noteId
    app.get('/api/user/:id', controller.findOne);
}
