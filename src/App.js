import React from 'react';
import './App.css';

//import { faker } from '@faker-js/faker';
import Navbar from './Navbar';
import Header from './Header';
import Articles  from './Articles';
import Tutorials from './Tutorials';
import Subscription from './Subscription';
import Footer from './Footer';
function App() {
  //const randomName = faker.name.fullName();
  return (
    <div>
    <Navbar />
    <Header />
    <Articles />
    <Tutorials />
    <Subscription />
    <Footer />
    </div>
  );
}

export default App;
