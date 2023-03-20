<template>
    <li>
      <input type="checkbox" :checked="todolist.done" @click="affirm()"/>
      <span>{{todolist.name}}</span>
    </li>
</template>

<script>
// import { mapState } from 'vuex';
export default {
    props:['todolist'],
    // computed:{
    //     ...mapState(['todo'])
    // },
    methods:{
        affirm(){
           this.$store.commit('AFFIRM',this.todolist.name)
        },
    }
};
</script>

<style>
        .content>.todocenter>.proceed>li{
          width: 100%;
          height: 30px;
          line-height: 30px;
          border: 1px solid #a7a2a2be;
         border-left: 5px solid #cf1818;
          margin: 10px 0;
        }
</style>