export default {
  'menu' : {
    'about'    : '關於本站',
    'packages' : {
      'root'  : '套件',
      'basic' : '基本介紹',
      'list'  : {
        'root'    : '清單',
        'example' : {
          'list'  : '範例-List',
          'menu'  : '範例-Menu',
          'style' : '範例-Style',
          'slot'  : '範例-Slot'
        }
      },
      'table' : {
        'root'    : '表',
        'example' : {
          'list'    : '範例-List',
          'info'    : '範例-Info',
          'compare' : '範例-Compare',
          'style'   : '範例-Style',
          'slot'    : '範例-Slot'
        }
      },
      'popover' : {
        'root' : '氣泡框',
      }
    },
    'application' : {
      'root'      : '應用套件',
      'languages' : '多語言切換器',
      'validator' : '驗證器'
    },
    'version_1' : '前往舊站 v1'
  },
  'about' : {
    'description' : 'React 是我入門前端時，第一個學習的JavaScript框架，事實上，在這之前也有使用 jQuery 的開發經驗，當我還是嵌入式系統的軟體工程師時。這邊主要基於 React 的設計思維，利用其 React 特有的性質來開發低依賴性、高自由度的套件，以利於完成客製化需求，如果這些套件在使用上有什麼困難，或者對於套件的開發有其他的想法或期待，還請多多與我分享您的想法。',
    'donate'      : {
      '1' : '如果您喜歡 BTB Lab. 的開發成果與設計方式。您的',
      '2' : '小小捐款',
      '3' : '是給予我莫大的肯定與鼓勵。'
    }
  },
  'package' : {
    'version_colon' : '發布版本：',
    'release_colon' : '發布日期：',
    'section'       : {
      'installation' : '安裝',
      'render'       : '渲染',
      'parameters'   : '參數',
      'nodeTree'     : '節點樹'
    },
    'paramType' : {
      'array'    : '陣列',
      'object'   : '物件',
      'string'   : '字串',
      'function' : '函式',
      'boolean'  : '布林',
      'node'     : '節點'
    },
    'list' : {
      'name'        : '清單',
      'description' : {
        'basic' : '這個套件結合清單與菜單的功能，利用展開收闔的功能，以及導頁的功能(React-router, history,...等)，便是後台網站常見的菜單，配合我們設計的氣泡框。便可成為下拉式選單。'
      },
      'parameters' : {
        'entryObj' : '如果 entry.children 有被定義。則當點擊時會觸發 onToggle ，反之，則觸發 onEntryClick 。',
        'styleObj' : '套件中任何具有 className 的節點，皆能使用 styleObj 定義 inline CSS。',
        'slotObj'  : '資料中的項目皆能以 id 在 slotObj 定義客製化的節點內容。',
      },
      'property' : {
        'dataList'        : 'entryObj 的陣列。',
        'activeID'        : '激活的 entry 的 id。',
        'defaultActiveID' : '預設激活的 entry 的 id。',
        'collapseEnable'  : '開啟展開 / 收合功能。',
        'styleObj'        : '客製化外觀。',
        'slotObj'         : '客製化節點。',
        'onEntryClick'    : '項目點擊事件函式。',
        'onToggle'        : '項目層展開 / 收合切換之事件函式。',
        'ref'             : '支援 React.ref。'
      },
      'entryObj' : {
        'id'               : '項目識別名。',
        'title'            : '項目顯示名。',
        'defaultCollapsed' : '當項目具有子清單，可預設展開 / 收合狀態。',
        'children'         : '子清單。'
      },
      'slotObj' : {
        'entryObj' : '套件支援客製化節點的功能，當以函式客製節點渲染時，函式初始為 (entry) => {} ，其中輸入值為該節點的原始資料。'
      },
      'nodeTree' : {
        'notice' : '附註：層的計算係由0開始。'
      }
    },
    'table' : {
      'name'        : '表',
      'description' : {
        'basic' : '表的設計本身分成三種模式：列表、資訊與資訊並列，使用視窗監聽，再配合客製化的外觀。即可完成漂亮的響應式的表顯示。未來還會再擴充表頭的設定功能，讓表可以更輕易地完成：分頁、排序、搜尋、欄位過濾等功能。'
      }
    },
    'popover' : {
      'name'        : '氣泡框',
      'description' : {
        'basic' : '氣泡框預設有偵測視窗邊界的功能，可靈活的切換顯示位置與對齊方式，也具有強制鎖定顯示狀態的設計，另外如果結合氣泡框與清單的套件，便可成為下拉式選單。'
      }
    }
  }
};