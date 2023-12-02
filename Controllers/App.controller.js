const App = require("../Models/App.model");

module.exports = {
  getApps: async (req, res, next) => {
    try {
      const apps = await App.find({});

      res.status(200).json(apps);
    } catch (error) {
      next(error);
    }
  },
};
