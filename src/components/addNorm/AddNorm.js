import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './addNorm.css';

const AddNorm = () => {
  const [newName, setnewName] = useState('');
  const [daysToRepeat, setDaysToRepeat] = useState(1);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("**name can't be blank");

  const { addNormAction, norms, users, currentUserId, globalSTATE } = useContext(GlobalContext);

  const id = norms.length + 1;

  const onSubmit = (e) => {
    e.preventDefault();

    let takenNames = norms.map((item) => item.name);
    let isTaken = takenNames.includes(newName);

    const newNorm = {
      name: newName,
      id: id,
      prog: 0,
      comp: [false, false, false, false, false, false, false],
      currentMonth: [],
      lastMonth: [],
      year: [],
      repeat: daysToRepeat,
      isDataSent: false,
      isMonthDataSent: false,
    };

    if (newName !== '' && !isTaken) {
      let userWithNewNorm = users.map(user => {
        if (user.userId === currentUserId) {
          user.norms.push(newNorm)
          return user;
        } else return user;
      })
      console.log("userWith", userWithNewNorm)
      console.log(currentUserId)
      console.log("usersGS", users)
      console.log("GLOBA", globalSTATE)


      addNormAction(userWithNewNorm);
      console.log("usersGS after action", users)
      console.log("GLOBA after actio", globalSTATE)


      if (error === true) setError(false);
    } else {
      setError(true);

      if (isTaken) {
        setErrorMessage(`**${newName} already exist. Try another.`);
      } else if (newName === '') {
        setErrorMessage("**name can't be blank");
      }
    }
    setnewName('');
  };

  const handleDaysToRepeat = (e) => {
    e.preventDefault();
    setDaysToRepeat(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center w-100">
      <div className="addNorm">
        <form
          className="form-inline my-3 my-lg-0 d-flex flex-column "
          onSubmit={onSubmit}
        >
          {error ? (
            <small className="text-danger p-0 m-0">{errorMessage}</small>
          ) : null}

          <input
            id="input"
            autoComplete="off"
            className="form-control mb-4"
            type="text"
            placeholder="Add norm name (e.g. run, study..)"
            value={newName}
            onChange={(e) => setnewName(e.target.value)}
          />
          <label id="label">Norm name</label>
          <h5 className="text-center mt-2">
            Please select how meny times a week you want to repeat.
          </h5>
          <h5 className="m-2">
            Selected: <span className="text-info">{daysToRepeat}</span>
            {daysToRepeat > 1 ? ' days' : ' day'}
          </h5>

          <div className="d-flex " onClick={handleDaysToRepeat}>
            <button className="btn btn-info m-1 m-md-2" value="1">
              1
            </button>
            <button className="btn btn-info m-1 m-md-2" value="2">
              2
            </button>
            <button className="btn btn-info m-1 m-md-2" value="3">
              3
            </button>
            <button className="btn btn-info m-1 m-md-2" value="4">
              4
            </button>
            <button className="btn btn-info m-1 m-md-2" value="5">
              5
            </button>
            <button className="btn btn-info m-1 m-md-2" value="6">
              6
            </button>
            <button className="btn btn-info m-1 m-md-2" value="7">
              7
            </button>
          </div>

          <button className="btn btn-info m-2">Add Norm</button>
        </form>
      </div>
    </div>
  );
};

export default AddNorm;
