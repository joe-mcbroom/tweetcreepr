import React, { useState } from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/Loading/Loading';

function App() {
  const [name, setName] = useState('Joe');
  const [isLoading] = useState(true);
  const [loaderType, setLoaderType] = useState('squares');

  const setLoader = ({ target: { value } }) => setLoaderType(value);

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>This is the header</header>
        <main>
          <Loading
            type={loaderType}
            style={{ visibility: isLoading ? 'visible' : 'none' }}
          />
          <div className="loader-chooser" onChange={setLoader}>
            <h3>Choose Loader Type</h3>

            <input
              type="radio"
              name="loader"
              value="squares"
              defaultChecked="true"
            />
            <label htmlFor="squares">Squares</label>
            <input type="radio" name="loader" value="trail" />
            <label htmlFor="trail">Trail</label>
            <input type="radio" name="loader" value="car" />
            <label htmlFor="car">Car</label>
          </div>
          <div className="name-input">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Hello {name}</p>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
