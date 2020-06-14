import { initializer } from '@blacktoolbox/prototype-languages';

import en_US from '@/assets/languages/en_US';
import zh_TW from '@/assets/languages/zh_TW';

initializer([
  { index : 'en_US', label : 'US', dictionary : en_US },
  { index : 'zh_TW', label : 'Taiwan', dictionary : zh_TW }
]);