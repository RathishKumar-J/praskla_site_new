import React from 'react'
import ReactDOM from 'react-dom/client'
import TestimonialSlider from './components/ui/testimonial-slider'
import './tailwind.css'

import ContactDemo from './components/ContactDemo'

const testimonialsRoot = document.getElementById('testimonials-root')
if (testimonialsRoot) {
  ReactDOM.createRoot(testimonialsRoot).render(
    <React.StrictMode>
      <TestimonialSlider />
    </React.StrictMode>
  )
}

const contactRoot = document.getElementById('contact-root')
if (contactRoot) {
  ReactDOM.createRoot(contactRoot).render(
    <React.StrictMode>
      <ContactDemo />
    </React.StrictMode>
  )
}
