const Student = require("../model/Student");

// Get All students
const student_all = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
      } catch (error) {
        res.json({ message: error });
      }
};

// Single student
const student_details = async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        res.json(student);
      } catch (error) {
        res.json({ message: error });
      }
};

// Create and Save a new user
const student_create = async (req, res) => {
  if (!req.body.fullname && !req.body.mobile && !req.body.emaiid && !req.body.state && !req.body.city && !req.body.address && !req.body.location_map) {
      res.status(400).send({ message: "Content can not be empty!" });
  }
  
  const student = new Student({
    fullname: req.body.fullname,
    mobile: req.body.mobile,
    emaiid: req.body.emaiid,
    state: req.body.state,
    city: req.body.city,
    address: req.body.address,
    location_map: req.body.location_map
  });
  
  await student.save().then(data => {
      res.send({
          message:"Student created successfully!!",
          student:data
      });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating user"
      });
  });
};
// Add New student
const student_update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
console.log(id);
  Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found!`
        });
      } else res.send({ message: "Student was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Student with id=" + id
      });
    });
};
// Update student


// Delete student
const student_delete = async (req, res) => {
    try {
        const removeStudent = await Student.findByIdAndDelete(req.params.id);
        res.json(removeStudent);
      } catch (error) {
        res.json({ message: error });
      }
};

module.exports = {
    student_all, 
    student_details, 
    student_create, 
    student_update, 
    student_delete
  }