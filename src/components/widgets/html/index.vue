<template>
    <div
      v-html="val.value"
      class="widgets"
      :contenteditable="!!val.isEdit"
      @blur="(e) => updateText(e, val.uuid)"
      :style="{
        position:'absolute',
        left: val.left + 'px' ,
        top:  val.top + 'px',
        width: val.width + 'px',
        background: val.background,
        height: val.height + 'px',
        zIndex: val.style.zIndex,
        fontSize: val.style.FontSize + 'pt',
        color: val.style.FontColor,
      }"
      :class="{isLine:val.name !== 'H-line'}"
    ></div>
</template>

<script>
import vptd from '../../../mixins/vptd'
const WIDGET_NAME = 'braid-html'

export default {
  mixins: [vptd],
  name: WIDGET_NAME,
  setting: {
    type: WIDGET_NAME,
    isEdit: false,
    dragable: true, // 是否可拖拽
    resizable: true, // 尺寸是否可变
    dynamic: false, // 是否为动态内容
    width: 200,
    height: 2,
    background:'#000',
    left: 50,
    top: 0,
    title: 'html',
    value: '<div>html<div>',
    defaultValue: '<div>html<div>',
    name: '',
    style: {
      zIndex: 0,
      ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
      AutoHeight: 0, // 高度自动（模板在该元素位置以下的元素都关联打印）
      BottomMargin: 0, // 距离下边距
    },
  },
  props: [
    'val', // 文本对象
  ],
  mounted() {
    console.log('this.val :>> ', this.val);
  },
  methods: {
    updateText(e, uuid) {
      let text = e.target.innerHTML
      this.$vptd.commit('updateData', {
        uuid: uuid,
        key: 'value',
        value: text,
      })
    },
  },
}
</script>
<style>
  .isLine {
    background: none!important;
    height: 40px!important;
  }
</style>

