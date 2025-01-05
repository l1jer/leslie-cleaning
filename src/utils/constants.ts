export const SERVICES = [
    {
      id: 'house-cleaning',
      title: 'House Cleaning',
      description: 
        'Comprehensive house cleaning services tailored to your specific needs. We ensure every corner of your home sparkles with cleanliness. This includes:',
      services: [
        {
          id: 'window-cleaning',
          title: 'Window Cleaning',
          description: 'Expert window cleaning services for both residential and commercial properties. Crystal clear results guaranteed.'
        },
        {
          id: 'kitchen-cleaning',
          title: 'Kitchen Cleaning',
          description: 'Specialised kitchen cleaning service ensuring hygiene and cleanliness in both residential and commercial kitchens.'
        },
        {
          id: 'carpet-cleaning',
          title: 'Carpet Cleaning',
          description: 'Deep and thorough carpet cleaning to remove stains, dirt, and allergens. Revive the look and feel of your carpets.'
        },
        {
          id: 'bathroom-cleaning',
          title: 'Bathroom Cleaning',
          description: 'Comprehensive bathroom sanitization and deep cleaning to eliminate germs and maintain a hygienic environment.'
        }
      ]
    },
    {
      id: 'office-cleaning',
      title: 'Office Cleaning',
      description: 'Professional office cleaning solutions to maintain a pristine work environment. Regular or one-off services available.',
      services: [
        {
          id: 'daily-office-cleaning',
          title: 'Daily Office Cleaning',
          description: 'Routine cleaning tasks to keep your office space consistently clean and tidy.'
        },
        {
          id: 'sanitization-services',
          title: 'Sanitization Services',
          description: 'Intensive cleaning to sanitize surfaces, especially high-touch areas to reduce the spread of germs.'
        },
        {
          id: 'conference-room-cleaning',
          title: 'Conference Room Cleaning',
          description: 'Special attention to conference areas to ensure they are spotless and presentable for meetings.'
        },
        {
          id: 'office-carpet-cleaning',
          title: 'Office Carpet Cleaning',
          description: 'Deep cleaning of carpets to remove stains, dirt, and allergens.'
        },
        {
          id: 'window-cleaning',
          title: 'Window Cleaning',
          description: 'Cleaning of interior and exterior windows to enhance natural light.'
        }
      ]
    },
    {
      id: 'end-of-lease',
      title: 'End of Lease Cleaning',
      description: 'Thorough end of lease cleaning service to ensure you get your bond back. We follow real estate agent-approved checklists.',
      services: [
        {
          id: 'full-house-cleaning',
          title: 'Full House Cleaning',
          description: 'Complete cleaning of the house, covering all rooms, cabinets, and wardrobes.'
        },
        {
          id: 'appliance-cleaning',
          title: 'Appliance Cleaning',
          description: 'Detailed cleaning of appliances to restore them to their best condition.'
        },
        {
          id: 'bathroom-sanitization',
          title: 'Bathroom Sanitization',
          description: 'Extensive cleaning and sanitization of bathrooms to leave them sparkling and germ-free.'
        },
        {
          id: 'carpet-steam-cleaning',
          title: 'Carpet Steam Cleaning',
          description: 'Steam cleaning of carpets to remove deep-seated dirt and stains.'
        },
        {
          id: 'wall-washing',
          title: 'Wall Washing',
          description: 'Washing of walls to remove dust, cobwebs, and marks.'
        }
      ]
    },
    {
      id: 'commercial-cleaning',
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for businesses, shops, and commercial spaces to maintain a professional and clean environment.',
      services: [
        {
          id: 'retail-cleaning',
          title: 'Retail Cleaning',
          description: 'Specialized cleaning services for retail stores, ensuring a welcoming environment for customers.'
        },
        {
          id: 'industrial-cleaning',
          title: 'Industrial Cleaning',
          description: 'Heavy-duty cleaning services tailored for manufacturing and industrial facilities.'
        },
        {
          id: 'healthcare-facility-cleaning',
          title: 'Healthcare Facility Cleaning',
          description: 'Strict cleaning protocols to maintain hygiene in medical and healthcare settings.'
        },
        {
          id: 'educational-institution-cleaning',
          title: 'Educational Institution Cleaning',
          description: 'Cleaning services for schools and educational institutions, focusing on safety and thoroughness.'
        },
        {
          id: 'gym-and-fitness-center-cleaning',
          title: 'Gym and Fitness Center Cleaning',
          description: 'Enhanced cleaning procedures for fitness centers to ensure a healthy workout environment.'
        }
      ]
    }
  ]


export const NAV_ITEMS = [
  {
    name: 'Services',
    href: '#services',
    dropdown: SERVICES.map(service => ({
      name: service.title,
      href: `#${service.id}`
    }))
  },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' }
]
