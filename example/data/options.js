export const OutStockOptions = [
    {
    type: "bar-code",
    isEdit: 1,
    title: "自定义条码",
    value: "11111111111111111111111111",
    defaultValue: "自定义条码",
    name: ""
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "自定义文本11222333",
    value: "自定义文本123",
    defaultValue: "自定义文本",
    name: ""
  },
  {
    type: "braid-image",
    isEdit: 1,
    title: "自定义图片",
    value: "https://cli.vuejs.org/favicon.png",
    defaultValue: "https://cli.vuejs.org/favicon.png",
    name: ""
  },
  {
    type: "braid-html",
    isEdit: 1,
    title: "自定义html",
    value: "<b>自定义html</b>",
    defaultValue: "自定义html",
    name: ""
  },
  {
    type: "braid-txt",
    isEdit: 0,
    title: "公司名称",
    value: "{公司名称}",
    defaultValue: "某某公司",
    name: "companyName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "出库单号",
    value: "{出库单号}",
    defaultValue: "CK-1234567890",
    name: "stockoutCode"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "客户/供应商",
    value: "{客户/供应商}",
    defaultValue: "中国苹果",
    name: "unitName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "经办人",
    value: "{经办人}",
    defaultValue: "zj001",
    name: "handlerName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "出库类型",
    value: "{出库类型}",
    defaultValue: "销售出库",
    name: "stockoutType"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "出库仓库",
    value: "{出库仓库}",
    defaultValue: "北京仓库",
    name: "warehouseName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "出库时间",
    value: "{出库时间}",
    defaultValue: "2020-08-27 12:00:00",
    name: "businessDate"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "制单人",
    value: "{制单人}",
    defaultValue: "jz002",
    name: "createUserName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "制单时间",
    value: "{制单时间}",
    defaultValue: "2020-08-27 12:00:00",
    name: "created"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "收货人(销售)",
    value: "{收货人}",
    defaultValue: "刘某某",
    name: "receivePerson"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "收货电话(销售)",
    value: "{收货人电话}",
    defaultValue: "收货人",
    name: "receivePhone"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "收货地址(销售)",
    value: "{收货地址}",
    defaultValue: "四川成都",
    name: "address"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "合计金额",
    value: "{合计金额}",
    defaultValue: "123.00",
    name: "totalPrice"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "摘要",
    value: "{摘要}",
    defaultValue: "北京采购入库成都摘要",
    name: "remark"
  },
  {
    type: "braid-html",
    isEdit: 1,
    title: "分页",
    value: "{第##页/共##页}",
    defaultValue:
      "<font><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>",
    name: ""
  },
  {
    type: "braid-table",
    isEdit: 0,
    title: "出库商品明细",
    name: "details",
    value: "{details}",
    style: {},
    defaultValue: [
      {
        productName: "苹果ipone11pro",
        skuName: "iphone11pro256g",
        specModel: "165L",
        quantity: 3,
        snCode:
          "[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]",
        isUseSn: "1",
        price: "23.00"
      },
      {
        productName: "苹果ipone11pro",
        skuName: "iphone11pro124g",
        specModel: "165L",
        quantity: 3,
        snCode:
          "[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]",
        isUseSn: "1",
        price: "12.00"
      }
    ],
    tabelHtml: "",
    columnsAttr: [
      {
        title: "产品名称",
        value: "{产品名称}",
        name: "productName"
      },
      {
        title: "sku名称",
        value: "{sku名称}",
        name: "skuName"
      },
      {
        title: "规格型号",
        value: "{规格型号}",
        name: "specModel"
      },
      {
        title: "数量",
        value: "{数量}",
        name: "quantity"
      },
      {
        title: "单价",
        value: "{单价}",
        name: "price"
      },
      {
        title: "产品序列号",
        value: "产品序列号明细：<br>{产品序列号}",
        name: "snCode",
        trSet: {
          title: "产品序列号明细:",
          col: 5,
          margin: "50px"
        },
        type: "row",
        isShowName: "isUseSn",
        isShowValue: "1"
      }
    ],
    columns: []
  }
];

