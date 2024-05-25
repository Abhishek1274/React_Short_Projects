import { useState } from 'react';

import ContactHeader from './Components/contactHeader/contact.jsx'
import Navbar from './Components/navbar/navbar.jsx'
import ContactForm from './Components/contactForm/contactForm.jsx'

function App() {
  

  return (
    <>
      <Navbar/>
      <main className="main_container">
        <ContactHeader />
        <ContactForm/>
      </main>
    </>
  )
}

export default App
