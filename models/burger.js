// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    // insertOne: function(burger_name, cb) {
    //   orm.insertOne("burgers", cols, vals, function(res) {
    //     cb(res);
    //   });
    // },
    // insertOne: function(burger_name, cb){
    //   orm.insertOne(burger_name, function(res){
    //     cb(res);
    //   });
    // },
    insertOne: function(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, function(res) {
        cb(res);
      });
    },
    // updateOne: function(objColVals, condition, cb) {
    //   orm.updateOne("burgers", objColVals, condition, function(res) {
    //     cb(res);
    //   });
    // }
    updateOne: function(burger_id, callback){
      orm.updateOne(burger_id, function(res){
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgers_controller.js).
  module.exports = burger;