import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import { LoadingDiv } from '@src/modules/loadingDiv/index.js';
import API_npmAPI from '@src/apis/npmAPI.js';
import { lang } from '@src/plugins/btblab-prototype-languages.js';
import reviseISOString from '@src/../utils/reviseISOString.js';

import chartOptions from './chartOptions.js';

const WEEK = 7;

const PackageWidget = (props) => {
  const state_Series = useSeriesState();

  const series = [
    {
      name : lang.translate('chart.times'),
      data : state_Series.series
    }
  ];

  useEffect(() => {
    _getDownloads(props.data.name);
  }, []);

  function _getDownloads (pkgName) {
    API_npmAPI.getPackageDownloads(pkgName).then(({data}) => {
      state_Series.update(data.downloads);
    });
  }
  
  return (
    <div className={['btb-overview-package-widget', props.className].join(' ')}>
      <p className="widget_title">{props.data.name}</p>
      <p className="widget_description">{props.data.description}</p>
      <p>
        <span className="widget_entry">{lang.translate('overview.version_colon')}</span>
        <span className="widget_value">{props.data.version}</span>
      </p>
      <p>
        <span className="widget_entry">{lang.translate('overview.release_colon')}</span>
        <span className="widget_value">{reviseISOString(props.data.date).date}</span>
      </p>
      {
        (series[0].data.length)? 
          (
            <div className="widget_chart">
              <p className="widget_row">
                <span className="widget_entry">{lang.translate('overview.downloads_colon')}</span>
              </p>
              <Chart
                options={chartOptions}
                series={series}
                type="area"
                height="100%"
              />
            </div>
          ) : (
            <div className="widget_chart grid-row justify-content-center align-items-center">
              <LoadingDiv />
            </div>
          )
      }
    </div>
  );
};

function useSeriesState () {
  const [series, setState] = useState([]);

  function _extractToWeekly(data) {
    data.reverse();
    let weekData = Array(Math.ceil(data.length/WEEK)).fill(0).map((entry, index) => {
      let count = 0;
      for (let i=index*WEEK; i < Math.min((index+1)*WEEK, data.length); i++) {
        count += data[i].downloads;
      }
      return count;
    });
    return weekData.reverse();
  }
  return {
    series,
    update : (data) => {
      setState(_extractToWeekly(data || []));
    }
  };
}

export default PackageWidget;