const Folder = require('../../model/mongodb/Folder');
const User = require('../../model/mongodb/User');

module.exports = {
  async getFolderName(req, res){
    var token = req.header('Authorization');
    
    const users = await User.findOne({ token: token })

    const folder = await Folder.find({ userid: users._id });

    console.log(folder)
  }
}