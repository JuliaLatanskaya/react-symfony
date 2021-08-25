import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <hr />
            <h1>Company Website</h1>
        </div>
    );
}

export function About() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <hr />
            <h1>About</h1>
            <h2><Outlet /></h2>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <hr />
            <h1>Contact</h1>
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    );
}

export function CompanyHistory() {
    return (
        <div>
            <h2>Our Company History</h2>
        </div>
    );
}