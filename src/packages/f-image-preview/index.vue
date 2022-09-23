<template>
  <div style="margin:5px" class="f-image-preview">
    <div class="imgbox" :class="[borderRadius?'borderRadius':'']" :style="{ width: width + 'px', height: height + 'px' }">
      <img @click="onPreview" class="img" :class="[borderRadius?'borderRadius':'']" :src="src" />
    </div>
    <div class="popup" v-if="toggle">
      <div class="popup-bg" @click="onPreview"></div>
      <img class="popup-img" :src="src" />
    </div>
  </div>
</template>
<script>
  export default {
    name: "FImagePreview",
    props: {
      src: {
        type: String,
        default: require("@/assets/defaultImg.png"),
      },
      width: {
        type: String,
        default: "220",
      },
      height: {
        type: String,
        default: "220",
      },
      borderRadius: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        toggle: false,
      };
    },
    methods: {
      onPreview() {
        this.toggle = !this.toggle;
      }
    },
  };
</script>
<style scoped lang="less">
  // import '@/packages/css/index.less'
  .f-image-preview {
    .imgbox {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid #eee;
      padding: 5px;
      border-radius: 4px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }

    .borderRadius {
      border-radius: 50%;
    }

    .popup {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      /* z-index: -1; */
    }

    .popup-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }

    .popup-img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
  }
</style>
