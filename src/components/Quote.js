import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setQuote(`${data.quote} - "${data.author}`));
  }, []);

  return (
    <div className="quote">
      <p>{ quote }</p>
    </div>
  );
};

export default Quote;
