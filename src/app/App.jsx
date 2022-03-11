import React, { useState } from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/Loading/Loading';

function App() {
  const [name, setName] = useState('Joe');
  const [isLoading] = useState(true);

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>This is the header</header>
        <main>
          <Loading
            type="trail"
            style={{ visibility: isLoading ? 'visible' : 'none' }}
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Hello {name}</p>
        </main>
      </div>
    </Router>
  );
}

export default App;
