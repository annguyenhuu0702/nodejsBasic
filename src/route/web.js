import express from "express";
import homeController from "./../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomepage);

  router.get("/detail/user/:id", homeController.getDetailpage);

  router.get("/abc", (req, res) => {
    res.send("helo anh em học lập trình");
  });

  return app.use("/", router);
};

export default initWebRoute;
