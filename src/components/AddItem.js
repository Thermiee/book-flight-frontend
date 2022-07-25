import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { post } from '../redux/flights/flights';

const AddItem = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(post({
      name, image, flight_Number: flightNumber, price,
    }));
    setName('');
    setImage('');
    setFlightNumber('');
    setPrice('');
  };

  return (
    <div>
      <h1>Add New Item</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="image">
          Image:
          <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label htmlFor="flightNumber">
          Flight Number:
          <input type="text" name="flightNumber" value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} />
        </label>
        <label htmlFor="price">
          Price:
          <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddItem;
