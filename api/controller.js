const mongoose = require('mongoose');
const mongodb = require('mongodb');

User = require('./model.js');

const { ObjectId } = mongodb;

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    const query = req.query || {};
    User.find({
        $and: [{
            "meta.identity.gender": { $exists: true }
        }, {
            location: { $exists: true } 
        }, {
            "location.city": { $exists: true }
        }]
    })
      .skip(parseFloat(query.offset || 0, 10))
      .limit(parseFloat(query.limit || 1000, 10))
      .then(users => {
          res.send(users);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving users."
          });
      });
};

// Find a single user with an id
exports.findOne = (req, res) => {
    User.findById(ObjectId(req.params.id))
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.id
        });
    });
};
