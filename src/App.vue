<template>
  <div id="app">
    <FImagePreview src="http://124.71.223.63:81/group1/M00/00/0B/wKgAVWMi7vKAfgP6ABDjF2llICw913.png"></FImagePreview>
    <fInputTag v-model="tagList"></fInputTag>
  </div>
</template>

<script>
  import FImagePreview from '@/packages/f-image-preview'
  import FInputTag from '@/packages/f-input-tag'

  export default {
    name: 'App',
    components: {
      FImagePreview,
      FInputTag
    },
    data() {
      return {
        // tagList: [{
        //   label: 'aaa',
        //   value: '1'
        // }, {
        //   label: 'bbb',
        //   value: '2'
        // }],
        tagList: ['aaa', 'bbb']
      }
    },
    watch:{
      tagList(val){
        console.log(val)
      }
    },
    methods: {}
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
