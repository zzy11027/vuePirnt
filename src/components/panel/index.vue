<template>
  <div class="kr-collapse">
    <el-collapse v-model="activeNames">
      <el-collapse-item title name="1">
        <template slot="title">
          <span>页面参数</span>
        </template>
        <page />
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <span>样式</span>
        </template>
        <appearance class="pd-l-10" />
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <span>自定义组件</span>
        </template>
        <custom />
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <span>组件</span>
        </template>
        <options />
      </el-collapse-item>
      <el-collapse-item name="5">
        <template slot="title">
          <span>图标</span>
        </template>
        <icon />
      </el-collapse-item>
      <el-collapse-item name="6">
        <template slot="title">
          <span>已加组件</span>
        </template>
        <layers />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import page from './page.vue'
import style from './style.vue'
import options from './options/index.vue'
import custom from './custom/index.vue'
import icon from './icon/index.vue'
import layers from './layers.vue'

export default {
  components: {
    page,
    appearance: style,
    custom,
    options,
    icon,
    layers
  },

  data() {
    return {
      activeNames: ['1', '2', ]
      // activeNames: ['1', '2', '3', '4']
    }
  }
}
</script>
