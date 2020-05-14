import React from 'react';
import Header from './components/header/Header';
import Norms from './components//norms/Norms';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <>
        <Header />
        <Norms />
      </>
    </GlobalProvider>
  );
};

export default App;

/*
 check what day
 if san
 send data to gs

*/
