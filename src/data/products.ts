/**
 * Product data layer.
 * Categories are real; individual products are NOT supplied yet.
 * To go live, populate `products` (or replace with an API/CMS call). Never add invented brands, prices or stock.
 */
export interface ProductCategory {
  slug: string
  name: string
  summary: string
  intro: string
  image: string
  imageAlt: string
  examples: string[]
  seoDescription: string
}

export interface Product {
  id: string
  categorySlug: string
  name: string
  description?: string
  image?: string
  // Deliberately no price / stock fields until real inventory data exists.
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'cleaning-solutions',
    name: 'General-Purpose Cleaning Solutions',
    summary: 'Everyday solutions for cleaning a wide range of household and commercial surfaces.',
    intro: 'General-purpose cleaning solutions for everyday use around the home, office and commercial premises. Tell us what you need to clean and we will help you find a suitable option.',
    image: '/images/p-solutions.jpg',
    imageAlt: 'Gloved hand holding a cleaning spray bottle',
    examples: ['Multi-surface cleaners', 'Kitchen and bathroom cleaners', 'Glass and window cleaners'],
    seoDescription: 'General-purpose cleaning solutions for homes and businesses from Final Sweep Co. Ltd.',
  },
  {
    slug: 'detergents',
    name: 'Detergents',
    summary: 'Detergents for laundry, dishes and general cleaning needs.',
    intro: 'Detergents for laundry, washing up and general cleaning. Enquire with your requirements and quantities and we will advise on what is available.',
    image: '/images/p-detergents.jpg',
    imageAlt: 'Gloved hand wiping a surface while cleaning',
    examples: ['Laundry detergents', 'Washing-up products', 'Floor and surface detergents'],
    seoDescription: 'Detergents for households and businesses from Final Sweep Co. Ltd. Enquire about available products.',
  },
  {
    slug: 'disinfectants',
    name: 'Disinfectants',
    summary: 'Disinfecting products to support hygiene in homes and workplaces.',
    intro: 'Disinfectants to support everyday hygiene in homes, offices and commercial premises. Contact us to discuss what you need.',
    image: '/images/p-disinfectants.jpg',
    imageAlt: 'Gloved hands preparing for hygienic cleaning',
    examples: ['Surface disinfectants', 'Bathroom and washroom hygiene products', 'Hand and general hygiene products'],
    seoDescription: 'Disinfectants for homes, offices and commercial premises from Final Sweep Co. Ltd.',
  },
  {
    slug: 'cleaning-tools',
    name: 'Cleaning Tools',
    summary: 'Practical hand tools for effective day-to-day cleaning.',
    intro: 'Practical cleaning tools for households and businesses. Let us know what you are looking for and we will respond with the options available.',
    image: '/images/p-tools.jpg',
    imageAlt: 'Handheld vacuum cleaning a floor',
    examples: ['Mops and buckets', 'Brushes and brooms', 'Cloths and sponges'],
    seoDescription: 'Cleaning tools for homes and businesses from Final Sweep Co. Ltd.',
  },
  {
    slug: 'cleaning-equipment',
    name: 'Cleaning Equipment and Accessories',
    summary: 'Equipment and accessories that support larger or more frequent cleaning tasks.',
    intro: 'Cleaning equipment and accessories for home and commercial use. Share your requirements and we will discuss suitable options with you.',
    image: '/images/p-equipment.jpg',
    imageAlt: 'Robot vacuum cleaner on a carpeted floor',
    examples: ['Vacuum cleaners', 'Trolleys and caddies', 'Replacement accessories'],
    seoDescription: 'Cleaning equipment and accessories for households and businesses from Final Sweep Co. Ltd.',
  },
  {
    slug: 'cleaning-essentials',
    name: 'Other Cleaning Essentials',
    summary: 'The everyday consumables and materials that keep cleaning routines going.',
    intro: 'The everyday essentials that complete a cleaning routine. Tell us what you need and we will let you know what we can supply.',
    image: '/images/p-essentials.jpg',
    imageAlt: 'Laundry basket with clothing, representing everyday household essentials',
    examples: ['Refuse sacks and liners', 'Gloves and protective items', 'Paper and washroom consumables'],
    seoDescription: 'Cleaning essentials and consumables for households and businesses from Final Sweep Co. Ltd.',
  },
]

/** Empty until a real catalogue is supplied. */
export const products: Product[] = []

export const getCategory = (slug: string) => productCategories.find((c) => c.slug === slug)
export const getProductsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug)