export const InStockOptions = [
  {
    type: "braid-txt",
    isEdit: 1,
    title: "自定义文本111",
    value: "自定义文本",
    defaultValue: "自定义文本",
    name: ""
  },
  {
    type: "braid-txt",
    isEdit: 0,
    title: "公司名称",
    value: "{公司名称}",
    defaultValue: "科技公司",
    name: "companyName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "入库单号",
    value: "{入库单号}",
    defaultValue: "RK-1234567890",
    name: "purcheckCode"
  },

  {
    type: "braid-txt",
    isEdit: 1,
    title: "供应商/客户",
    value: "{供应商/客户}",
    defaultValue: "中国苹果",
    name: "unitName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "采购业务员",
    value: "{采购业务员}",
    defaultValue: "zj001",
    name: "purchaseSaleManName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "入库类型",
    value: "{入库类型}",
    defaultValue: "采购入库",
    name: "purcheckType"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "入库仓库",
    value: "{入库仓库}",
    defaultValue: "成都仓库",
    name: "warehouseName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "入库时间",
    value: "{入库时间}",
    defaultValue: "2020-08-27 12:00:00",
    name: "businessDate"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "制单人",
    value: "{制单人}",
    defaultValue: "jz002",
    name: "createUserName"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "制单时间",
    value: "{制单时间}",
    defaultValue: "2020-08-27 12:00:00",
    name: "created"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "摘要",
    value: "{摘要}",
    defaultValue: "北京采购入库成都摘要",
    name: "remark"
  },
  {
    type: "braid-txt",
    isEdit: 1,
    title: "合计金额",
    value: "{合计金额}",
    defaultValue: "12331.00",
    name: "totalPrice"
  },
  {
    type: "braid-html",
    isEdit: 1,
    title: "分页",
    value: "{第##页/共##页}",
    defaultValue:
      "<font ><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>",
    name: ""
  },
  {
    type: "braid-table",
    isEdit: 0,
    title: "入库商品明细",
    name: "details",
    value: "{details}",
    style: {},
    defaultValue: [
      {
        productName: "苹果ipone11pro",
        skuName: "iphone11pro256g",
        specModel: "165L",
        quantity: 3,
        snCode:
          "[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]",
        isUseSn: "1",
        price: "12.00"
      },
      {
        productName: "苹果ipone11pro",
        skuName: "iphone11pro124g",
        specModel: "165L",
        quantity: 3,
        snCode:
          "[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]",
        isUseSn: "1",
        price: "12.00"
      }
    ],
    columnsAttr: [
      {
        title: "产品名称",
        value: "{产品名称}",
        name: "productName"
      },
      {
        title: "sku名称",
        value: "{sku名称}",
        name: "skuName"
      },
      {
        title: "规格型号",
        value: "{规格型号}",
        name: "specModel"
      },
      {
        title: "数量",
        value: "{数量}",
        name: "quantity"
      },
      {
        title: "单价",
        value: "{单价}",
        name: "price"
      },
      {
        title: "产品序列号",
        value: "产品序列号明细：<br>{产品序列号}",
        name: "snCode",
        trSet: {
          title: "产品序列号明细:",
          col: 5,
          margin: "50px"
        },
        type: "row",
        isShowName: "isUseSn",
        isShowValue: "1"
      }
    ],
    columns: []
  }
];

export const iconArr = [
  {
    type: "braid-icon",
    isEdit: 1,
    title: "表单icon",
    value: "表单icon",
    defaultValue: "表单icon",
    name: "icon-1",
    class: "icon-biaodan"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "车icon",
    value: "车icon",
    defaultValue: "车icon",
    name: "icon-2",
    class: "icon-che"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "大钱包icon",
    value: "大钱包icon",
    defaultValue: "大钱包icon",
    name: "icon-3",
    class: "icon-daqianbao"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "房产icon",
    value: "房产icon",
    defaultValue: "房产icon",
    name: "icon-4",
    class: "icon-fangchan"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "防护icon",
    value: "防护icon",
    defaultValue: "防护icon",
    name: "icon-5",
    class: "icon-fanghu"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "耳环金币icon",
    value: "耳环金币icon",
    defaultValue: "耳环金币icon",
    name: "icon-6",
    class: "icon-erhuanjinbi"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "购物袋icon",
    value: "购物袋icon",
    defaultValue: "购物袋icon",
    name: "icon-7",
    class: "icon-gouwudai"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "购物车icon",
    value: "购物车icon",
    defaultValue: "购物车icon",
    name: "icon-8",
    class: "icon-gouwuche"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "卡包icon",
    value: "卡包icon",
    defaultValue: "卡包icon",
    name: "icon-9",
    class: "icon-kabao"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "明细icon",
    value: "明细icon",
    defaultValue: "明细icon",
    name: "icon-10",
    class: "icon-mingxi"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "红包icon",
    value: "红包icon",
    defaultValue: "红包icon",
    name: "icon-11",
    class: "icon-hongbao"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "金币往返icon",
    value: "金币往返icon",
    defaultValue: "金币往返icon",
    name: "icon-12",
    class: "icon-jinbiwangfan"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "数据icon",
    value: "数据icon",
    defaultValue: "数据icon",
    name: "icon-13",
    class: "icon-shuju"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "钱包icon",
    value: "钱包icon",
    defaultValue: "钱包icon",
    name: "icon-14",
    class: "icon-qianbao"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "数据报表icon",
    value: "数据报表icon",
    defaultValue: "数据报表icon",
    name: "icon-15",
    class: "icon-shujubaobiao"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "条形码icon",
    value: "条形码icon",
    defaultValue: "条形码icon",
    name: "icon-16",
    class: "icon-tiaoxingma"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "往返icon",
    value: "往返icon",
    defaultValue: "往返icon",
    name: "icon-17",
    class: "icon-wangfan"
  },
  {
    type: "braid-icon",
    isEdit: 1,
    title: "铜钱icon",
    value: "铜钱icon",
    defaultValue: "铜钱icon",
    name: "icon-18",
    class: "icon-tongqian2"
  }
];
