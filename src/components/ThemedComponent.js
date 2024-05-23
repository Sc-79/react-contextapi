// ThemedComponent.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    borderRadius: '5px',
  };

  return <div style={styles}>Current Theme: {theme}</div>;
}

export default ThemedComponent;