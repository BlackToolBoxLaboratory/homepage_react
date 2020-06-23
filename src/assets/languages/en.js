export default {
  'menu' : {
    'about'    : 'About',
    'packages' : {
      'root'  : 'Packages',
      'basic' : 'Basic',
      'list'  : {
        'root'    : 'List',
        'example' : {
          'list'  : 'Example-List',
          'menu'  : 'Example-Menu',
          'style' : 'Example-Style',
          'slot'  : 'Example-Slot'
        }
      },
      'table' : {
        'root'    : 'Table',
        'example' : {
          'list'    : 'Example-List',
          'info'    : 'Example-Info',
          'compare' : 'Example-Compare',
          'style'   : 'Example-Style',
          'slot'    : 'Example-Slot'
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
      'nodeTree'     : 'NODE TREE'
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
        'ref'             : 'For the feature of React.ref'
      },
      'entryObj' : {
        'id'               : 'Identity of entry.',
        'title'            : 'Name of entry.',
        'defaultCollapsed' : 'Default value to collapsed of extend.',
        'children'         : 'sublist'
      },
      'slotObj' : {
        'entryObj' : 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (entry) => {}. And the entry is the source data specified.'
      },
      'nodeTree' : {
        'notice' : 'Note: The layer count is counted base on 0.'
      }
    },
    'table' : {
      'name'        : 'Table',
      'description' : {
        'basic' : 'This module of table creator made with React can do the help to make a table component to our page. It has modes in list and info which are different ways to show data.'
      }
    },
    'popover' : {
      'name'        : 'Popover',
      'description' : {
        'basic' : 'This module of popover creator made with React can do the help to make a popover component to our page. The popover can do th e thing about popover and dropdown.'
      }
    }
  }
};