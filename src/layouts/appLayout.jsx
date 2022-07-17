import React from 'react';
import Navbar from './nav/navbar';
import Footer from './footer/footer';

export default function appLayout(props) {
  return (
    <main>
        {/* nav */}
        <Navbar></Navbar>
        {props.children}
        {/* footer */}
        <Footer></Footer>
    </main>
  )
}