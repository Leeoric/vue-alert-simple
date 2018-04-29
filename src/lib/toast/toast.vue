<template>
  <transition name="fade">
    <div class="toast-wrap" v-if="isShow">
      <span class="toast-msg">
        {{msg}}
      </span>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-toast',
    data() {
      return {
        msg: '',
        time: '3000',
        isShow: true
      }
    },
    mounted() {
      this.close()
    },
    methods: {
      close() {
        setTimeout(() => {
          this.isShow = false
        }, this.time)
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "../common/base";
  @import "../common/mixin";
  .toast-wrap {
    @include toast-center;
    padding: 15px;
    color: #fff;
    background-color: $color-toast-background;
    text-overflow: ellipsis;
    border-radius: 4px;
    z-index: $z-index-absolute-top;
    .toast-msg {
      font-size: $font-size-medium;
      line-height: $font-size-medium;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s linear;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
