import { npmAPI as service } from '@src/plugins/axios.js';

export default {
  getPackageDownloads: function (pkgName) {
    return service.get(`/downloads/range/last-year/${pkgName}`);
  },
};
