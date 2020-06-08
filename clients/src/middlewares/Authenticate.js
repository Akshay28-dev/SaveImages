export default{
  authenticate(isUserLogged){
    if (!isUserLogged){
      let error = new Error('No token');
      throw error
    }
  }
}