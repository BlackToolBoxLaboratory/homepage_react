import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  'version'     : packageObj.popover.version,
  'updated'     : packageObj.popover.updated,
  'description' : packageObj.popover.description,
  'linkList'    : [
    { 
      'id'  : 'github', 
      'fa'  : ['fab', 'github'], 
      'url' : packageObj.popover.link.github
    }, { 
      'id'  : 'npm', 
      'fa'  : ['fab', 'npm'], 
      'url' : packageObj.popover.link.npm
    }
  ]
};

export default packageInfo;