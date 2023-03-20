<template>
  <div class="content">
    <div class="todocenter">
      <div class="proceed">
        <h2>正在进行</h2>
        <todoproceed v-for="(todolist,index) in todo" :key="index" :todolist="todolist"/>
        
      </div>
      <div class="accomplish">
        <h2>已经完成</h2>
        <todoaccomplish v-for="(finishlist,index) in finish" :key="index" :finishlist="finishlist"/>
      </div>
    </div>
  </div>
</template>

<script>
import todoproceed from "./todo-proceed.vue";
import todoaccomplish from "./todo-accomplish.vue";
import { mapState } from "vuex";
export default {
  components: {
    todoproceed,
    todoaccomplish,
  },
  computed: {
    ...mapState(["todo","finish"]),
  },
};
</script>

<style>
.todocenter {
  width: 800px;
  margin: 0 auto;
}
.content>.todocenter h2{
          color: #000;
          margin: 20px 0;
        }
</style>