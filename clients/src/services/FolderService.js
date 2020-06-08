import Api from './Api';

export default {
  foldercreate(foldername){
    return Api().post('/folder/create', foldername)
  },

  getFolder(){
    return Api().get('/get/folder')
  }
}