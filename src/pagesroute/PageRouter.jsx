import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../core/header/Header";
import Footer from "../core/footer/Footer";
import HomeIndexPage from '../pages/home/HomeIndexPage';
import AboutIndexPage from '../pages/about/AboutIndexPage';
import ContactIndexPage from '../pages/contact/ContactIndexPage';
import ProductsIndexPage from '../pages/products/ProductsIndexPage';
import ProductDetailsPage from '../pages/products/ProductDetailsPage';
import PageNotFound from '../pages/nopage/PageNotFound';

export default function PageRouter(){
    return(
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
    )
}