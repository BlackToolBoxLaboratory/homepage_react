import Language, { initializer } from '@blacktoolbox/prototype-languages';

import en from '@src/assets/languages/en.js';
import zh from '@src/assets/languages/zh.js';

initializer([
  { index: 'en', label: 'English', dictionary: en },
  { index: 'zh', label: '繁體中文', dictionary: zh },
]);

export const lang = new Language();
