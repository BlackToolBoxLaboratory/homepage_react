export default {
  'menu' : {
    'about'    : '關於本站',
    'packages' : {
      'root'  : '套件',
      'basic' : '基本介紹',
      'list'  : {
        'root'    : '清單',
        'example' : {
          'list'  : '範例：清單',
          'menu'  : '範例：選單',
          'style' : '範例：客製外觀',
          'slot'  : '範例：客製渲染'
        }
      },
      'table' : {
        'root'    : '表',
        'example' : {
          'list'    : '範例：清冊表',
          'info'    : '範例：資料表',
          'compare' : '範例：比較表',
          'style'   : '範例：客製外觀',
          'slot'    : '範例：客製渲染'
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
      'nodeTree'     : '節點樹',
      'example'      : '範例',
      'sourceCode'   : '源代碼'
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
      },
      'example' : {
        'list' : {
          'title'       : '範例：清單',
          'description' : '最基本的清單，僅需要輸入資料的陣列即可。'
        },
        'menu' : {
          'title'       : '範例：選單',
          'description' : '當我們啟用展開/收合的功能時，簡易地選單就產生了，同時當資料的物件被點擊時，還會觸發 onToggle 或 onEntryClick，如果是有子目錄的物件，便會觸發 onToggle，反之則觸發 onEntryClick，如果是有子目錄的物件，便會觸發，並且，事件函式的輸入參數為被點擊物件的原始資料。另外，我們能用 defaultActiveID 指定預設激活的物件，也可以配合 useState 控制 activeID。'
        },
        'style' : {
          'title'       : '範例：客製外觀',
          'description' : '這邊將展示如何使用 styleObj，以 inline CSS 的方式客製套件的外觀，並示範如何結合 activeID 的使用，標記出激活中的物件，但也可以僅以 defaultActiveID 標記初始激活的物件，最後再以 styleObj 於對應的 className 設定外觀。'
        },
        'slot' : {
          'title'       : '範例：客製渲染',
          'description' : '單純的外觀渲染，可能過於單調，有些物件的渲染也許會需要一些客製化：渲染成表單、按鈕 ... 等，因此，可以利用 slotObj 的方式，用字串、節點或函式的方式客製節點的渲染。'
        }
      }
    },
    'table' : {
      'name'        : '表',
      'description' : {
        'basic' : '表的設計本身分成三種模式：列表、資訊與資訊並列，使用視窗監聽，再配合客製化的外觀。即可完成漂亮的響應式的表顯示。未來還會再擴充表頭的設定功能，讓表可以更輕易地完成：分頁、排序、搜尋、欄位過濾等功能。'
      },
      'parameters' : {
        'styleObj' : '套件中任何具有 className 的節點，皆能使用 styleObj 定義 inline CSS。',
        'slotObj'  : '藉由 bodyObj.id，我們可以在 slotObj 客製表的資料渲染內容，並且利用前綴 th_ 與 td_ 指定想要客製的部分。',
      },
      'property' : {
        'headData'    : 'headObj 的陣列。',
        'bodyData'    : 'bodyObj 的陣列。',
        'mode'        : '切換表的顯示方式：list、info、compare.',
        'styleObj'    : '客製化外觀。',
        'slotObj'     : '客製化表頭、資料。',
        'onDataClick' : '資料點擊事件函式。',
        'ref'         : '支援 React.ref。'
      },
      'headObj' : {
        'id'   : '表頭識別名。',
        'name' : '表頭顯示名。'
      },
      'slotObj' : {
        'th' : '套件支援客製化節點的功能，當以函式客製節點渲染時，函式初始為 (headObj) => {} ，其中輸入值為該節點的表頭資料。',
        'td' : '套件支援客製化節點的功能，當以函式客製節點渲染時，函式初始為 (bodyObj, headObj) => {} ，其中輸入值為該節點的原始資料與表頭資料。'
      },
      'nodeTree' : {
        'notice'  : '附註：資料的流水號係由0開始。',
        'list'    : '清冊表',
        'info'    : '資料表',
        'compare' : '比較表'
      },
      'example' : {
        'list' : {
          'title'       : '範例：清冊表',
          'description' : '輸入表頭、資料後，即可匯出最基本的表。'
        },
        'info' : {
          'title'       : '範例：資料表',
          'description' : '輸入表頭、資料後，再切換成資料模式即可。'
        },
        'compare' : {
          'title'       : '範例：比較表',
          'description' : '輸入表頭、資料後，再切換成比對模式即可。'
        },
        'style' : {
          'title'       : '範例：客製外觀',
          'description' : '這邊將展示如何使用 styleObj，以 inline CSS 的方式，於對應的 className 設定外觀。'
        },
        'slot' : {
          'title'       : '範例：客製渲染',
          'description' : '單純的外觀渲染，可能過於單調，有些物件的渲染也許會需要一些客製化：渲染成表單、按鈕 ... 等，因此，可以利用 slotObj 的方式，用字串、節點或函式的方式客製節點的渲染。'
        }
      }
    },
    'popover' : {
      'name'        : '氣泡框',
      'description' : {
        'basic' : '氣泡框預設有偵測視窗邊界的功能，可靈活的切換顯示位置與對齊方式，也具有強制鎖定顯示狀態的設計，另外如果結合氣泡框與清單的套件，便可成為下拉式選單。'
      },
      'parameters' : {
        'styleObj' : '套件中任何具有 className 的節點，皆能使用 styleObj 定義 inline CSS。'
      },
      'property' : {
        'showState'    : '控制氣泡框顯示狀態。',
        'showPosition' : '控制氣泡框顯示位置：top、right、bottom、left。',
        'showAlign'    : '控制氣泡框對齊位置：begin、center、end。',
        'stateLock'    : '鎖定目前氣泡框顯示狀態。',
        'withArrow'    : '控制顯示為對話框。',
        'autoDetect'   : '自動偵測式窗邊界功能，並自動切換氣泡框顯示與對齊位置。預設為啟用。',
        'trigger'      : '渲染氣泡框觸發節點。',
        'styleObj'     : '客製化外觀。',
        'onToggle'     : '氣泡框狀態切換事件函式。',
        'onShow'       : '顯示氣泡框事件函式。',
        'onHide'       : '隱藏氣泡框事件函式。',
        'ref'          : '支援 React.ref。'
      }
    }
  }
};