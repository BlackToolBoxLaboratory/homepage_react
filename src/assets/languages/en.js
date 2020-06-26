export default {
  'menu' : {
    'about'    : 'About',
    'packages' : {
      'root'  : 'Packages',
      'basic' : 'Basic',
      'list'  : {
        'root'    : 'List',
        'example' : {
          'list'  : 'Example: List',
          'menu'  : 'Example: Menu',
          'style' : 'Example: Style',
          'slot'  : 'Example: Slot'
        }
      },
      'table' : {
        'root'    : 'Table',
        'example' : {
          'list'    : 'Example: List',
          'info'    : 'Example: Info',
          'compare' : 'Example: Compare',
          'style'   : 'Example: Style',
          'slot'    : 'Example: Slot'
        }
      },
      'popover' : {
        'root' : 'Popover',
      }
    },
    'application' : {
      'root'      : 'Application',
      'languages' : 'Languages',
      'validator' : 'Validator'
    },
    'version_1' : 'Version 1'
  },
  'about' : {
    'description' : 'React is the first framework of javascript when I join to the Frontend develipment club. Before that jQuery of curse is my first using when I am a software engineer. Here I aim to develop packages made with React. They are designed with basic logic for high degrees of freedom of customization and low dependency. While using, if you find some questions, bugs or issues. Or having some great ideas. Please feel free to let me know.',
    'donate'      : {
      '1' : 'If you like all the works in BTB Lab. Please ',
      '2' : 'buy me a coffee',
      '3' : '.'
    }
  },
  'package' : {
    'version_colon' : 'Version: ',
    'release_colon' : 'Release Date: ',
    'section'       : {
      'installation' : 'INSTALLATION',
      'render'       : 'RENDER',
      'parameters'   : 'PARAMETERS',
      'nodeTree'     : 'NODE TREE',
      'example'      : 'EXAMPLE',
      'sourceCode'   : 'SOURCE CODE'
    },
    'paramType' : {
      'array'    : 'Array',
      'object'   : 'Object',
      'string'   : 'String',
      'function' : 'Function',
      'boolean'  : 'Boolean',
      'node'     : 'Node'
    },
    'list' : {
      'name'        : 'List',
      'description' : {
        'basic' : 'This module of list creator made with React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.'
      },
      'parameters' : {
        'entryObj' : 'If entry.children is defined. While clicking this entry will trigger onToggle. If not, it will trigger onEntryClick.',
        'styleObj' : 'Any className in this module could add inline CSS by styleObj.',
        'slotObj'  : 'We could replace the default node with entryobj.id by slotObj.',
      },
      'property' : {
        'dataList'        : 'List of entryObj.',
        'activeID'        : 'Actived entry.',
        'defaultActiveID' : 'Default actived entry.',
        'collapseEnable'  : 'Enable the feature of collapse.',
        'styleObj'        : 'Object of customized style.',
        'slotObj'         : 'Object of slot which for render specific entry.',
        'onEntryClick'    : 'Function for entry clicked.',
        'onToggle'        : 'Fuction for while collapseEnable is ture and some collapsing triggered.',
        'ref'             : 'For the feature of React.ref.'
      },
      'entryObj' : {
        'id'               : 'Identity of entry.',
        'title'            : 'Name of entry.',
        'defaultCollapsed' : 'Default value to collapsed of extend.',
        'children'         : 'sublist.'
      },
      'slotObj' : {
        'entryObj' : 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (entry) => {}. And the entry is the source data.'
      },
      'nodeTree' : {
        'notice' : 'Note: The layer count is counted base on 0.'
      },
      'example' : {
        'list' : {
          'title'       : 'Example: List',
          'description' : 'Here is a very simple example for a list, if we just give a data list.'
        },
        'menu' : {
          'title'       : 'Example: Menu',
          'description' : 'When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the onToggle event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the onEntryClick event function too. Besides for a menu, it can tag one as defaultActiveID. Also utilize the useState to work with activeID.'
        },
        'style' : {
          'title'       : 'Example: Style',
          'description' : 'Here is going to show you about how to use the styleObj and the example of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly.'
        },
        'slot' : {
          'title'       : 'Example: Slot',
          'description' : 'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to dataList can be customized by slotObj in String, Node, or Function way.'
        }
      }
    },
    'table' : {
      'name'        : 'Table',
      'description' : {
        'basic' : 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.'
      },
      'parameters' : {
        'styleObj' : 'Any className in this module could add inline CSS by styleObj.',
        'slotObj'  : 'We could replace the default node with bodyObj.id by slotObj. However we need the prefix to specify which node we want to customized th or td.'
      },
      'property' : {
        'headData'    : 'List of headObj.',
        'bodyData'    : 'List of bodyObj.',
        'mode'        : 'Value in list, info or compare.',
        'styleObj'    : 'Object of customized style.',
        'slotObj'     : 'Object of customized entry of head or body.',
        'onDataClick' : 'Function for data clicked.',
        'ref'         : 'For the feature of React.ref.'
      },
      'headObj' : {
        'id'   : 'Identity of column.',
        'name' : 'Name of column.',
      },
      'slotObj' : {
        'th' : 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (headObj) => {}. And the entry is the head data.',
        'td' : 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (bodyObj, headObj) => {}. And the entry is the source data and head data.'
      },
      'nodeTree' : {
        'notice'  : 'Note: The data order is counted base on 0.',
        'list'    : 'List Mode',
        'info'    : 'Info Mode',
        'compare' : 'Compare Mode'
      },
      'example' : {
        'list' : {
          'title'       : 'Example: List',
          'description' : 'Here has very simple example to show how to use the list mode.'
        },
        'info' : {
          'title'       : 'Example: Info',
          'description' : 'Here has very simple example to show how to use the info mode.'
        },
        'compare' : {
          'title'       : 'Example: Compare',
          'description' : 'Here has very simple example to show how to use the compare mode.'
        },
        'style' : {
          'title'       : 'Example: Style',
          'description' : 'Here is going to show you about how to use the styleObj for inline CSS. Then we can use with the class name of node directly.'
        },
        'slot' : {
          'title'       : 'Example: Slot',
          'description' : 'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, It shows how to customized by slotObj in String, Node, or Function way.'
        }
      }
    },
    'popover' : {
      'name'        : 'Popover',
      'description' : {
        'basic' : 'This module of popover creator made with React can do the help to make a popover component to our page. The popover can do th e thing about popover and dropdown.'
      },
      'parameters' : {
        'styleObj' : 'Any className in this module could add inline CSS by styleObj.'
      },
      'property' : {
        'showState'    : 'We could use the parameter to overwrite the showState of popover.',
        'showPosition' : 'The position of popover. Options in top, right, bottom, left.',
        'showAlign'    : 'The align of popover. Options in begin, center, end.',
        'stateLock'    : 'To keep showState in true or false.',
        'withArrow'    : 'The tiny caret to let popover become conversation block. Get it false when we prefer a dropdown.',
        'autoDetect'   : 'The feature of auto-detecting window\'s inner edge of browser. When the popover show overglow to browser, it will adjust by self. We could get it false, if we don\'t need the feature working. Default is ture.',
        'trigger'      : 'Render the popover toggle trigger node.',
        'styleObj'     : 'Object of customized style.',
        'onToggle'     : 'Event function trigged when popover is toggle no matter showing or hiding.',
        'onShow'       : 'Event function trigged when popover is going to show.',
        'onHide'       : 'Event function trigged when popover is going to hidd.',
        'ref'          : 'For the feature of React.ref.'
      }
    }
  }
};