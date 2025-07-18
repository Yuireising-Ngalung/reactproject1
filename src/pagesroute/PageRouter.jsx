import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../core/header/Header";
import Footer from "../core/footer/Footer";
import TodoIndexPage from '../pages/todo/TodoIndexPage';
import AboutIndexPage from '../pages/about/AboutIndexPage';
import ContactIndexPage from '../pages/contact/ContactIndexPage';
import ProductsIndexPage from '../pages/products/ProductsIndexPage';
import ProductDetailsPage from '../pages/products/ProductDetailsPage';
import PageNotFound from '../pages/nopage/PageNotFound';
import DashboardIndexPage from "../pages/dashboard/DashboardIndexPage";
import LoginIndexPage from "../pages/login/LoginIndexPage";

export default function PageRouter(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = {<TodoIndexPage />} />
                <Route path='about' element = {<AboutIndexPage />} />
                <Route path='contact' element = {<ContactIndexPage />} />
                <Route path='product' element = {<ProductsIndexPage />} />
                <Route path='product/:id' element={<ProductDetailsPage />} />
                <Route path='*' element={<PageNotFound />} />
                <Route path="dashboard" element = {<DashboardIndexPage />} />
                <Route path="login" element={<LoginIndexPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}