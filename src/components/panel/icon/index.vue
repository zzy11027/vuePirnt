<template>
  <div class="options-box">
    <template v-for="(item,index) in optionItems">
      <el-button size="mini" :key="index" @click="(e) => {addTempItem(e,item)}">{{ item.title }}</el-button>
    </template>
  </div>
</template>

<script>
//
import vptd from '../../../mixins/vptd'

export default {
  // components: { TxtOption, ImageOption, HtmlOption },
  mixins: [vptd],
  data() {
    return {}
  },
  computed: {
    optionItems() {
      return this.$vptd.state.optionIcons
    },
    // 系统打印项
    systemLayers() {
      let widget = this.$vptd.state.widgetSetting
      return [
        { ...widget['braid-txt'], title: '静态文本', value: '静态文本', dynamic: false },
        { ...widget['braid-txt'], title: '动态文本', dynamic: true },

        { ...widget['braid-image'], title: '静态图片', dynamic: false },
        { ...widget['braid-image'], title: '动态图片', dynamic: true },

        { ...widget['braid-html'], title: '静态html', dynamic: false },
        { ...widget['braid-html'], title: '动态html', dynamic: true },

        { ...widget['braid-tabel'], title: '表格', dynamic: true }
      ]
    }
  },
  mounted() {
    console.log(this.$vptd.state.optionIcons)
  },
  methods: {
    // 添加组件
    addTempItem(e, item) {
      console.log('e,item :>> ', e, item)
      switch (item.type) {
        // case 'braid-braid-icon': {
        //   let selectCol = []
        //   item.columns.forEach((col) => {
        //     for (let colAttr of item.columnsAttr) {
        //       if (colAttr.name == col) {
        //         selectCol.push(colAttr)
        //         break
        //       }
        //     }
        //   })
        //   item.columns = selectCol //表格显示的字段
        //   this.$vptd.dispatch('addTempItem', item)
        //   break
        // }
        default:
          this.$vptd.dispatch('addIconItem', item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.options-box {
  .el-button {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 0;
  }
}
</style>
