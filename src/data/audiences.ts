export interface Audience {
  id: string
  name: string
  summary: string
  detail: string
  services: string[]
  products: string[]
}

export const audiences: Audience[] = [
  {
    id: 'households',
    name: 'Households',
    summary: 'Home cleaning and everyday supplies for busy households.',
    detail: 'Keep your home fresh with regular or one-off cleaning, laundry and ironing support, and access to the cleaning products you use every day.',
    services: ['domestic-cleaning', 'deep-cleaning', 'laundry-ironing'],
    products: ['cleaning-solutions', 'detergents'],
  },
  {
    id: 'landlords',
    name: 'Landlords',
    summary: 'Cleaning between tenancies and supplies for rental properties.',
    detail: 'Prepare properties for new occupants with end-of-tenancy and deep cleaning, and keep supplies on hand for routine upkeep.',
    services: ['end-of-tenancy-cleaning', 'deep-cleaning', 'window-cleaning'],
    products: ['cleaning-solutions', 'cleaning-essentials'],
  },
  {
    id: 'property-managers',
    name: 'Property Managers',
    summary: 'Flexible cleaning for managed and shared spaces.',
    detail: 'Support managed properties with scheduled cleaning of communal areas, turnaround cleaning and supplies for your portfolio.',
    services: ['commercial-office-cleaning', 'end-of-tenancy-cleaning', 'post-construction-cleaning'],
    products: ['disinfectants', 'cleaning-equipment'],
  },
  {
    id: 'letting-agents',
    name: 'Letting and Property Management Companies',
    summary: 'Dependable cleaning to help you turn properties around.',
    detail: 'A single cleaning partner for tenancy changeovers, pre-letting presentation and ongoing upkeep across the properties you look after.',
    services: ['end-of-tenancy-cleaning', 'deep-cleaning', 'window-cleaning'],
    products: ['cleaning-essentials', 'cleaning-solutions'],
  },
  {
    id: 'offices',
    name: 'Offices',
    summary: 'Scheduled office cleaning and workplace supplies.',
    detail: 'Keep workspaces tidy and welcoming with ongoing office cleaning, window cleaning and the supplies your team uses.',
    services: ['commercial-office-cleaning', 'window-cleaning', 'deep-cleaning'],
    products: ['disinfectants', 'cleaning-essentials'],
  },
  {
    id: 'retail',
    name: 'Retail Premises',
    summary: 'Presentable shop floors and glazing, with supplies for daily upkeep.',
    detail: 'First impressions matter. Cleaning for shop floors, shopfronts and customer areas, plus supplies for daily maintenance.',
    services: ['commercial-office-cleaning', 'window-cleaning', 'post-construction-cleaning'],
    products: ['cleaning-tools', 'cleaning-solutions'],
  },
  {
    id: 'commercial',
    name: 'Commercial Businesses',
    summary: 'One-off and ongoing cleaning arrangements for business premises.',
    detail: 'From one-off cleans to continuing commercial arrangements, combined with supplies for in-house cleaning teams.',
    services: ['commercial-office-cleaning', 'deep-cleaning', 'post-construction-cleaning'],
    products: ['cleaning-equipment', 'detergents'],
  },
  {
    id: 'private-clients',
    name: 'Private Clients',
    summary: 'Tailored cleaning and product support for individual needs.',
    detail: 'If your requirements do not fit a standard category, tell us what you need and we will discuss a tailored cleaning or product arrangement.',
    services: ['domestic-cleaning', 'deep-cleaning', 'laundry-ironing'],
    products: ['cleaning-essentials', 'cleaning-tools'],
  },
]

export const principles = [
  { icon: 'Briefcase', title: 'Professional Service Delivery', text: 'A consistent and organised approach to cleaning requirements.' },
  { icon: 'Sparkles', title: 'Attention to Detail', text: 'A focus on maintaining clean, hygienic and presentable environments.' },
  { icon: 'CalendarClock', title: 'Flexible Cleaning Solutions', text: 'Support for one-off cleaning jobs, scheduled cleaning and ongoing arrangements.' },
  { icon: 'Building2', title: 'Residential and Commercial Expertise', text: 'Cleaning solutions for households, landlords, property managers, offices and businesses.' },
  { icon: 'PackageCheck', title: 'Convenient Product Access', text: 'Cleaning products and essential supplies for individuals and business customers.' },
  { icon: 'HeartHandshake', title: 'Customer Satisfaction', text: 'A commitment to understanding customer requirements and providing dependable service.' },
] as const

export const steps = [
  { n: '01', title: 'Tell Us What You Need', text: 'Describe your cleaning requirements or the products you are looking for.' },
  { n: '02', title: 'Discuss Your Requirements', text: 'We review your enquiry and clarify the scope of the requested service or product requirements.' },
  { n: '03', title: 'Agree the Arrangement', text: 'Discuss the appropriate service, schedule and applicable costs.' },
  { n: '04', title: 'Get Your Cleaning Solution', text: 'Proceed with the agreed cleaning service or product supply arrangement.' },
] as const
