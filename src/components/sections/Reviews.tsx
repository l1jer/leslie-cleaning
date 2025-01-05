import React, { useState, useEffect, useCallback } from 'react'

const REVIEWS = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Leslie Cleaning has been cleaning my home for over a year now. Their attention to detail and reliability is absolutely top-notch.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Office Manager',
    content: 'We use Leslie Cleaning for our office space and they never disappoint. Professional, efficient, and thorough service every single time.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'Property Manager',
    content: 'Their end of lease cleaning service is exceptional. Always gets our tenants their full bond back without any hassle.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Restaurant Owner',
    content: 'Brilliant commercial kitchen cleaning. They understand the high standards required in the hospitality industry.',
    rating: 5,
  },
  {
    name: 'Rachel Green',
    role: 'Small Business Owner',
    content: 'Consistently impressed with their professional and detailed cleaning approach. Highly recommend Leslie Cleaning!',
    rating: 5,
  }
]

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleReviews, setVisibleReviews] = useState(1)

  // Adjust visible Reviews based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1080) {
        setVisibleReviews(3)
      } else if (window.innerWidth >= 768) {
        setVisibleReviews(2)
      } else {
        setVisibleReviews(1)
      }
    }

    // Initial setup
    handleResize()

    // Add listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= REVIEWS.length - visibleReviews
            ? 0
            : prevIndex + 1
        )
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, visibleReviews])

  // Handle manual navigation
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }, [])

  // Touch event handling
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return

    const currentTouch = e.touches[0].clientX
    const diff = touchStart - currentTouch

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Slide left
        setCurrentIndex(prev =>
          prev >= REVIEWS.length - visibleReviews
            ? 0
            : prev + 1
        )
      } else {
        // Slide right
        setCurrentIndex(prev =>
          prev === 0
            ? REVIEWS.length - visibleReviews
            : prev - 1
        )
      }
      setTouchStart(null)
      setIsAutoPlaying(false)
    }
  }

  return (
    <section className="bg-white">
      <div className="container section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say
            about our cleaning services.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)` }}
            >
              {REVIEWS.map((review, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                    {/* Rating Stars */}
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Content */}
                    <p className="text-gray-600 mb-6 text-lg italic">
                      "{review.content}"
                    </p>

                    {/* Client Details */}
                    <div className="mt-auto">
                      <p className="font-semibold text-lg">{review.name}</p>
                      <p className="text-gray-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-primary hover:text-primary/80 transition-colours hidden md:block"
            onClick={() => {
              setCurrentIndex(prev =>
                prev === 0
                  ? REVIEWS.length - visibleReviews
                  : prev - 1
              )
              setIsAutoPlaying(false)
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-primary hover:text-primary/80 transition-colours hidden md:block"
            onClick={() => {
              setCurrentIndex(prev =>
                prev >= REVIEWS.length - visibleReviews
                  ? 0
                  : prev + 1
              )
              setIsAutoPlaying(false)
            }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(REVIEWS.length / visibleReviews) }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colours ${currentIndex === index * visibleReviews ? 'bg-primary' : 'bg-gray-300'
                  }`}
                onClick={() => goToSlide(index * visibleReviews)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
