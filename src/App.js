import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage.js';
import Consult from './Consult.js';
import Update from './Update.js';
import Contact from './Contact.js';

function App() {

  const [currentPage, setCurrentPage] = useState("Homepage");

  if (currentPage === "Homepage") {
    return (<Homepage setPage={setCurrentPage}/>);
  };
  if (currentPage === "Consult") {
    return (<Consult setPage={setCurrentPage}/>);
  };
  if (currentPage === "Update") {
    return (<Update setPage={setCurrentPage}/>);
  };
  if (currentPage === "Contact") {
    return (<Contact setPage={setCurrentPage}/>);
  };

};

export default App;
