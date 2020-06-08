var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
// var Todo = require("./Todo");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      unique: true,
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    token:{
      type: String
    }
  },
  { timestamps: true }
);

// I should avoid rehashing the password twice.
userSchema.pre("save", function(next) {
  var user = this;
  // Check whether password field is modified
  if (user.isModified("password")) {
    bcrypt
      .hash(user.password, 10)
      .then(function(hashedPassword) {
        user.password = hashedPassword;
        next();
      })
      .catch(function(err) {
        next(err);
      });
  }
});

// // Delete all user created todos, if the user gets deleted, to avoid polluting the DB
userSchema.pre("remove", function(next) {
  Todo.deleteMany({ user: this._id })
    .then(function() {
      next();
    })
    .catch(function(err) {
      next(err);
    });
});

var User
try {
  User = mongoose.model('user')
} catch (error) {
  User = mongoose.model('user', userSchema)
}

module.exports = User;