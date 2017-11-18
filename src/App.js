import React from 'react';
import TopMenu from './topMenu';

const divStyle = {
  margin: '20px'
}

const App = ({ children }) => {
  return (
    <div>
      <TopMenu />
      <div style={divStyle}>
        {children}
      </div>
    </div>
  );
};

export default App;
