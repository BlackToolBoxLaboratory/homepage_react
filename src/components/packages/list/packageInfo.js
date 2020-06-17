import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  'version'     : packageObj.list.version,
  'updated'     : packageObj.list.updated,
  'description' : packageObj.list.description,
  'linkList'    : [
    { 
      'id'  : 'github', 
      'fa'  : ['fab', 'github'], 
      'url' : packageObj.list.link.github
    }, { 
      'id'  : 'npm', 
      'fa'  : ['fab', 'npm'], 
      'url' : packageObj.list.link.npm
    }
  ]
};

export default packageInfo;