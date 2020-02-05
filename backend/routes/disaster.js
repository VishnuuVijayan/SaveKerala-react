const Router = require("express").Router();
let Disaster = require("../models/disasteradd.model");

Router.route("/").get((req, res) => {
  Disaster.find()
    .then(disasters => res.json(disasters))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/:id").get((req, res, err) => {
  Disaster.findById(req.params.id)
    .then(disaster => res.json(disaster))
    .catch(err => res.status(400).json("Error: " + err));
});

Router.route("/add").post((req, res) => {
  const disasterid = req.body.disasterid;
  const disaster_name = req.body.disaster_name;
  const slug = req.body.slug;
  const description = req.body.description;
  const location = req.body.location;
  const disaster_type = req.body.disaster_type;
  const disaster_sdate = Date.parse(req.body.disaster_sdate);
  const disaster_edate = Date.parse(req.body.disaster_edate);
  const duration = Number(req.body.duration);
  const severity = Number(req.body.severity);
  const people_affected = Number(req.body.people_affected);
  const span_area = Number(req.body.span_area);
  const is_active = Boolean(req.body.is_active);
  const imgsrc = req.body.imgsrc;

  const newDisaster = new Disaster({
    disasterid,
    slug,
    description,
    disaster_name,
    location,
    disaster_type,
    disaster_sdate,
    disaster_edate,
    duration,
    severity,
    people_affected,
    span_area,
    is_active,
    imgsrc
  });

  newDisaster
    .save()
    .then(() => res.json("Disaster Added"))
    .catch(() => res.status(400).json("Error: " + err));
});

module.exports = Router;
