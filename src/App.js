import React from 'react';
import Header from './Components/Header';
import Form from './Components/CityForm';
import List from './Components/RestaurantList';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Form />

      <List />

      <Footer />
    </div>
  );
}

export default App;
