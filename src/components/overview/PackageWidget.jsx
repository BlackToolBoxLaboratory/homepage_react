import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Chart from 'react-apexcharts';
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

import reviseISOString from '@src/../utils/reviseISOString.js';
import { lang } from '@src/plugins/btblab-prototype-languages.js';
import API_npmAPI from '@src/apis/npmAPI.js';

import { LoadingDiv } from '@src/modules/loadingDiv';

import createChartOptions from './chartOptions.js';

const WEEK = 7;

const PackageWidget = (props) => {
  const state_Series = useSeriesState();

  const series = [
    {
      name: lang.translate('chart.times'),
      data: state_Series.series,
    },
  ];

  useEffect(() => {
    _getDownloads(props.data.name);
  }, []);

  function _getDownloads(pkgName) {
    API_npmAPI.getPackageDownloads(pkgName).then(({ data }) => {
      state_Series.update(data.downloads);
    });
  }

  return (
    <div className={classnames('btb-overview-package-widget', props.className)}>
      <p className="widget_title">
        {props.data.name}
        <a
          className="inline-link"
          href={`https://www.npmjs.com/package/${props.data.name}`}
          target="_blank"
          rel="noreferrer"
        >
          <FAI icon={['fas', 'external-link-alt']} fixedWidth size="xs"/>
        </a>
      </p>
      <p className="widget_description">{props.data.description}</p>
      <p>
        <span className="widget_entry">{lang.translate('overview.version_colon')}</span>
        <span className="widget_value">{props.data.version}</span>
      </p>
      <p>
        <span className="widget_entry">{lang.translate('overview.release_colon')}</span>
        <span className="widget_value">{reviseISOString(props.data.date).date}</span>
      </p>
      {series[0].data.length ? (
        <>
          <p>
            <span className="widget_entry">{lang.translate('overview.download_colon')}</span>
            <span className="widget_value">{state_Series.series[state_Series.series.length - 1]}</span>
          </p>
          <div className="widget_chart">
            <p className="widget_row">
              <span className="widget_entry">{lang.translate('overview.downloads_colon')}</span>
            </p>
            <Chart options={createChartOptions(props.type)} series={series} type="area" height="100%" />
          </div>
        </>
      ) : (
        <div className="widget_chart chart-loading">
          <LoadingDiv />
        </div>
      )}
    </div>
  );
};

function useSeriesState() {
  const [series, setState] = useState([]);

  function _extractToWeekly(data) {
    data.reverse();
    let weekData = Array(Math.ceil(data.length / WEEK))
      .fill(0)
      .map((entry, index) => {
        let count = 0;
        for (let i = index * WEEK; i < Math.min((index + 1) * WEEK, data.length); i++) {
          count += data[i].downloads;
        }
        return count;
      });
    return weekData.reverse();
  }
  return {
    series,
    update: (data) => {
      setState(_extractToWeekly(data || []));
    },
  };
}

export default PackageWidget;
