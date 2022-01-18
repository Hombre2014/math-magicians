import { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const defaultQuote = 'Pure mathematics is, in its way, the poetry of logical ideas. — Albert Einstein';
  const [quote, setQuote] = useState(`${defaultQuote}`);

  useEffect(() => {
    async function fetchQuote() {
      const res = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await res.json();
      const quotes = `${data.quote} — ${data.author}`;
      const quoteTimer = setTimeout(() => setQuote(quotes), 8000);
      return () => {
        clearTimeout(quoteTimer);
      };
    }
    fetchQuote();
  }, [quote]);

  return (
    <div className="quote">
      <h2 style={{ textAlign: 'center' }}>Enjoy our random Math quotes!</h2>
      <p className="quote-line">{ quote }</p>
    </div>
  );
};

export default Quote;
