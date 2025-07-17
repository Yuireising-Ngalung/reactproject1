import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeIndexPage from './pages/home/HomeIndexPage';
import AboutIndexPage from './pages/about/AboutIndexPage';
import ContactIndexPage from './pages/contact/ContactIndexPage';
import PageNotFound from './pages/nopage/PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './core/header/Header';
import ProductsIndexPage from './pages/products/ProductsIndexPage';
import Footer from './core/footer/Footer';
import ProductDetailsPage from './pages/products/ProductDetailsPage';


const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);




root.render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element = {<HomeIndexPage />} />
        <Route path='about' element = {<AboutIndexPage />} />
        <Route path='contact' element = {<ContactIndexPage />} />
        <Route path='product' element = {<ProductsIndexPage />} />
        <Route path='product/:id' element={<ProductDetailsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)