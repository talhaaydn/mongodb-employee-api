const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Employee = require('../models/Employee');

/** Get all employees */
router.get("/employee", async (req, res) => {
    Employee
        .find({ })
        .then(result => res.json(result))
        .catch(error => res.status(500).send(error));
});

/** Get one employee */
router.get("/employee/:id", async (req, res) => {
    Employee
        .findById(req.params.id)
        .then(result => res.json(result))
        .catch(error => res.status(500).send(error));
});

/** Create a new employee */
router.post("/employee", (req, res) => {
    const employee = new Employee(req.body);
    employee
        .save()
        .then(result => res.json(result))
        .catch(error => res.status(500).send(error));

});

/** Update a employee */
router.put("/employee/:id", (req, res) => {
    Employee
        .findByIdAndUpdate(req.params.id, req.body) 
        .then(() => res.json({ message: "Employee successfully updated." }))
        .catch(error => res.status(500).send(error));
});

/** Delete a employee */
router.delete("/employee/:id", async (req, res) => {
    Employee
        .findOneAndRemove({ _id: req.params.id }) 
        .then(() => res.json({ message: "Employee successfully deleted." }))
        .catch(error => res.status(500).send(error));
});

module.exports = router;