<template>
  <div class="options-box">
    <template v-for="(item,index) in customItems">
      <el-popover v-if="item.type == 'braid-image'" :key="index" placement="top" width="200">
        <div>
          <el-input v-model="item.value" placeholder="请输入图片地址"></el-input>
          <el-button size="mini" type="primary" @click="(e) => {addTempItem(e,item)}">确定</el-button>
        </div>
        <el-button size="mini" slot="reference">{{ item.title }}</el-button>
      </el-popover>
      <el-button v-else size="mini" :key="index" @click="(e) => {addTempItem(e,item)}">{{ item.title }}</el-button>
    </template>
  </div>
</template>

<script>
import vptd from '../../../mixins/vptd'
export default {
  mixins: [vptd],
  data() {
    return {}
  },
  computed: {
    customItems() {
      return this.$vptd.state.customItems
    },
  },
  methods: {
    // 添加组件
    addTempItem(e, item) {
      switch (item.type) {
        case 'braid-table': {
          let selectCol = []
          item.columns.forEach((col) => {
            for (let colAttr of item.columnsAttr) {
              if (colAttr.name == col) {
                selectCol.push(colAttr)
                break
              }
            }
          })
          item.columns = selectCol //表格显示的字段
          this.$vptd.dispatch('addTempItem', item)
          break
        }
        default:
          this.$vptd.dispatch('addTempItem', item)
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
