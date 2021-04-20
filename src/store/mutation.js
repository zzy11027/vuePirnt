const generate = require("nanoid/generate");
import { getDefaultProps, styleMap } from "../libs/props.js";
export default {
  // 初始化页面属性
  initPage(state, pageInfo) {
    console.log("pageInfo :>> ", pageInfo);
    state.page = pageInfo;
    // 补全默认样式
    let tempItems = pageInfo.tempItems
      ? pageInfo.tempItems.map(item => {
          let optionItem = {
            ...state.widgetSetting[item.type],
            ...item,
            style: {
              ...state.widgetSetting[item.type].style,
              ...(item.style || {})
            }
          };
          return optionItem;
        })
      : [];
    state.page.tempItems = tempItems;
    state.page.IconItems = tempItems;
  },
  // 初始化icon对象
  initIcon(state, options) {
    console.log("options :>> ", options);
    // state.optionIcons = options;
    // state.page.IconItems = [];

    let optionsObject = options
      ? options.map(item => {
          let optionItem = {
            ...state.widgetSetting[item.type],
            ...item,
            style: {
              ...state.widgetSetting[item.type].style,
              ...(item.style || {})
            }
          };
          return optionItem;
        })
      : [];

    state.optionIcons = optionsObject;
  },
  // 初始化可选对象
  initOptionItems(state, options) {
    console.log("icon :>> ", options);
    // 补全默认属性
    let optionsObject = options
      ? options.map(item => {
          let optionItem = {
            ...state.widgetSetting[item.type],
            ...item,
            style: {
              ...state.widgetSetting[item.type].style,
              ...(item.style || {})
            }
          };
          return optionItem;
        })
      : [];

    state.optionItems = optionsObject;
  },

  // 初始化选中对象
  initActive(state) {
    state.activeElement = getDefaultProps();
  },

  // 设置 mousemove 操作的初始值
  initmove(state, payload) {
    state.startX = payload.startX;
    state.startY = payload.startY;
    state.originX = payload.originX;
    state.originY = payload.originY;
    state.moving = true;
  },

  // 选中元件与取消选中
  select(state, payload) {
    console.log("payload :>> ", payload);
    state.uuid = payload.uuid;
    if (payload.uuid === -1) {
      state.activeElement = getDefaultProps();
      state.type = "page";
    } else {
      let widget = state.page.tempItems.find(w => w.uuid === payload.uuid);
      console.log("widget :>> ", widget);
      state.activeElement = widget;
      state.type = widget.type;
    }
  },

  selectIcon(state, payload) {
    state.uuid = payload.uuid;
    console.log("state :>> ", state);
    if (payload.uuid === -1) {
      state.activeElement = getDefaultProps();
      state.type = "page";
    } else {
      let widget = state.page.IconItems.find(w => w.uuid === payload.uuid);
      console.log("widget :>> ", widget);
      state.activeElement = widget;
      state.type = widget.type;
    }
  },

  // 元件移动结束
  stopmove(state) {
    state.moving = false;
  },

  // 移动元件
  move(state, payload) {
    var target = state.activeElement;
    var dx = payload.x - state.startX;
    var dy = payload.y - state.startY;
    var left = state.originX + Math.floor((dx * 100) / state.zoom);
    var top = state.originY + Math.floor((dy * 100) / state.zoom);

    target.left = left > 0 ? left : 0;
    target.top = top > 0 ? top : 0;
  },

  // 调整元件尺寸
  resize(state, payload) {
    var dx = payload.x - state.startX;
    var dy = payload.y - state.startY;
    var value;

    if (payload.type === "right") {
      value = state.originX + Math.floor((dx * 100) / state.zoom);
      state.activeElement.width = value > 10 ? value : 10;
      return;
    }

    if (payload.type === "down") {
      value = state.originX + Math.floor((dy * 100) / state.zoom);
      state.activeElement.height = value > 10 ? value : 10;
      return;
    }

    if (payload.type === "left") {
      var left = state.originX + Math.floor((dx * 100) / state.zoom);
      var width = state.originY - Math.floor((dx * 100) / state.zoom);
      state.activeElement.left = left > 0 ? left : 0;
      state.activeElement.width = width > 10 ? width : 10;
      return;
    }

    if (payload.type === "up") {
      var top = state.originX + Math.floor((dy * 100) / state.zoom);
      var height = state.originY - Math.floor((dy * 100) / state.zoom);
      state.activeElement.top = top > 0 ? top : 0;
      state.activeElement.height = height > 10 ? height : 10;
    }
  },

  // 更新元件初始 top 值
  updateSrollTop(state, top) {
    state.top = top;
  },

  // 页面缩放
  zoom(state, val) {
    state.zoom = val;
  },

  // 删除选中元件
  delete(state, uuid) {
    var type = state.type;
    if (type === "page") return;
    let index = 0;
    state.page.tempItems.forEach((item, idx) => {
      if (item.uuid === uuid) {
        index = idx;
      }
    });
    // 删除元件
    state.page.tempItems.splice(index, 1);

    // 重置 activeElement
    state.activeElement = getDefaultProps();
    state.type = "page";
    state.uuid = -1;
  },

  // 添加组件
  addTempItem(state, { data: data = null, item }) {
    console.log("state,data,item :>> ", state, data, item);
    let def = { uuid: generate("1234567890abcdef", 10) };
    let setting = JSON.parse(JSON.stringify(item));

    if (data) {
      data.forEach(function(val) {
        state.page.tempItems.push(Object.assign(setting, val, def));
      });
    } else {
      console.log("state,page.tempItems :>> ", state.page.tempItems);

      state.page.tempItems.push(Object.assign(setting, def));
    }
  },

  //添加icon
  addIconItem(state, { data: data = null, item }) {
    console.log("item :>> ", item);
    let def = { uuid: generate("1234567890abcdef", 10) };
    let setting = JSON.parse(JSON.stringify(item));
    if (data) {
      data.forEach(function(val) {
        state.page.IconItems.push(Object.assign(setting, val, def));
      });
    } else {
      console.log("state.page :>> ", state.page);
      state.page.IconItems.push(Object.assign(setting, def));
      console.log("state.page.IconItems :>> ", state.page.IconItems);
    }
  },

  // 替换图片
  replaceImage(state, payload) {
    state.activeElement.width = payload[0].width;
    state.activeElement.url = payload[0].url;
  },

  // 添加容器背景图
  addContainerBackPic(state, payload) {
    state.activeElement.backPic = payload[0].url;
    state.activeElement.backPicUrl = payload[0].src;
    state.activeElement.width = payload[0].width;
    state.activeElement.height = payload[0].height;
  },

  // 添加背景图
  addBackPic(state, payload) {
    state.activeElement.backPic = payload[0].url;
    state.activeElement.backPicUrl = payload[0].src;
  },

  // 更新数据
  updateData(state, { uuid, key, value }) {
    let widget = state.page.tempItems.find(w => w.uuid === uuid);
    widget[key] = value;
  },

  // 设置模板Id
  setTempId(state, id) {
    state.tempId = id;
  },

  setLoading(state, flag) {
    state.loading = flag;
  },
  // 设置模板默认属性
  setWidgetSetting(state, settingObj) {
    state.widgetSetting = settingObj;
  }
};
