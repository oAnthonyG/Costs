import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layouts/Container';



function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </ul>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
