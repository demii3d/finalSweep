import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'

const ServicesIndex = lazy(() => import('./pages/ServicesIndex'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const ProductsIndex = lazy(() => import('./pages/ProductsIndex'))
const ProductCategoryPage = lazy(() => import('./pages/ProductCategoryPage'))
const About = lazy(() => import('./pages/About'))
const WhoWeServe = lazy(() => import('./pages/WhoWeServe'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Cookies = lazy(() => import('./pages/Cookies'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicesIndex />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="products" element={<ProductsIndex />} />
          <Route path="products/:slug" element={<ProductCategoryPage />} />
          <Route path="who-we-serve" element={<WhoWeServe />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="cookie-policy" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
