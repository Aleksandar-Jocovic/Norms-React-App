import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { formatTitle } from './formatTitle';

const Year = ({ norm }) => {
  const name = norm.name.toUpperCase();
  const formatedName = formatTitle(name);
  const date = new Date();
  const year = date.getFullYear();

  // prevent displaying data over 100
  const yearData = norm.year.map((item) => {
    if (item > 100) {
      item = 100;
    }
    return item;
  });

  const [state] = useState({
    options: {
      chart: {
        id: 'basic-bar',
        foreColor: 'white',
        fontFamily: 'Poppins, sans- serif',
        toolbar: {
          tools: {
            download: false,
            selection: false,
            zoom: false,
            pan: false,
            reset: true,
          },
        },
      },
      markers: {
        size: [4, 4],
        colors: ['#5bc0de', '#5cb85c'],
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      colors: ['#5bc0de', '#5cb85c'],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'jan',
          'feb',
          'mar',
          'apr',
          'may',
          'jun',
          'jul',
          'aug',
          'sep',
          'oct',
          'nov',
          'dec',
        ],
        labels: {
          rotate: -45,
          rotateAlways: false,
        },
        lines: {
          show: false,
        },
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
      title: {
        text: `${year} stat for ${formatedName}`,
        align: 'left',
        margin: 10,
        offsetX: 10,
        offsetY: 30,
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
        name: `this month ${formatedName}`,
        data: yearData,
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
            type="line"
            width="100%"
            height="320"
          />
        </div>
      </div>
    </div>
  );
};

export default Year;
