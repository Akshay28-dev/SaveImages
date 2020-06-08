import Api from './Api';

export default {
  uploadImage(imageDetails){
    return Api().post('/upload/images', imageDetails)
  }
}