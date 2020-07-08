import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  'version'     : packageObj.button.version,
  'updated'     : packageObj.button.updated,
  'description' : packageObj.button.description,
  'linkList'    : [
    { 
      'id'  : 'github', 
      'fa'  : ['fab', 'github'], 
      'url' : packageObj.button.link.github
    }, { 
      'id'  : 'npm', 
      'fa'  : ['fab', 'npm'], 
      'url' : packageObj.button.link.npm
    }
  ]
};

export default packageInfo;