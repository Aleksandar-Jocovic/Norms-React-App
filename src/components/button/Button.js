import React, { useContext, memo } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './button.css';

const Button = ({ comp, name, value }) => {
  const { checkDay } = useContext(GlobalContext);
  const { norms, users, currentUserId } = useContext(GlobalContext);

  const handleClick = (e) => {
    const btnName = e.target.name;
    const btnValue = e.target.value;

    let usersUpdated = []
    console.log(users)
    users.forEach(user => {

      if (user.userId === currentUserId) {
        let normsUpdated = user.norms.map(item => {
          if (item.name === btnName) {
            item.comp[btnValue] = !item.comp[btnValue];
            //condition for progress
            if (item.comp[btnValue]) {
              // + increase progress
              let numToAdd = Math.floor(100 / item.repeat);
              let newNum = item.prog + numToAdd;
              if (newNum > 85 && newNum < 100) {
                newNum = 100;
              }
              item.prog = newNum;
            } else {
              // - decrease proggres
              let numToSubstract = Math.floor(100 / item.repeat);
              let num = item.prog - numToSubstract;
              if (num <= 0) num = 0;
              item.prog = num;
            }
          }
          return item;
        });
        user.norms = normsUpdated;
        usersUpdated.push(user);
      } else usersUpdated.push(user);
    })
    checkDay(usersUpdated)
  };


  return (
    <button id="button" name={name} value={value} onClick={handleClick}>
      <svg
        fill={comp ? 'rgb(64, 196, 240)' : 'grey'}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z" />
      </svg>
    </button>
  );
};

export default memo(Button);
