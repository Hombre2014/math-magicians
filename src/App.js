import react from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/Calculator';

class App extends react.Component {
  render() {
    return (
      <Router>
        <main className="container">
          <header>
            <h1><a href="/">Math Magicians</a></h1>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/Calculator">Calculator</Link>
              <Link to="/Quote">Quote</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
      </Router>
    );
  }
}

export default App;
