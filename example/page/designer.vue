<template>
  <kr-print-designer :temp-value="value" :widget-options="widgets" :icon-options="iconArr" @save="handleSave" />
</template>
<script>
import { OutStockOptions, InStockOptions, iconArr } from '../data/options'
export default {
  name:"vue-print",
  data() {
    return {
      index: '',
      value: {
        title: 'demo',
        width: 750,
        height: 550,
        pageWidth: 750,
        pageHeight: 550,
        tempItems: [],
        IconItems: []
      },
      widgets: OutStockOptions,
      iconArr: iconArr
    }
  },

  created() {
    this.index = this.$route.query.index
    try {
      let tempList = JSON.parse(localStorage.getItem('tempList')) || []
      this.value = tempList[this.index]
      this.widgets = this.value.type == 1 ? OutStockOptions : InStockOptions
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
<<<<<<< HEAD
    handleSave(data) {
      console.log('data :>> ', data);
=======
    handleSave(data,num) {
>>>>>>> branch-1.0.0
      let tempList = JSON.parse(localStorage.getItem('tempList')) || []
      tempList[this.index] = data
      localStorage.setItem('tempList', JSON.stringify(tempList))
      this.$router.back();
    }
  }
}
</script>
