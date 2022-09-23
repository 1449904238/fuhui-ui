<template>
  <div class="f-input-tag">
    <div class="tag" v-for="(item, index) in tagList" :key="index" :name="tagsType === 2 ? item[format.label] : item">
      <span class="tag-txt">{{ tagsType === 2 ? item[format.label] : item }}</span>
      <img class="close" :src="require('@/assets/close_fill.png')" @click="handleClose(item, index)" />
    </div>
    <input class="input" ref="input" v-if="isEdit" v-model="inputValue" @blur="onBlur" />
    <button class="button" @click="handleAdd">{{
      btnTitle
    }}</button>
  </div>
</template>

<script>
  export default {
    name: 'FInputTag',
    data() {
      return {
        tagList: [],
        isEdit: false,
        inputValue: "",
        tagsType: 1, // value类型 1 Array-String 2 Array-object
      };
    },
    props: {
      btnTitle: {
        type: String,
        default: "添加标签",
      },
      value: {
        type: [Array, Object], // Array: 元素分为纯文字和obj类型
        default: () => {
          return []
        }
      },
      format: {
        // 数据结构格式
        type: Object,
        default: () => {
          return {
            value: "value",
            label: "label",
          };
        },
      },
    },
    watch: {
      value: {
        handler(val) {
          if (val) {
            if (typeof val === "object" && val.length > 0) {
              if (typeof val[0] === "string") {
                this.tagsType = 1;
              } else if (typeof val[0] === "object") {
                this.tagsType = 2;
              }
              this.tagList = JSON.parse(JSON.stringify(val));
            }
          }
        },
        deep: true,
        immediate: true,
      },
    },
    mounted() {},
    methods: {
      handleAdd() {
        this.isEdit = true;
      },
      onBlur() {
        if (this.inputValue) {
          if (this.tagsType === 1) {
            this.tagList.push(this.inputValue);
          } else {
            this.tagList.push({
              [this.format.value]: "",
              [this.format.label]: this.inputValue,
            });
          }
        }
        this.inputValue = "";
        this.isEdit = false;
        this.output();
      },
      handleClose(item, index) {
        this.tagList.splice(index, 1);
        this.output();
      },
      output() {
        this.$emit("input", this.tagList);
      },
    },
  };
</script>
<style scoped lang="less">
  .f-input-tag {
    display: flex;
    align-items: center;

    .tag {
      border: 1px solid #999999;
      padding: 2px 5px;
      margin: 5px;
      border-radius: 2px;
      height: 20px;
    }

    .close {
      width: 14px;
      height: 14px;
      vertical-align: middle;
    }

    .tag-txt {
      font-size: 14px;
      color: #333;
      margin-right: 5px;
    }

    .input {
      height: 20px;
      margin-right: 5px;
      border: 1px solid #999999;
      outline: none;
      padding: 2px 5px;
      border-radius: 2px;
    }

    .button {
      /* height: 20px; */
      border-radius: 2px;
      padding: 2px 5px;
      font-size: 14px;
      border: 1px solid #999999;
    }
  }
</style>
