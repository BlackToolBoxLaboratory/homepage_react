import packageObj from '@src/assets/definitions/packageObj';

const packageInfo = {
  'version'           : packageObj.button.version,
  'updated'           : packageObj.button.updated,
  'descriptionButton' : packageObj.button.description.button,
  'descriptionGroup'  : packageObj.button.description.group,
  'linkList'          : [
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