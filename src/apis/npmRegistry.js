import { npmRegistry as service } from '@src/plugins/axios.js';

export default {
  getPackageInfo: function (Id) {
    return service.get(`/${Id}`);
  },
  getPackages: function (lang) {
    let paramText = '@blacktoolbox';
    switch (lang) {
      case 'js':
        paramText += '/prototype-';
        break;
      case 'react':
        paramText += '/react-';
        break;
      case 'vue':
        paramText += '/vue-';
        break;
    }
    return service.get('/-/v1/search', {
      params: {
        text: paramText,
      },
    });
  },
};
