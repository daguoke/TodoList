<template>
  <div class="todoListframe">
    <todoheader/>
    <todocontent/>
  </div>
</template>

<script>
import todoheader from './components/todo-header.vue'
import todocontent from './components/todo-content.vue'
export default {
  components:{
    todoheader,
    todocontent
  }
};
</script>

<style>
.todoListframe {
  width: 100%;
}
</style>