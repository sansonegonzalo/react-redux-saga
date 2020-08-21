import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { starGetCharacters } from './redux/actions/characters';

function App() {
  const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(starGetCharacters());
      setCharacters([{}, {}]);
    }
  });

  return <div>Hello GoT</div>;
}

export default App;
