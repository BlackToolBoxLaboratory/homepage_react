import { apis } from '@blacktoolbox/react-facebook-sdk';

apis.init({
  appId: process.env.FB_APP_ID,
  status: true,
  xfbml: true,
});
