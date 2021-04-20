<template>
  <div
    class="widgets"
    :style="{
      position: 'absolute',
      width: val.width + 'px',
      height: val.height + 'px',
      left: val.left + 'px',
      top: val.top +'px',
      zIndex: val.zIndex
    }"
  >
  <svg class="icon" aria-hidden="true" :style="{fontSize:val.fontSize}">
      <use :xlink:href="`#${val.class}`"></use>
  </svg>
  <!-- <i class="iconfont" :class="val.class" :style="{fontSize:val.fontSize}"></i> -->
  </div>
</template>

<script>
const WIDGET_NAME = 'braid-icon'
export default {
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    title: '图标',
    isEdit: true,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    dynamic: true, // 是否为动态内容
    width: 40,
    height: 40,
    left: 50,
    top: 0,
    value: '',
    defaultValue: '',
    fontSize: "40px",
    name: '',
    style: {
      zIndex: 0,
      ItemType: 0 // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
    }
  },
  props: [
    'val' // 图片对象
  ],
  data() {
    return {}
  },
  computed: {
    imageUrl() {
      return this.val.value
    }
  },
  watch: {
    val(newVal) {
      this.imageUrl = newVal.value
    }
  }
}
</script>

<style scoped>
.braid-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}
</style>
