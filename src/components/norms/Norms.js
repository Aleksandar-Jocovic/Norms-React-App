import React, { useContext, useState, /* useEffect */ } from 'react';
import AddNorm from '../addNorm/AddNorm';
import Normm from '../norm/Normm';

import { search } from './Search';
import { GlobalContext } from '../../context/GlobalState';
import './norms.css';

import { endMonthTest, endWeekTest } from './SendData';

const Norms = () => {
  const { norms, endWeekAction, endMonthAction, users, currentUserId } = useContext(GlobalContext);

  //comented for test purpose
  //current day
  /*   const day = (() => {
      const date = new Date();
      const current = date.getDay();
      return current;
    })(); */


  //check if it is last day of the month
  /*   const date = new Date();
    const isLast = date.getDate() ===
      new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); */



  //condition to display add new norm 
  const [add, setAdd] = useState(false);
  //user search 
  const [searchText, setSearchText] = useState('');

  //index of last norm in the state
  //let index = norms.length - 1;

  // Comented for test puropse
  // useEffect(() => {
  //   endWeek(
  //     day,
  //     norms[index].isDataSent,
  //     norms,
  //     endWeekAction,
  //     norms[index].isMonthDataSent
  //   );

  //   endMonth(
  //     isLast,
  //     norms[index].isMonthDataSent,
  //     norms,
  //     endMonthAction,
  //     isLast
  //   );

  // }, []);

  const goweek = () => {
    endWeekTest(
      users,
      currentUserId,
      endWeekAction,
    );
  }
  const gomonth = () => {
    endMonthTest(
      users,
      currentUserId,
      endMonthAction,
    );
  }


  //arr of matched search result
  let machedNorms = search(norms, searchText);

  //clear search input
  const clearSearch = (e) => {
    if (e.target.name !== 'input-search' || e.target.name === 'undefined') {
      setSearchText('');
    }
    return;
  };

  const handleClick = () => {
    setAdd(!add);
  };

  const style = {
    filter: 'blur(4px)',
  };

  const styleBtn = {
    transitionStyle: {
      transition: '0.3s',
    },
    transform: 'rotate(45deg)',
    transition: '0.3s',
  };

  return (
    <div onClick={(el) => clearSearch(el)} id="norms">
      <div
        style={add ? style : null}
        className="d-flex flex-column align-items-center"
      >
        {machedNorms.map((norm) => (
          <Normm key={norm.id} norm={norm} />
        ))}

        {searchText === '' && norms.map((norm) => <Normm key={norm.id} norm={norm} />)}

      </div>
      <button className="btn btn-secondary  addBtn" onClick={handleClick}>
        <svg
          style={add ? styleBtn : styleBtn.transitionStyle}
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
        </svg>
      </button>
      <div id="search-box">
        <input
          id="search"
          autoComplete="off"
          className="form-control"
          type="text"
          placeholder="Search.."
          value={searchText}
          name="input-search"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#fff"
          viewBox="0 0 512 512"
        >
          <title>ionicons-v5-f</title>
          <path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z" />
        </svg>
      </div>

      {add && <AddNorm />}
      <div className="d-flex flex-column align-items-center">
        <p>buttons for test puropse</p>
        <button className="btn btn-info" onClick={goweek}>end week</button>
        <button className="btn btn-info my-1" onClick={gomonth}>end month</button>
      </div>


    </div>
  );
};

export default Norms;

/*
not full week find how to continue from that day
if user dont open app on monday data won't be sent
if norm.len = 0 error on endWeek
if first day usr uses app and it is last day of the mont error in reduce endmonth
*/

