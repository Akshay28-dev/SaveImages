const Folder = require('../../model/mongodb/Folder');
const User =  require('../../model/mongodb/User');

module.exports = {
  async foldercreate(req, res){
    try {
      const folder = req.body;
      const token = req.header('Authorization');
      // console.log("token: "+ token)
      const user = await User.findOne({token: token})
      // console.log(user)
      const body = {
        foldername: folder.foldername,
        userid: user._id
      }
  
      const checkFolder = await Folder.findOne({foldername: folder.foldername, userid: user._id})
      if(checkFolder){
        // console.log('FOlder is already created')
        let error = new Error('Folder is Already Created')
        throw error
        
      }
      // console.log(body)
      const response = await Folder.create({...body});
      console.log(response)
      res.status(200).send({
        foldername: folder,
      })
      
    } catch (error) {
      console.log(error.message)
      res.status(400).send({
        error: error.message
      })
    }
    
  }
}