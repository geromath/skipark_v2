# TODOS

- [ ] Create routes/index.js
- [ ] Make routes established in routes/index.js

- [ ] Learn dotenv
- [ ] Use dotenv for environmental variables that should be kept safe...

- [ ] Set up the models like they should be in production
- [ ] Set up tests for models ...

- [ ] Create an XD file to present the layout

- [ ] Create front end... (Vue.js, React.js ... ?)

# How to extend this app

The model and controllers i ripped off (bezkoder.com)[https://bezkoder.com/node-js-express-sequelize-mysql/]

To add a new model you need a couple things...

- MODEL_NAME.model.js in models/
- MODEL_NAME.controller.js in controllers/
- MODEL_NAME.routes.js in routes/

The model needs to be established in models/index.js. Then routes needs to be established in the main app as for now. This should be moved to routes.js, and is already listed in TODOS.
