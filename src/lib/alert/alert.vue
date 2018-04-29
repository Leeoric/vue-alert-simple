<template>
  <transition name="alert-fade">
    <div class="alert-wrap" v-if="visible">
        <div class="alert-main-body" :style="{width: width}">
          <div class="alert-header">
            <slot name="header">
              <span class="alert-title">{{title}}</span>
            </slot>
          </div>
          <div class="alert-body">
            <slot name="body">
              <p class="alert-content">{{content}}</p>
            </slot>
          </div>
          <div class="hairline-bottom"></div>
          <div class="alert-footer">
            <slot name="footer">
              <button type="button"
                      class="alert-footer-close"
                      @click="close">{{buttonText}}
              </button>
            </slot>
          </div>
        </div>
      <div class="backdrop"></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-alert',
    props: {
      width: {
        type: String,
        default: '280px'
      },
      title: {
        type: String,
        default: '提示'
      },
      content: {
        type: String,
        default: ''
      },
      buttonText: {
        type: String,
        default: '关闭'
      },
      visible: {
        type: Boolean,
        default: false
      },
      closeVisible: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  @import "./ios.scss";

  .alert-fade-enter {
    transform: scale(1.3);
    opacity: 0;
  }

  .alert-fade-leave-to {
    opacity: 0;
    transform: scale(2.3);
  }

  .alert-fade-enter-active {
    transition: all .3s;
  }

</style>
