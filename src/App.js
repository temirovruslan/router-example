import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Booklist from "./pages/Booklist";
import Contact from "./pages/Contact";
import { Outlet, Link } from "react-router-dom";
import Book from './pages/Book'
import NotFound from './pages/NotFound'
import NewBook from './pages/NewBook'

function App() {
	return (
		<>
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>

        <li>
          <Link to={'/about'}>About</Link>
        </li>

        <li>
          <Link to={'/books'}>Booklist</Link>
          
        </li>
        
      </ul>
    </nav>
			<Routes>
				<Route path="/" element={<Home />} />
        
				<Route path="/about" element={<About />} />
				
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />



				<Route path={'/books'}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Book />} />
          <Route path="/books/new-book" element={<NewBook/>} />
        </Route>



        {/* <Route path="/books" element={<Booklist />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new-book" element={<NewBook />} /> */}


			</Routes>
		</>
	);
}

export default App;
