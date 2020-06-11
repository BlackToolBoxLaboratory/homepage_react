import React from 'react';

import { Page, PageHead } from '@src/modules/pageLayout/index.js';

import { openLink } from '@src/utils/functions.js';

const packageInfo = {
  'version'     : '1.1.1',
  'updated'     : 'Jan. 20, 2020',
  'description' : 'For developing the web-side of international services, we usually have the requirement to develop with the feature of multiple-languages supported. We already have a lot of masterpice such like i18n. But here we created our own multiple-languages package for lowing down the dependencies. And after adding a little code, we can apply it with other javascript frameworks like React, Vue ... and so on.',
  'btnList'     : [
    { 
      'id'  : 'github', 
      'fa'  : ['fab', 'github'], 
      'url' : 'https://github.com/BlackToolBoxLaboratory/prototype-languages' 
    }, { 
      'id'  : 'npm', 
      'fa'  : ['fab', 'npm'], 
      'url' : 'https://www.npmjs.com/package/@blacktoolbox/prototype-languages'
    }
  ]
};

const Languages = () => {
  return (
    <Page className="btb-app-languages">
      <PageHead title={'Languages Application'} clickBtn={openLink} btnList={packageInfo.btnList}/>
    </Page>
  );
};

export default Languages;