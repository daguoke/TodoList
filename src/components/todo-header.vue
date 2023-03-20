<template>
  <div class="todoheader">
    <div class="todocenter">
      <h2>TodoList</h2>
      <input
        type="text"
        placeholder="添加列表"
        v-model="title"
        @keyup.enter="add"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        title:''
    };
  },
  methods: {
    add() {
        const items = {name:this.title,done:false}
        this.$store.commit('ADD',items)  
        this.title=""
    },
  },
};
</script>

<style>
.todoheader {
  width: 100%;
  height: 50px;
  background-color: #000;
}

.todocenter {
  width: 800px;
  margin: 0 auto;
}

.todocenter > h2 {
  color: #ffff;
  line-height: 50px;
  float: left;
}

.todocenter > input {
  width: 300px;
  height: 30px;
  margin-top: 10px;
  background-color: #fff;
  float: right;
  border-radius: 8px;
}
</style>