const router = require("express").Router();
// mock data
const courses = [
  {
    id: 1,
    name: "Learn Node.js From zero to hero.",
  },
  {
    id: 2,
    name: "Learn Vue.js From zero to hero.",
  },
  {
    id: 3,
    name: "Learn React.js From zero to hero.",
  },
  {
    id: 4,
    name: "Learn CSS From zero to hero.",
  },
];
// routes params
// get all courses
router.get("/", (req, res) => {
  res.send(courses);
});

// get a course by Id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const course = courses.find((item) => item.id === parseInt(id));
  if (!course) {
    res.status(404).send("The course with the given Id was not found!");
  } else {
    res.status(200).send(course);
  }
});

// create a course
router.post("/", (req, res) => {
  // useing joi to validate input
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  console.log("result = ", result);
  const { value: name } = result;
  // Input validation
  if (!name || name.length < 3) {
    res.status(400).send("Name is required and should be minmu 3");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

module.exports = router;
