import React from 'react'

const FEATURES = [
  {
    title: 'Experienced Team',
    description: 'Our professional cleaners have years of experience in the industry.',
  },
  {
    title: 'Quality Guaranteed',
    description: 'We stand behind our work with a 100% satisfaction guarantee.',
  },
  {
    title: 'Eco-Friendly',
    description: 'Using environmentally friendly cleaning products for your safety.',
  },
  {
    title: 'Fully Insured',
    description: 'Peace of mind with full insurance coverage for all our services.',
  },
]

const About: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Leslie Cleaning?
            </h2>
            <p className="text-gray-600 mb-8">
              With over 10 years of experience in the cleaning industry, we've built 
              our reputation on reliability, thoroughness, and exceptional customer service. 
              Our team of professional cleaners is committed to maintaining the highest 
              standards of cleanliness for your space.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100">
              <div className="p-8 text-center text-gray-400">
                [Place company image here]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
