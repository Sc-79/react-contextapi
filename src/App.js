// App.js
import React, { useState } from 'react';
import ThemeContext from './components/ThemeContext';
import ThemedComponent from './components/ThemedComponent';


function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemedComponent />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;