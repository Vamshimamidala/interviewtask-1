 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './Componments/Header';
import Footer from './Componments/Footer/Footer';

import Routing from './Routing';
import { createContext, useState } from 'react';
 export let store= createContext();
function App() {
  const [token,setToken]=useState("")
  return (
    
      <store.Provider value={[token,setToken]}>
     <Header/>
     <Routing/>
     <Footer/>
     </store.Provider>
     
  );
}

export default App;
