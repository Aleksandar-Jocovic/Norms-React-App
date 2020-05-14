import React, { useContext, useState } from 'react';
import Chart from 'react-apexcharts';

import { GlobalContext } from '../context/GlobalState';

const Charts = (props) => {
  const { norms } = useContext(GlobalContext);

  const data = (() => {
    let dataNames = [];
    let dataVal = [];
    norms.forEach((item) => {
      if (item.name.length > 15) {
        let arr = item.name.split('');
        let short = arr.slice(0, 10).join('');
        dataNames.push(`${short}..`);
      } else dataNames.push(item.name);

      if (item.prog > 100) dataVal.push(100);
      else dataVal.push(item.prog);
    });
    return [dataNames, dataVal];
  })();

  const [state] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        fontFamily: 'Poppins, sans-serif',
        foreColor: 'white',
        toolbar: {
          tools: {
            download: false,
          },
        },
      },
      xaxis: {
        categories: data[0],
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100,
        title: {
          text: 'Percent %',
          style: {
            fontSize: '12px',
            fontWeight: '400',
            fontFamily: 'Poppins, sans-serif',
          },
        },
      },
      grid: {
        show: true,
        borderColor: 'rgba(144, 164, 174, 0.5)',
        strokeDashArray: 0,
        position: 'back',
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      fill: {
        colors: ['#58BFDD'],
      },
      title: {
        text: 'All norms current week.',
        align: 'left',
        margin: 10,
        offsetX: 10,
        offsetY: 20,
        floating: false,

        style: {
          fontSize: '16px',
          fontWeight: '400',
          fontFamily: 'Monda, sans-serif',
        },
      },
    },
    series: [
      {
        name: 'This Week',
        data: data[1],
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
