import React from 'react'
import {Link } from "react-router-dom";

function TopBar() {
  return (
    <div>
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-brand">Konsell Strona Administratora</div>
        <div className ="navbar-brand"> <Link to = "/ListProduct" className = "btn btn-primary mb-2" > Lista Produktów </Link></div>
        <div className ="navbar-brand"> <Link to = "/AddProduct" className = "btn btn-primary mb-2" > Dodaj produkt </Link></div>
        <div className ="navbar-brand"> <Link to = "/ListCategory" className = "btn btn-secondary mb-2" > Lista Kategorii </Link></div>
        <div className ="navbar-brand"> <Link to = "/AddCategory" className = "btn btn-secondary mb-2" > Dodaj Kategorie </Link></div>

        </nav>
    </header>
</div>
  )
}

export default TopBar