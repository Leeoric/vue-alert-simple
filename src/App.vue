<template>
  <div id="app">
    <button @click="open">点击我出现弹窗</button>
    <v-alert :visible="isShow" @close="close"></v-alert>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '请输入密码双',
      isShow: false
    }
  },
  mounted() {
    this.$toast({
      msg: this.msg,
      time: 500
    })
  },
  methods: {
    open() {
      this.isShow = true;
    },
    close() {
      this.isShow = false
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
</style>
