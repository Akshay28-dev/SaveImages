const state = () =>({
  names: []
});

const mutations = {
  setFoldername(state, foldername){
    console.log(foldername)
    if(foldername){
      state.name = []
      for( var i = 0; i < foldername.length; i++){
        state.name.push(foldername[i].foldername)
      }
    }
    else{
      console.log("State Value Become Null")
      state.name = []
    }
  }
}

const actions = {
  setFoldername ({commit}, foldername) {
    commit('setFoldername', foldername)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}