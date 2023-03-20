import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}
const mutations = {
 ADD(state,value){
  state.todo.unshift(value)
 },
 AFFIRM(state,value){
  state.todo.forEach((item)=>{
    if(value === item.name){
      item.done = !item.done
    }
    if(item.done){
       state.finish.push(item)
       state.todo.filter((itema)=>{
        itema.done ==false
       })
    }
  });
 }
}
const state = {
  todo:[
    {name:'第一类',done:false},
    {name:'第二类',done:false}
  ],
  finish:[
    
  ],
}
export default new Vuex.Store({
  actions,
  mutations,
  state
})
