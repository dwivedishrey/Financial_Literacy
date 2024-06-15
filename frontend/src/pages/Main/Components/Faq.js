import React from 'react'
import FAQ from './Faq-Accordion'
import './Navbar.css'

const Faq = () => {
  return (
    <div className='faq'>
      <h1 className='faq-head'>FREQUENTLY ASKED QUESTIONS</h1>
      <p className='sub-head'>Find answers to common questions that you may have in your mind.</p>
      <div className='faq_underline'></div>
    <div className='faq-content'>
      <FAQ/>
    </div>
    </div>
  )
}

export default Faq