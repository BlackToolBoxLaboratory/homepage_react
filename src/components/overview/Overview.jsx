import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { lang } from '@src/plugins/btblab-prototype-languages.js';
import { openLink } from '@src/utils/functions.js';
import API_npmRegistry from '@src/apis/npmRegistry.js';
import { Page, PageHead, Section } from '@src/modules/pageLayout';
import { LoadingDiv } from '@src/modules/loadingDiv';

import PackageWidget from './PackageWidget.jsx';
import pageInfo from './pageInfo.js';

const Overview = () => {
  useSelector((state) => {
    return {
      languageSetting: state.language.languageSetting,
    };
  });
  const state_Packages = {
    js: usePackagesState(),
    react: usePackagesState(),
    vue: usePackagesState(),
  };

  useEffect(() => {
    _getPackages('js');
    _getPackages('react');
    _getPackages('vue');
  }, []);

  function _getPackages(type) {
    API_npmRegistry.getPackages(type).then(({ data }) => {
      state_Packages[type].update(data.objects);
    });
  }
  function _renderPackages(type) {
    if (state_Packages[type].packages.length) {
      return (
        <div className="grid-row">
          {state_Packages[type].packages.map((entry) => {
            return (
              <div className="grid-col-lg-6" key={entry.package.name}>
                <PackageWidget data={entry.package} type={type} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return <LoadingDiv />;
    }
  }

  return (
    <Page id="btb-overview">
      <PageHead title={lang.translate('overview.title')} clickBtn={openLink} linkList={pageInfo.linkList} />
      <Section head={'JAVASCRIPT'}>{_renderPackages('js')}</Section>
      <Section head={'REACT'}>{_renderPackages('react')}</Section>
      <Section head={'VUE'}>{_renderPackages('vue')}</Section>
    </Page>
  );
};

function usePackagesState() {
  const [packages, setState] = useState([]);
  return {
    packages,
    update: (data) => {
      setState(data || []);
    },
  };
}

export default Overview;
