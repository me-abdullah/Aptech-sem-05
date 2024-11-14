import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <>
      <div className='container mt-5'>
        <div className='text-center'>
          <h2 className='mb-4'>Increment/Decrement Counter</h2>
          <h3 className='mb-4'>React Redux</h3>

          <div className='d-flex justify-content-center align-items-center'>
            <button 
              type='button' 
              className='btn btn-danger mx-2' 
              title='Decrement' 
              onClick={() => dispatch(decNumber())}
            >
              -
            </button>
            <input 
              name='quantity' 
              type='text' 
              className='form-control text-center' 
              value={counter} 
              readOnly 
              style={{ width: '60px' }}
            />
            <button 
              type='button' 
              className='btn btn-success mx-2' 
              title='Increment' 
              onClick={() => dispatch(incNumber())}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
