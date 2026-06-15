'use client'
import { useState } from 'react'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    name: 'Jorge Sanchez',
    quote: '"I did my conversion process to U.S certificates through GPA. It was a great experience flying with them and working with their instructor\'s staff, who are well prepared and professional pilots. As well GPA has the best prices compared to the rest of flight schools around Tampa. No doubt It was the best decision choosing GPA."',
  },
  {
    name: 'Nathan Murphy',
    quote: '"Instructors understand their craft, and—this is critical—are quick to consult their colleagues or the senior instructors when a student is struggling. Everyone works hard to help students achieve their goals. Come ready to work hard and you\'ll get an outstanding aviation education."',
  },
  {
    name: 'Sejal Gupta',
    quote: '"GPA is made up of the finest CFIs, staff, and maintenance who will take it upon themselves to make sure your training goes as smoothly as possible, making you a really special part of the GPA family."',
  },
]

const LeftArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11.828 12.0001L14.657 14.8281L13.243 16.2431L9 12.0001L13.243 7.75708L14.657 9.17208L11.828 12.0001Z" fill="currentColor"/>
  </svg>
)
const RightArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12.1718 12.0001L9.34277 9.17208L10.7568 7.75708L14.9998 12.0001L10.7568 16.2431L9.34277 14.8281L12.1718 12.0001Z" fill="currentColor"/>
  </svg>
)

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState<'left' | 'right'>('right')

  function prev() {
    setDir('left')
    setIndex(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }
  function next() {
    setDir('right')
    setIndex(i => (i + 1) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[index]

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div className="heading-container">
          <h3 className="heading-3m">Testimonials</h3>
        </div>

        {/* Single card with transition */}
        <div style={{position:'relative', overflow:'hidden'}}>
          <div
            key={index}
            className="testimonial-card"
            style={{
              animation: `slideIn${dir === 'right' ? 'Right' : 'Left'} 0.3s ease`,
            }}
          >
            <p className="testimonials-text" style={{fontSize:'1.05em',lineHeight:1.9}}>
              <span className="f-text-weight-medium">{t.quote}</span>
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <Image
                  src="/images/Testimonial-Avatar-03_1Testimonial Avatar 03.png"
                  alt={t.name}
                  width={48}
                  height={48}
                  className="avatar-image"
                />
              </div>
              <div>
                <p className="name-regular weight-medium"><strong>{t.name}</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls + dots */}
        <div className="slider-controls">
          <button onClick={prev} className="f-testimonial-l-arrow" aria-label="Previous">
            <div className="f-icon-regular"><LeftArrow /></div>
          </button>
          <button onClick={next} className="f-testimonial-r-arrow" aria-label="Next">
            <div className="f-icon-regular"><RightArrow /></div>
          </button>
          <div style={{display:'flex', gap:'0.5rem', marginLeft:'0.5rem', alignItems:'center'}}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > index ? 'right' : 'left'); setIndex(i) }}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === index ? '1.5rem' : '0.5rem',
                  height: '0.5rem',
                  borderRadius: '1rem',
                  background: i === index ? '#000040' : '#d0d5dd',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
