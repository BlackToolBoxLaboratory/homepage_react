export default {
  menu: {
    about: 'About',
    overview: 'Overview',
    packages: {
      root: 'Packages',
      basic: 'Basic',
      list: {
        root: 'List',
        example: {
          list: 'Example: List',
          menu: 'Example: Menu',
          style: 'Example: Style',
          slot: 'Example: Slot',
        },
      },
      table: {
        root: 'Table',
        example: {
          list: 'Example: List',
          info: 'Example: Info',
          compare: 'Example: Compare',
          style: 'Example: Style',
          slot: 'Example: Slot',
        },
      },
      form: {
        root: 'Form',
        basic: {
          input: 'Basic: Input',
          select: 'Basic: Select',
          radio: 'Basic: Radio',
          checkbox: 'Basic: Checkbox',
          textarea: 'Basic: Textarea',
        },
        example: {
          input: 'Example: Input',
          select: 'Example: Select',
          radio: 'Example: Radio',
          checkbox: 'Example: Checkbox',
          textarea: 'Example: Textarea',
        },
      },
      popover: {
        root: 'Popover',
        example: {
          position: 'Example: Position',
          align: 'Example: Align',
        },
      },
      button: {
        root: 'Button',
        basic: {
          button: 'Basic: Button',
          group: 'Basic: Group',
        },
        example: {
          button: 'Example: Button',
          group: 'Example: Group',
          pagination: 'Example: Pagination',
          style: 'Example: Style',
          slot: 'Example: Slot',
        },
      },
      message: {
        root: 'Message',
        basic: {
          message: 'Basic: Message',
          notice: 'Basic: Notice',
        },
        example: {
          message: 'Example: Message',
          notice: 'Example: Notice',
        },
      },
      popup: {
        root: 'Popup',
        example: 'Example',
      },
      timeline: {
        root: 'Timeline',
        example: {
          position: 'Example: Position',
          align: 'Example: Align',
        },
      },
      localstorage: 'SyncLocalstorage',
      folder: 'ComponentFolder',
    },
    application: {
      root: 'Application',
      fbsdk: {
        root: 'Facebook SDK',
        basic: 'Basic',
        apis: 'APIs',
        components: 'Social Plugins',
      },
      languages: 'Languages',
      validator: 'Validator',
    },
    version_1: 'Version 1',
  },
  about: {
    description:
      'React is the first framework of javascript when I join to the Frontend develipment club. Before that jQuery of curse is my first using when I am a software engineer. Here I aim to develop packages made with React. They are designed with basic logic for high degrees of freedom of customization and low dependency. While using, if you find some questions, bugs or issues. Or having some great ideas. Please feel free to let me know.',
  },
  overview: {
    title: 'Overview',
    version_colon: 'Version: ',
    release_colon: 'Release Date: ',
    download_colon: 'Latest Downloads: ',
    downloads_colon: 'Weekly Downloads: ',
  },
  package: {
    version_colon: 'Version: ',
    release_colon: 'Release Date: ',
    section: {
      installation: 'INSTALLATION',
      render: 'RENDER',
      parameters: 'PARAMETERS',
      nodeTree: 'NODE TREE',
      example: 'EXAMPLE',
      sourceCode: 'SOURCE CODE',
    },
    paramType: {
      array: 'Array',
      object: 'Object',
      string: 'String',
      number: 'Number',
      function: 'Function',
      boolean: 'Boolean',
      node: 'Node',
      any: 'Any',
    },
    list: {
      name: 'List',
      description: {
        basic:
          'This module of list creator made with React can do the help to make a list or mane component to our page. Normally it is a list make. But with some trigger action it can be a menu maker for route redirection or other feature we need.',
      },
      parameters: {
        entryObj:
          'If entry.children is defined. While clicking this entry will trigger onToggle. If not, it will trigger onEntryClick.',
        styleObj: 'Any className in this module could add inline CSS by styleObj.',
        slotObj: 'We could replace the default node with entryobj.id by slotObj.',
      },
      property: {
        dataList: 'List of entryObj.',
        activeID: 'Actived entry.',
        defaultActiveID: 'Default actived entry.',
        collapseEnable: 'Enable the feature of collapse.',
        styleObj: 'Object of customized style.',
        slotObj: 'Object of slot which for render specific entry.',
        onEntryClick: 'Function for entry clicked.',
        onToggle: 'Fuction for while collapseEnable is ture and some collapsing triggered.',
        ref: 'For the feature of React.ref.',
      },
      entryObj: {
        id: 'Identity of entry.',
        title: 'Name of entry.',
        href: 'Link of entry. Used for menu link',
        defaultCollapsed: 'Default value to collapsed of extend.',
        children: 'Sublist.',
      },
      slotObj: {
        entryObj:
          'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (entry) => {}. And the entry is the source data.',
      },
      nodeTree: {
        notice: 'Note: The layer count is counted base on 0.',
      },
      example: {
        list: {
          title: 'Example: List',
          description: 'Here is a very simple example for a list, if we just give a data list.',
        },
        menu: {
          title: 'Example: Menu',
          description:
            'When we enable the collapseEnable with datalist, we will get a simple menu to use. And it will trigger the onToggle event function while clicked for Collapsing or Expending. Every entry can be active status after being clicked. Surely it will trigger the onEntryClick event function too. Besides for a menu, it can tag one as defaultActiveID. Also utilize the useState to work with activeID.',
        },
        style: {
          title: 'Example: Style',
          description:
            'Here is going to show you about how to use the styleObj and the example of activeID. The activeID is used to mark focused entry, but also allowed to used defaultActiveID to mark entry as default in the begin. Then we can modify the style by the styleObj with using the node class name directly.',
        },
        slot: {
          title: 'Example: Slot',
          description:
            'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, I show you how to customized the entry which ID is b2. For the package of list, every single ID corresponding to dataList can be customized by slotObj in String, Node, or Function way.',
        },
      },
    },
    form: {
      name: {
        form: 'Form',
        input: 'Input',
        select: 'Select',
        radio: 'Radio',
        checkbox: 'Checkbox',
        textarea: 'Textarea',
      },
      description: {
        basic:
          'Not only repackage the tags of form. We also add some the features we often add to each form component. Enhance the form component from original form tags. In the future we will create some advanced component for form using.',
      },
      parameters: {
        styleObj: 'Any className in this module could add inline CSS by styleObj.',
      },
      property: {
        prependNode: 'Definition of the prepend space of the form.',
        appendNode: 'Definition of the append space of the form.',
        beforeNode: 'Definition of the before space of the form.',
        afterNode: 'Definition of the after space of the form.',
        input: 'Original props of input are available.',
        select: 'Original props of select are available.',
        radio: 'Original props of radio are available.',
        checkbox: 'Original props of checkbox are available.',
        textarea: 'Original props of textarea are available.',
        radioValue: 'The value of checked from radio.',
        radioSize: 'The size of radio.',
        radioColor: 'The color of checked radio.',
        checkboxValue: 'The list of values checked from checkbox.',
        checkboxSize: 'The size of checkbox.',
        checkboxColor: 'The main color of checked checkbox.',
        checkboxSignColor: 'The sign color of checked checkbox.',
        showCounter: 'Show the length of text. And it can use with maxLength.',
        inline: 'Show inline.',
      },
      example: {
        input: {
          title: 'Example: Input',
          description: 'Mostly input added the prepend and appened of inner and outer.',
        },
        select: {
          title: 'Example: Select',
          description:
            'Select added the the prepend and appened to outer, but only add prepend to inner. Because the appened of inner is reserved to arrow button of select.',
        },
        radio: {
          title: 'Example: Radio',
          description: 'For customized easiler, the radio is design to be color changable.',
        },
        checkbox: {
          title: 'Example: Checkbox',
          description: 'For customized easiler, the checkbox is design to be color changable.',
        },
        textarea: {
          title: 'Example: Textarea',
          description: 'Textarea add the string counter and it can be used with maxLength.',
        },
      },
    },
    table: {
      name: 'Table',
      description: {
        basic:
          'This module of table creator made with React can do the help to make a table component to our page. It has modes of list, info and compare which are different ways to show data.',
      },
      parameters: {
        styleObj: 'Any className in this module could add inline CSS by styleObj.',
        slotObj:
          'We could replace the default node with bodyObj.id by slotObj. However we need the prefix to specify which node we want to customized th or td.',
      },
      property: {
        headData: 'List of headObj.',
        bodyData: 'List of bodyObj.',
        mode: 'Value in list, info or compare.',
        styleObj: 'Object of customized style.',
        slotObj: 'Object of customized entry of head or body.',
        onDataClick: 'Function for data clicked.',
        ref: 'For the feature of React.ref.',
      },
      headObj: {
        id: 'Identity of column.',
        name: 'Name of column.',
      },
      slotObj: {
        th: 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (headObj) => {}. And the entry is the head data.',
        td: 'Slot for customized entry. Here is the example for function if used. The porps will be entry corresponding the id. If you are using function to slot, the function will be (bodyObj, headObj) => {}. And the entry is the source data and head data.',
      },
      nodeTree: {
        notice: 'Note: The data order is counted base on 0.',
        list: 'List Mode',
        info: 'Info Mode',
        compare: 'Compare Mode',
      },
      example: {
        list: {
          title: 'Example: List',
          description: 'Here has very simple example to show how to use the list mode.',
        },
        info: {
          title: 'Example: Info',
          description: 'Here has very simple example to show how to use the info mode.',
        },
        compare: {
          title: 'Example: Compare',
          description: 'Here has very simple example to show how to use the compare mode.',
        },
        style: {
          title: 'Example: Style',
          description:
            'Here is going to show you about how to use the styleObj for inline CSS. Then we can use with the class name of node directly.',
        },
        slot: {
          title: 'Example: Slot',
          description:
            'Sometimes we may want to show the entry from the list by button, input, icon, ... etc. Then we can ultilize this feature about customized slot. To the example as following, It shows how to customized by slotObj in String, Node, or Function way.',
        },
      },
    },
    popover: {
      name: 'Popover',
      description: {
        basic:
          'This module of popover creator made with React can do the help to make a popover component to our page. The popover can do the thing about popover and dropdown.',
      },
      parameters: {
        styleObj: 'Any className in this module could add inline CSS by styleObj.',
      },
      property: {
        showState: 'We could use the parameter to overwrite the showState of popover.',
        showPosition: 'The position of popover. Options in top, right, bottom, left.',
        showAlign: 'The align of popover. Options in begin, center, end.',
        withArrow: 'The tiny caret to let popover become conversation block. Get it false when we prefer a dropdown.',
        autoDetect:
          "The feature of auto-detecting window's inner edge of browser. When the popover show overglow to browser, it will adjust by self. We could get it false, if we don't need the feature working. Default is ture.",
        trigger: 'Render the popover toggle trigger node.',
        styleObj: 'Object of customized style.',
        onToggle: 'Event function trigged when popover is toggle no matter showing or hiding.',
        onShow: 'Event function trigged when popover is going to show.',
        onHide: 'Event function trigged when popover is going to hidd.',
        ref: 'For the feature of React.ref.',
      },
      example: {
        vertical: 'Vertical',
        horizontal: 'Horizontal',
        position: {
          title: 'Example: Position',
          description:
            'Here is simply to show the popover with position configured. The popover is default to enable autoDetect function which means while the popover showing over the boundary of browser. It will adjust automatically.',
        },
        align: {
          title: 'Example: Align',
          description:
            'Here is simply to show the popover with align configured. The popover is default to enable autoDetect function which means while the popover showing over the boundary of browser. It will adjust automatically.',
        },
      },
    },
    button: {
      name: {
        button: 'Button',
        group: 'Group',
      },
      description: {
        basic:
          'This module of button / button group creator made with React which can do the help to make a button / button group component to our page. Actually both components are designed totally different. So I just put them into one package for utilization with single installation.',
        button:
          "This module of button / button group creator made with React which can do the help to make a button / button group component to our page. Actually both components are designed totally different. So I just put them into one package for utilization with single installation. Here I introduce you how to use the button component. Most fancy layout of button could be implemented via CSS. Even though this part is not my lab's target to develop components. I still will give some example to show how to implement some layout of button.",
        group:
          'This module of button / button group creator made with React which can do the help to make a button / button group component to our page. Actually both components are designed totally different. So I just put them into one package for utilization with single installation. Here I introduce you how to use the button group component. And I will show you how to utilize the button group to implement the pagination which is usually used with table.',
      },
      parameters: {
        styleObj: 'Any className in this module could add inline CSS by styleObj.',
      },
      property: {
        buttonList: 'Textual List of buttons',
        activeID:
          'Actived button. If the button came from buttonList, the format of id will be `list_${order}`. And if the buttom came from children, the format of id will be `children_${order}`. And the order is counted base on 0.',
        defaultActiveID: 'Default actived button.',
        prependNode: 'Definition of the prepend space of the button.',
        appendNode: 'Definition of the append space of the button.',
        direction: 'The direction of button group. Options in horizontal, vertical.',
        listDisaled: 'List of disabled buttons for buttonList. The value is order of button.',
        childrenDisaled: 'List of disabled buttons for children.The value is order of button.',
        styleObj: 'Object of customized style.',
        onButtonClick: 'Event function trigged when the button is clicked.',
        onEntryClick: 'Event function trigged when the sub-button(member) group is clicked.',
        onPrependClick: 'Event function trigged when preppend item of the button is clicked.',
        onCoreClick: 'Event function trigged when main of the button is clicked.',
        onAppendClick: 'Event function trigged when append item of the button is clicked.',
        disabled: 'When button is disabled, it will not trigger any event function.',
        ref: 'For the feature of React.ref.',
      },
      nodeTree: {
        notice: 'Note: The orders both are counted base on 0.',
      },
      example: {
        button: {
          title: 'Example: Button',
          description:
            'Here showing you how to create the button which you can easily add the node in prepend or apprend. And also add the event to them and to whole button. And you can see what happened on console after clicking.',
        },
        group: {
          title: 'Example: Group',
          description:
            "Here we are going to show you how to create the group button. Besides to change the direction of showing buttons. It' able to add the click event function for memeber buttons.",
        },
        pagination: {
          title: 'Example: Pagination',
          description:
            'Here we are going to show you how to combine our button and group button to be a pagination button. And here is the point of development from our laboratory. We develop components for some developers who can easily combine our components to be whatever they want to satsfy the requirement of customization. And if they don not need to handle the customized requirement, our components can not help them too much.',
        },
        style: {
          title: 'Example: Style',
          description:
            'Here is going to show you about how to use the styleObj for inline CSS. Then we can use with the class name of node directly.',
        },
      },
    },
    message: {
      name: {
        message: 'Message',
        notice: 'Notice',
      },
      description: {
        basic:
          'This component is seperate in to two parts: dynamic and static. Because they are used in different way, they will have page to introduce for each.',
        message: "here designing my Message component in React's hook function, to allow showing messages dynamic.",
        notice:
          'And the other side, if we are not using calling way to show the time-short message. Here is the option to render the component on the page directly as static messages.',
        useMessage:
          'The package is the first package to use hook degign of mine. Here introduce you the hook function.',
      },
      property: {
        limit: 'The Showing limitation of message.',
        transitionInDuration: 'transition duration of showing. (miliisecond)',
        transitionOutDuration: 'transition duration of disapear. (miliisecond)',
        duration: 'Duration of showing the message. (miliisecond)',
        horizontal: 'Horizonal position of message: left, center, right.',
        vertical: 'Vertical position of message: top, middle, bottom.',
        closeable: 'Able to cancel the message',
        type: 'Type of message. The package included some style to use already. Of course you can customize by self. The type is just control the className. Optiopn: blue, grey, green, red, yello, light, dark.',
        context: 'Context of message.',
        closerNode:
          'It works only if enable the parameter of closeable. The parameter is used to render the button of closer.',
      },
      example: {
        message: {
          title: 'Example: Message',
          style: 'style',
          event: 'Event',
          description:
            'Here is showing in the way of hook, to that we can dynamically send messages to inform the page viewer.',
        },
        notice: {
          title: 'Example: Notice',
          style: 'style',
          description:
            'If you do not need the dynamic way of showing message, there is still the way to render the component of message.',
        },
      },
    },
    popup: {
      name: 'Popup',
      description: {
        basic:
          'This module of popup is used for confirm, alert, warning, ... and so on, for interactive sub-windows. Or for showing a few information or form inputs of data.',
        usePopup: 'The module is controlled to show and hide via hook function. Here introduce you the hook function.',
      },
      property: {
        defaultTransitionDuration: 'Default value to transition duration of disapear. (miliisecond)',
        defaultPersistent: 'Default value to enable/disable to hide popup after background clicked.',
        content: 'Content of popup.',
        duration: 'Transition duration of disapear. (miliisecond)',
        persistent: 'Enable/disable to hide popup after background clicked.',
        onShow: 'Event function trigged when popover is going to show.',
        onHide: 'Event function trigged when popover is going to hidd.',
      },
    },
    timeline: {
      name: 'Timeline',
      description: {
        basic:
          'This module of timeline creator made with React can do the help to make a timeline component to our page.',
      },
      parameters: {
        nodeObj:
          "Used with typeObj, when required to render some type of event specifically. It's available to defined nodeObj to the node you wanted in the nodeList.",
        typeObj: 'Define some render function for specific node on timeline.',
        styleObj: 'Any className in this module could add inline CSS by styleObj.',
      },
      property: {
        nodeList: 'The event list in the timeline.',
        showPosition: 'The position of node container to the timeline. Options in left, right, x, top, bottom, y.',
        showAlign: 'The align of node on the timeline. Options in begin, center, end.',
        typeObj: 'Object of render function for nodeList.',
        styleObj: 'Object of customized style.',
        ref: 'For the feature of React.ref.',
      },
      example: {
        vertical: 'Vertical',
        horizontal: 'Horizontal',
        position: {
          title: 'Example: Position',
          description: 'Here is simply to show the position of node container to the timeline.',
        },
        align: {
          title: 'Example: Align',
          description: 'Here is simply to show the align of node on the timeline.',
        },
      },
    },
    localstorage: {
      name: 'Sync-Localstorage',
      description:
        'We can use original lacalstorage function or using react-redux with redux-persist. However this is a tiny component for some scenario of using lacalstorage without react-redux.',
      property: {
        name: 'The key name in localstorage, suggested to use prject or product name for recognization.',
        useSyncLocalStorage:
          'The module controll localstorage via hook function. Here introduce you the hook function.',
      },
    },
    folder: {
      name: 'Component-Folder',
      description:
        "This is a very tiny component for foldering components in some scenario. To avoid too much increase indent in HTML's nodes when there are layers and layers of single-children components. This component can do the help.",
      property: {
        components: "The components list and each entry will be the previous entry's children",
      },
      example: {
        old: {
          title: 'Original Nodes',
          description:
            'Assume we are using react-redux, react-router, as you see we have to add two provider in out index.js. We will get more layers, if we use components more which are application of context/provider.',
        },
        new: {
          title: 'Folered Nodes',
          description:
            'As previous said, this component is made to folder the layers which are single-children components.',
          notice:
            'Because of most people will using ES-Lint. Here is suggested to use a temporary disable to react/jsx-key. Due to there are no necessary to render with key, unless you do really need in some special cases.',
        },
      },
    },
  },
  application: {
    version_colon: 'Version: ',
    release_colon: 'Release Date: ',
    section: {
      installation: 'INSTALLATION',
      initializer: 'INITIALIZER',
      impletement: 'IMPLEMENT',
      trigger: 'TRIGGER',
      result: 'RESULT',
    },
    facebookSDK: {
      name: 'Facebook SDK',
      description:
        "This package basically is not the original package. With purpose to organize all features from Facebook Javascript SDK, all parameters of features will be passed to SDK directly. Therefore all descriptions of parameters could be refered to orginal document. But this web-site also provide a document with organizing all pages of documents from orginal for the convenience to search. Due to it is not orginal package, its marjor number of version will follow to SDK's version. So, please be careful the versions about the document you refered and this package. And here we will introduce the package with three parts seperatly: basic, Application Programming Interfaces(APIs), Social Plugins(Components).",
      apis: {
        name: 'Application Programming Interfaces',
        description:
          'The package has two parts: Application Programming Interfaces(APIs), Components. And here we will revise the documents of APIs. All parameters are same as original. We just adjust a little about how to input them.',
      },
      components: {
        name: 'Social Plugins',
        description:
          'The package has two parts: Application Programming Interfaces(APIs), Components. And here we will revise the documents of Social Plugins. All parameters are same as original. We just adjust a little about how to input them.',
      },
    },
    languages: {
      name: 'Languages',
      description:
        'For developing the website of international services, we usually have the requirement to develop with the feature of multiple-languages supported. We already have a lot of masterpice such like i18n. But here we created our own multiple-languages package for lowing down the dependencies. Here I am going to show you how to ultilize the @blacktoolbox/prototype-languages with React based website.',
      installation: {
        description:
          'The more detail is intoduced in JavaScript Lab. The more detail you could see it there. Here it only present how to work with React based website.',
        linkName: 'Link of Document',
      },
      initializer: 'As @blacktoolbox/prototype-languages required, it need to be initialized before using.',
      impletement:
        'The package has storage itself to save the each dicionary of language which is the thing initializer do. And the other thing to do before using is implement a instance of the package. Most action processed with it: menu(), get(), set(), translate().',
      trigger: {
        description:
          'Here we are talking about how to re-render the page after we change the language settings. Of cause, we can do reload to the browser with localStorage, no matter witch type of website is. However mostly React is used in Single Page Application(SPA) development. We could ultilize the nature of React. Basically we have 2 ways to rerender the page: distpatch triggered and key triggered.',
        dispatch:
          'Combined the package with Store management related package(Flux, Redux, ...). We could re-render page we want after dispatched.',
        key: 'Here is a unusual way for specific scenario. Sometimes for UX required, it maybe be wanted to be the effect to reload whole page. With React, we do not need to do the reload really. We could use the key the mark the top node. After language is changed, the key will be changed too. Then the top node will be re-create like new component. Unless it required the network package re-download actually.',
      },
    },
    validator: {
      name: 'Validator',
      description:
        "Most form UI packages have their own validator to use for convenience. But sometimes we don't use only one UI packages to develop every single project. So we try to create the validator generally to adapt to every kind of form UI packages to allow us using just one type of validator coding patteren to develop with every UI packages.",
      installation: {
        description:
          'The more detail is intoduced in JavaScript Lab. The more detail you could see it there. Here it only present how to work with React based website.',
        linkName: 'Link of Document',
      },
      initializer: 'As @blacktoolbox/prototype-validator required, it need to be initialized before using.',
      result:
        'The structure of status for each event. Every event could be the three type of status: null, false, true. And null means the status is initialized. You can clean all via reset()',
    },
  },
  chart: {
    times: 'Times',
  },
};
