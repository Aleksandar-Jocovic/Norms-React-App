import React, { useState, useContext } from 'react';
import Button from '../button/Button';
import DeleteNorm from '../deleteNorm/DeleteNorm';
import Info from './Info';
import './norm.css';

import { GlobalContext } from '../../context/GlobalState';

const Norm = ({ norm }) => {
  const { norms, } = useContext(GlobalContext);

  const [info, setInfo] = useState(false);
  const [deleteCondition, setDeleteCondition] = useState(false);

  let i = 0;

  const setInfoFun = () => {
    setInfo(!info);
  };

  // UPDATING LOCALSTORAGE
  /*   localStorage.clear(); */
  /*   localStorage.setItem('norms', JSON.stringify(norms)); */

  const styleBtn = {
    transitionStyle: {
      transition: '0.3s',
    },
    position: 'relative',
    top: '-2px',
    transform: 'rotate(180deg)',
    transition: '0.3s',
  };

  const formatTitle = (name) => {
    let nameArr = name.split('');
    if (nameArr.length > 16) {
      let shortName = nameArr.slice(0, 22).join('');
      return `${shortName}..`;
    }
    return name;
  };
  const formatedName = formatTitle(norm.name);
  return (
    <div className="card mt-3">
      <div className="row card-header d-flex justify-content-between align-items-center m-0 p-0">
        <h5 className="col-sm-3  text-capitalize font-weight-bold m-2 ml-4 p-0 norm-title">
          {formatedName}
        </h5>
        <ul
          className="col-sm-8 col-md-7 d-flex justify-content-between m-1 m-md-2 p-0"
          style={{ listStyle: 'none' }}
        >
          <li>Mon</li>
          <li>Tue</li>
          <li>Wen</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>San</li>
        </ul>
      </div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-info"
          style={{ width: `${norm.prog}%` }}
          role="progressbar"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="row card-body d-flex justify-content-between m-0 p-0 pt-2 pb-2">
        <div className="col-sm-8 col-md-7 d-flex justify-content-between m-1 m-lg-2 p-0 order-sm-2 order-md-2 order-lg-2">
          {norm.comp.map(() => (
            <Button key={i} name={norm.name} value={i} comp={norm.comp[i++]} />
          ))}
        </div>
        <div className="col-sm-3 mt-2 m-md-2 m-lg-2 order-sm-1  order-md-1 order-lg-1 d-flex justify-content-end justify-content-md-between">
          <button
            id="delete-button"
            className="btn btn-danger p-0"
            onClick={() => setDeleteCondition(!deleteCondition)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </button>

          <button

            className="btn btn-info p-0 arrow-button"
            onClick={setInfoFun}
          >
            <svg
              style={info ? styleBtn : styleBtn.transitionStyle}
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
      {deleteCondition && (
        <DeleteNorm
          norm={norm}
          setDeleteCondition={setDeleteCondition}
          deleteCondition={deleteCondition}
          info={info}
        />
      )}
      {info && <Info norm={norm} info={info} setInfoFun={setInfoFun} />}
    </div>
  );
};

export default Norm;
