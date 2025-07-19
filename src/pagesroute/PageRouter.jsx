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
import RouteProtector from "../routeprotector/RouteProtector";

export default function PageRouter(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = {<TodoIndexPage />} />
                <Route path='about' element = {<AboutIndexPage />} />
                <Route path='contact' element = {<ContactIndexPage />} />
                <Route path='product' element = {
                    <RouteProtector>
                        <ProductsIndexPage />
                    </RouteProtector>
                    }
                 />
                <Route path='product/:id' element={
                    <RouteProtector>
                        <ProductDetailsPage />
                    </RouteProtector> 
                    } 
                />
                <Route path='*' element={<PageNotFound />} />
                <Route path="dashboard" element = {
                    <RouteProtector>
                        <DashboardIndexPage />
                    </RouteProtector>
                    } 
                />
                
                <Route path="login" element={<LoginIndexPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}