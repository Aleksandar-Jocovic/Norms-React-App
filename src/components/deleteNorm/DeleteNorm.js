import React, { useContext } from 'react';
import './deleteNorm.css';

import { GlobalContext } from '../../context/GlobalState';


const DeleteNorm = ({ norm, setDeleteCondition, deleteCondition, info, }) => {

  const { norms, deleteNorm, currentUserId } = useContext(GlobalContext);

  const deleteNormFinal = () => {
    deleteNorm([currentUserId, norm.id])
    if (norms.length === 1) {
      //clearing ls if there is no norms left
      // but with users is difernt
      /* localStorage.clear(); */
    }
  }
  const style = {
    position: 'absolute',
    top: '19%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px 20px 10px 20px',
    backgroundColor: '#717880',
    borderRadius: '15px',
    zIndex: '2',
  };
  return (
    <div className="m-auto" style={info ? style : null}>
      <div>
        <p>Are you sure you want to delete this norm?</p>
      </div>

      <div className="d-flex justify-content-around mb-3">
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={deleteNormFinal}>
          Delete
        </button>
        <button
          type="button"
          className="btn btn-info m-2"
          onClick={() => {
            setDeleteCondition(!deleteCondition);

          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteNorm;
