import React from 'react';
import Header from './Components/Header';
import Form from './Components/CityForm';
import List from './Components/RestaurantList';
import Footer from './Components/Footer';
import './Style/style.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Form />
        <List />
      </main>

      <Footer />
    </div>
  );
}

export default App;
