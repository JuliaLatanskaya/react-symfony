import React from 'react';
import { Routes, Route } from "react-router-dom";
import {
    Home, About, Contact, Services, CompanyHistory
} from "./pages";

function WithRoutes() {
    return (
        <div>
            <p>Our Services</p>
            <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } >
                    <Route path="services" element={ <Services /> } />
                    <Route path="companyHistory" element={ <CompanyHistory /> } />
                </Route>
                <Route path="/contact" element={ <Contact /> } />
            </Routes>
        </div>
    );
}

export default WithRoutes;