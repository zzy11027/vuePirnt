export default {
  // 添加模板项
  addTempItem({ state, commit, store }, item) {
      commit("addTempItem", { item });
      // 设置选中
      commit("select", {
        uuid: state.page.tempItems[state.page.tempItems.length - 1].uuid
      });
  },
  // 添加ICON
  addIconItem({ state, commit, store }, item) {
      commit("addIconItem", { item });
      // 设置选中
      commit("selectIcon", {
        uuid: state.page.IconItems[state.page.IconItems.length - 1].uuid
      });
  },

  // 初始化模板设计器
  async designerInit({ state, commit, store }, tempInfo) {
    commit("initOptionItems", tempInfo.options);
    commit("initPage", tempInfo.tempValue);
    commit("initIcon", tempInfo.icon);
  }
};
