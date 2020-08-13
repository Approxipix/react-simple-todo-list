import React from 'react';
import Header from './Header.jsx';

const App = ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
);

export default App
