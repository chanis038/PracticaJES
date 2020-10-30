import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigate from './components/navigate';
import Fiscalialist from './components/fiscaliasList'
import Createfiscalis from './components/createFiscalias'

function App() {
  return (
    <Router>
      <Navigate/>
      <Route  path='/' exact component= {Fiscalialist}/>
      <Route  path='/crear' exact component= {Createfiscalis}/>
      <Route  path='/editar/:id' exact component= {Createfiscalis}/>
     
   
    </Router>
  );
}

export default App;
