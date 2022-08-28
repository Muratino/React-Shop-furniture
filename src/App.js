import React from 'react';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Content } from './components/Content/Content';
import { Categories } from './components/Categories/Categories';


export const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Categories />
      <Content />
      <Footer />
    </div>
  );
}
