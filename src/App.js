import React from 'react';
import DatasTable from './DatasTable';
import Stats from './Stats';
import Heading from './Heading';
import Footer from './Footer';
import Graphs from './Graphs';
import NewsContainer from './NewsContainer';
// import covid from './covid.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Stats/>
      <DatasTable/>
      <Graphs/>
      <NewsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
