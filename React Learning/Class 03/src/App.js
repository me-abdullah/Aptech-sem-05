
import './App.css';

import React from 'react';
import Card from './Card';

function App(props) {


  return (
    <div>
      <Card im="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" heading="HP LAPTOP"/>
      <Card im="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" heading="DELL LAPTOP"/>
      <Card im="https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" heading="MAC LAPTOP"/>
    </div>
  );
}

export default App;
