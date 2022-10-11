import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleQuize = ({item}) => {
  const {name,logo,total,id} = item;
  const getQuizeId = useNavigate();

  const handlerAddToCart = (id) => {
    getQuizeId(`${id}`)
  }

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src={logo} alt="logos" /></figure>
    <div className="card-body">
      <h2 className="card-title text-left">{name}</h2>
      <h2 className="card-title">{total} </h2>
      <i className="fa-regular fa-eye"></i>
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