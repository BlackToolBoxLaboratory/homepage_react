const menuList = new Array(
  { 
    "index":  "ABOUT",
    "name":   "About"
  },
  {
    "index":  "BTB",
    "name":   "Libraries",
    "children":[
      {
        "index":  "BTB_DEMO",
        "name":   "Demo"
      },
      {
        "index":  "BTB_MENU",
        "name":   "Menu",
        "children":[
          {
            "index":  "BTB_MENU_BASIC",
            "name":   "Basic"
          },
          {
            "index":  "BTB_MENU_ADV",
            "name":   "Advanced"
          }
        ]
      }
    ]
  }
);

export default menuList;
