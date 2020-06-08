var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var folderSchema = new Schema(
  {
    userid:{
      type: Schema.Types.ObjectId,
      required: true
    },
    foldername:{
      type: String,
      required: true
    }
  }
)

var Folder
try {
  Folder = mongoose.model('folder')
} catch {
  Folder = mongoose.model('folder', folderSchema)
};

module.exports = Folder;