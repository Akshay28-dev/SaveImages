const User = require('../../model/mongodb/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const uuid = require('uuid').v4;
const Folder = require('../../model/mongodb/Folder');

const privateKey = 'kjshfiwy9w49793282fwefuiwuf298734247204';

module.exports = {
  async signup(req, res){
    try{
      var user = req.body
      console.log(user)
      const checkEmail = await User.findOne({ email: user.email});
      console.log(checkEmail)
      if(checkEmail){
        let error = new Error('Email is already Registered');
        throw error
      }
      var id = uuid();
      console.log(id)
      var UserDetails = {
        name: user.name,
        email: user.email,
        password: user.password,
        token: id
      }
      const users = await User.create({ ...UserDetails})
      
      jwt.sign({id: users._id}, privateKey, async (err, token)=>{
        // console.log(token)
        await User.update({email: user.email}, { $set: { token: token }})
        res.send({ 
          user:users,
          token: token
        })
      })
    }catch(err){
      console.log(err)
      res.status(400).send({
        error: err.message
      })
    }
  },

  async login(req, res) {
    try {
      var user = req.body;
      // console.log(user)
      // Check the email and Password
      const users = await User.findOne({email: user.email});
      if(!users){
        let error = new Error('Email is Not Registered');
        throw error
      }
      const checkPassword = await bcrypt.compare(user.password, users.password);
      // console.log("error User Check : "+checkPassword)
      if(!checkPassword){
        let error = new Error('Password is incorrect');
        throw error
      }
      // console.log(users._id)
      const foldername = await Folder.find({userid: users._id});
      console.log(foldername)
      jwt.sign({id: users._id}, privateKey, async (err, token)=>{
        // console.log(token)
        await User.update({email: user.email}, { $set: { token: token }})
        res.send({ 
          user:users,
          token: token,
          foldername: foldername
        })
      })
      
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error: error.message
      })
    }
  },

  async logout(req, res){
    try {
      
      const token = req.header('Authorization');  
      console.log("log Out: "+token)
      const response = await User.findOne({token: token})
      // console.log("Response: "+response)
      
      if(!response){
        let error = new Error('Server Error');
        throw error
      }
      
      var responseFile = await User.update({token: token}, { token: null});
      console.log(responseFile)
      res.send({user: null, token: null, foldername: null}).status(200)
    } catch (error) {
      
    }
  }
}