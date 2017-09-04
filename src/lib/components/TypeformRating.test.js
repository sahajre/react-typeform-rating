import React from 'react';
import ReactDOM from 'react-dom';
import TypeformRating from './TypeformRating';

it('Example renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypeformRating name="test" starCount={5} />, div);
});
