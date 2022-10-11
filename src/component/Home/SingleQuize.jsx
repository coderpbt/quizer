import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleQuize = ({item}) => {
  const {name,logo,total,id} = item;
  const getQuizeId = useNavigate();

  const handlerAddToCart = (id) => {
    getQuizeId(`${id}`)
  }

  return (
    <div className="card card-compact shadow-xl">
    <figure><img src={logo} alt="logos" /></figure>
    <div className="card-body">
      <h2 className="card-title text-left text-white">{name}</h2>
      <h2 className="card-title text-white">Total Quize : {total} </h2>
      <div className="card-actions justify-end">
        <button onClick={() => handlerAddToCart(id)} className="btn btn-primary">
          Quize Start
          <span><i class="fa-solid fa-arrow-right"></i></span>
        </button>
      </div>
    </div>
  </div>
  );
};

export default SingleQuize;