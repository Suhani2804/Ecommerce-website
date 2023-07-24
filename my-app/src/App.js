// import logo from './logo.svg';
import './App.css';
import BodyComponent from './components/Body';
import HeaderComponent from "./components/Header";
import FooterComponent from './components/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </>
  );
}

export default App;
