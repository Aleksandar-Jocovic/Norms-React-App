import React, { useState, useContext } from 'react';

import Radial from '../../apex/radial/Radial';
import PopChart from '../../apex/Chart';
import Charts from '../../apex/Chartss';
import Year from '../../apex/Year';

import { GlobalContext } from '../../context/GlobalState';

const Info = ({ norm, info, setInfoFun }) => {
  const { norms, changeRepeatAction } = useContext(GlobalContext);

  const [selectYear, setSelectYear] = useState(false);
  const [edit, setEdit] = useState(false);

  const editFun = () => {
    setEdit(!edit);
  };

  const changeRepeat = (e) => {
    const name = +e.target.name;
    const value = +e.target.value;

    norms.map((item) => {
      if (item.id === name) {
        item.repeat = +value;

        let num = Math.floor(100 / item.repeat);
        let numToMulty = item.comp.filter((el) => el === true);

        item.prog = num * numToMulty.length;
        changeRepeatAction(item);
      }
      return item;
    });
  };

  const styleBtn = {
    transitionStyle: {
      transition: '0.3s',
    },
    position: 'relative',
    top: '-2px',
    transform: 'rotate(180deg)',
    transition: '0.3s',
  };

  return (
    <div id="infoClass">
      <div className="d-flex flex-column align-items-center">
        <h5 className="text-center">
          Repeat: <span className="text-info">{norm.repeat}</span>{' '}
          {norm.repeat > 1 ? 'days' : 'day'}/week
        </h5>
        <button
          className="btn btn-info btn-sm mb-2"
          style={{ width: '80px' }}
          onClick={editFun}
        >
          {!edit ? 'Edit' : 'Confirm'}
        </button>

        {edit && (
          <div className="d-flex" onClick={changeRepeat}>
            <button className="btn btn-info m-1" name={norm.id} value="1">
              1
            </button>
            <button className="btn btn-info m-1" name={norm.id} value="2">
              2
            </button>
            <button className="btn btn-info m-1" name={norm.id} value="3">
              3
            </button>
            <button className="btn btn-info m-1" name={norm.id} value="4">
              4
            </button>
            <button className="btn btn-info m-1" name={norm.id} value="5">
              5
            </button>
            <button className="btn btn-info m-1" name={norm.id} value="6">
              6
            </button>
            <button className="btn btn-info m-1" name={norm.id} value="7">
              7
            </button>
          </div>
        )}
        <Radial progress={norm.prog} />
      </div>

      <div className="row">
        <div className="col-md-6">
          <button
            className="btn btn-sm btn-info month-year"
            onClick={() => setSelectYear(!selectYear)}
          >
            {!selectYear ? 'Show year' : 'Show month'}
          </button>

          {!selectYear ? (
            <PopChart
              name={norm.name}
              currentMonth={norm.currentMonth}
              lastMonth={norm.lastMonth}
            />
          ) : (
              <Year norm={norm} />
            )}
        </div>
        <div className="col-md-6">
          <Charts />
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <button
            className="btn btn-info p-0 arrow-info-button m-3"
            onClick={setInfoFun}
          >
            <svg
              style={info ? styleBtn : styleBtn.transitionStyle}
              fill="#5bc0de"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
