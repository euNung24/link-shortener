import React, { memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ClipBoard from './ClipBoard';

const UrlInput = props => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const inputRef = useRef();

  function handleChange(e) {
    setInput(({input}) => e.target.value);
  }

  function handleSubmit(e, input) {
    e.preventDefault();
    fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer 0aefbb5c90943cd5e9f95bcef43c45a2a3c530a6',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "long_url": input, "domain": "bit.ly"})
    })
    .then(response => response.json())
    .then(data => {
      setResult(({result}) => data.link);
      inputRef.current.value = '';
      inputRef.current.focus();
    })
    .catch(e => setResult(({result}) => e));
  }

  return (
    <div className="cont-url">
      <form>
        <label htmlFor="url-name">Input URL</label>
        <input type="url" id="url-name" ref={inputRef} placeholder="Input URL" onChange={e=>handleChange(e)}/>
        <button type="button" onClick={(e) => handleSubmit(e, input)}>Shorten</button>
      </form>
      <span className="arrow">▼</span>
      <ClipBoard url={result} />
    </div>
  );
};

UrlInput.propTypes = {
  
};

export default memo(UrlInput);