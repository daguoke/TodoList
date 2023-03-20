<template>
    <li>
      <span>{{this.finishlist.name}}</span>
    </li>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props:['finishlist'],
    computed:{
      ...mapState(['todo','finish'])
    },
    // mounted(){
    //     this.finish.push({name:'xiaoming',done:false})
    //  this.todo.forEach((item)=>{
    //     if(item.done){
    //       this.finish.push(item)
    //     }
    //  })
    //  console.log(this.finish);
    // }
};
</script>

<style>
 .content>.todocenter>.accomplish>li{
          width: 100%;
          height: 30px;
          line-height: 30px;
          border: 1px solid #a7a2a2be;
         border-left: 5px solid #18cf52;
          margin: 10px 0;
        }
</style>