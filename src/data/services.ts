export interface Service {
  slug: string
  name: string
  navLabel: string
  summary: string
  image: string
  imageAlt: string
  heroTagline: string
  intro: string[]
  covers: string[]
  suitableFor: string[]
  requirements: string[]
  related: string[]
  seoDescription: string
}

export const services: Service[] = [
  {
    slug: 'domestic-cleaning',
    name: 'Domestic Cleaning',
    navLabel: 'Domestic Cleaning',
    summary: 'Regular or one-off cleaning to keep family homes fresh, tidy and comfortable.',
    image: '/images/domestic.jpg',
    imageAlt: 'Bright, well-kept living room with natural light',
    heroTagline: 'Comfortable, well-kept homes without the weekend chores.',
    intro: [
      'Domestic cleaning from Final Sweep is designed around the way you live. Whether you would like a one-off clean to reset your home or a regular visit to keep on top of things, we agree a plan that fits your household.',
      'Our focus is on tidy, hygienic and presentable rooms, so you can spend your time on what matters to you.',
    ],
    covers: [
      'Dusting and wiping of surfaces, shelves and furniture',
      'Kitchen cleaning, including worktops and appliance exteriors',
      'Bathroom and toilet cleaning',
      'Vacuuming and mopping of floors',
      'Bedrooms, living areas and hallways',
    ],
    suitableFor: ['Busy households and families', 'Professionals with limited time', 'Homeowners wanting a regular routine', 'Anyone needing a one-off home refresh'],
    requirements: ['A brief description of your home and number of rooms', 'Preferred frequency: one-off, weekly, fortnightly or monthly', 'Any areas needing particular attention', 'Access arrangements for your property'],
    related: ['deep-cleaning', 'laundry-ironing', 'window-cleaning'],
    seoDescription: 'Domestic cleaning for households from Final Sweep Co. Ltd. Flexible one-off and regular home cleaning arranged around your needs.',
  },
  {
    slug: 'commercial-office-cleaning',
    name: 'Commercial and Office Cleaning',
    navLabel: 'Commercial & Office Cleaning',
    summary: 'Scheduled and ongoing cleaning that keeps workplaces and retail premises presentable.',
    image: '/images/commercial.jpg',
    imageAlt: 'Modern open office corridor with clean floors and glass partitions',
    heroTagline: 'Clean, professional workplaces that make the right impression.',
    intro: [
      'A clean workplace supports staff and reassures customers. Final Sweep provides commercial and office cleaning on a scheduled or ongoing basis, shaped around how your premises operate.',
      'We discuss your site, your routine and your priorities, then agree an arrangement that suits your business.',
    ],
    covers: [
      'Desks, workstations and shared surfaces',
      'Reception, meeting rooms and communal areas',
      'Kitchenettes and staff break areas',
      'Washrooms and toilet facilities',
      'Floor cleaning and general tidying',
    ],
    suitableFor: ['Offices and co-working spaces', 'Retail premises', 'Commercial businesses', 'Property managers responsible for shared areas'],
    requirements: ['Size and layout of the premises', 'Preferred days and times for cleaning', 'Required frequency, such as daily, weekly or other', 'Any site access or security requirements'],
    related: ['window-cleaning', 'deep-cleaning', 'post-construction-cleaning'],
    seoDescription: 'Commercial and office cleaning from Final Sweep Co. Ltd. Scheduled and ongoing cleaning for offices, retail premises and businesses.',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    navLabel: 'Deep Cleaning',
    summary: 'A thorough, detail-focused clean that reaches the areas routine cleaning often misses.',
    image: '/images/deep.jpg',
    imageAlt: 'Gloved hand wiping a surface during a detailed clean',
    heroTagline: 'A more thorough clean, from top to bottom.',
    intro: [
      'Deep cleaning goes beyond a regular tidy. It is a thorough, methodical clean aimed at built-up dirt and the hard-to-reach areas that are easy to overlook day to day.',
      'It is a useful reset before an occasion, after a busy period or when a space simply needs more attention.',
    ],
    covers: [
      'Detailed cleaning of kitchens and bathrooms',
      'Skirting boards, door frames and fittings',
      'Hard-to-reach and often-missed areas',
      'Thorough floor cleaning',
      'Surfaces and fixtures throughout the property',
    ],
    suitableFor: ['Households wanting a seasonal reset', 'Landlords between lets', 'Businesses needing a periodic thorough clean', 'Anyone preparing a space for guests or use'],
    requirements: ['Property type and approximate size', 'Areas of greatest concern', 'Whether the property is occupied or empty', 'Preferred date for the clean'],
    related: ['domestic-cleaning', 'end-of-tenancy-cleaning', 'commercial-office-cleaning'],
    seoDescription: 'Deep cleaning services from Final Sweep Co. Ltd for homes and commercial premises, focused on thorough, detailed cleaning.',
  },
  {
    slug: 'end-of-tenancy-cleaning',
    name: 'End-of-Tenancy Cleaning',
    navLabel: 'End-of-Tenancy Cleaning',
    summary: 'Move-out cleaning that helps leave rental properties presentable for check-out and the next occupant.',
    image: '/images/tenancy.jpg',
    imageAlt: 'Clean, light and uncluttered living space ready for new occupants',
    heroTagline: 'Presentable properties for check-out and the next move-in.',
    intro: [
      'Moving out is busy enough. End-of-tenancy cleaning from Final Sweep helps leave a rental property clean and presentable, whether you are a tenant preparing for check-out or a landlord preparing for the next occupant.',
      'We work with tenants, landlords, letting agents and property managers to agree the scope in advance.',
    ],
    covers: [
      'Kitchen cleaning, including surfaces and appliance exteriors',
      'Bathrooms, toilets and fittings',
      'Floors throughout the property',
      'Doors, skirting boards and window sills',
      'Bedrooms, living areas and hallways',
    ],
    suitableFor: ['Tenants moving out', 'Landlords', 'Letting and property management companies', 'Property managers preparing units for new occupants'],
    requirements: ['Property type and number of bedrooms and bathrooms', 'Furnished or unfurnished', 'Any inventory or check-out requirements you have been given', 'Your target check-out date'],
    related: ['deep-cleaning', 'window-cleaning', 'domestic-cleaning'],
    seoDescription: 'End-of-tenancy cleaning from Final Sweep Co. Ltd for tenants, landlords and property managers preparing rental properties.',
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    navLabel: 'Post-Construction Cleaning',
    summary: 'Cleaning and presenting spaces after building, refurbishment or renovation work.',
    image: '/images/construction.jpg',
    imageAlt: 'Freshly finished modern bathroom with glass shower and clean surfaces',
    heroTagline: 'Newly finished spaces, cleaned and ready to use.',
    intro: [
      'Building and refurbishment work leaves surfaces and floors in need of a proper clean. Post-construction cleaning from Final Sweep focuses on cleaning and presenting a space once the work is complete, so it is ready for use.',
      'This is a cleaning service for finished or near-finished work. We do not offer specialist hazardous-material removal.',
    ],
    covers: [
      'General cleaning of surfaces, fixtures and fittings',
      'Floor cleaning throughout',
      'Windows, frames and sills',
      'Kitchens and bathrooms in newly completed spaces',
      'Presenting the space ready for handover or occupation',
    ],
    suitableFor: ['Homeowners finishing renovations', 'Landlords and property managers', 'Businesses fitting out premises', 'Contractors handing over completed work'],
    requirements: ['Type and size of the property or premises', 'Nature of the completed work', 'Current state of the space', 'Handover or move-in date'],
    related: ['deep-cleaning', 'window-cleaning', 'commercial-office-cleaning'],
    seoDescription: 'Post-construction cleaning from Final Sweep Co. Ltd, cleaning and presenting spaces after building or refurbishment work.',
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    navLabel: 'Window Cleaning',
    summary: 'Clear, streak-conscious window and glass cleaning for homes and commercial premises.',
    image: '/images/windows.jpg',
    imageAlt: 'Cleaner wiping a window frame indoors',
    heroTagline: 'Clearer glass, brighter spaces.',
    intro: [
      'Clean windows let in more light and improve how a property looks from both inside and out. Final Sweep offers window cleaning for homes, offices and retail premises.',
      'We discuss the number and type of windows with you, then agree a one-off or regular arrangement.',
    ],
    covers: [
      'Window glass',
      'Frames and sills',
      'Glass doors and partitions, where accessible',
      'Shopfront and office glazing, where accessible',
    ],
    suitableFor: ['Homeowners', 'Retail premises with street-facing glass', 'Offices', 'Landlords and property managers'],
    requirements: ['Number and type of windows', 'Whether cleaning is internal, external or both', 'Access considerations', 'One-off or regular frequency'],
    related: ['commercial-office-cleaning', 'domestic-cleaning', 'end-of-tenancy-cleaning'],
    seoDescription: 'Window cleaning from Final Sweep Co. Ltd for homes, offices and retail premises, one-off or regular.',
  },
  {
    slug: 'laundry-ironing',
    name: 'Laundry and Ironing Services',
    navLabel: 'Laundry & Ironing',
    summary: 'Help with washing, drying and ironing so everyday linen and clothing stay fresh and ready.',
    image: '/images/laundry.jpg',
    imageAlt: 'Laundry basket filled with clothing ready to be washed',
    heroTagline: 'Fresh, folded and ready to wear.',
    intro: [
      'Laundry never seems to end. Final Sweep offers laundry and ironing services to help households and businesses keep clothing and linen fresh and presentable.',
      'We agree the arrangement with you in advance, including what is needed and how often.',
    ],
    covers: [
      'Washing and drying of everyday laundry',
      'Ironing of clothing and household linen',
      'Folding and tidy presentation',
      'Regular or one-off arrangements',
    ],
    suitableFor: ['Busy households', 'Professionals and families', 'Landlords managing linen', 'Small businesses with regular laundry needs'],
    requirements: ['Approximate volume of laundry', 'Washing, ironing or both', 'Any garment or fabric care instructions', 'Frequency and preferred arrangement'],
    related: ['domestic-cleaning', 'deep-cleaning', 'commercial-office-cleaning'],
    seoDescription: 'Laundry and ironing services from Final Sweep Co. Ltd for households and businesses.',
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
