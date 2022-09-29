import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Booklist from "./pages/Booklist";
import Contact from "./pages/Contact";
import { Outlet, Link } from "react-router-dom";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import NewBook from "./pages/NewBook";
import ExampleForReduxT from "./pages/ExampleForReduxT";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>Home</Link>
					</li>

					<li>
						<Link to={"/about"}>About</Link>
					</li>

					<li>
						<Link to={"/books"}>Booklist</Link>
					</li>

          <li>
						<Link to={"/redux"}>Redux</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/redux" element={<ExampleForReduxT />} />

				<Route path="/about" element={<About />} />

				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />

				<Route path={"/books"}>
					<Route index element={<Booklist />} />
					<Route path=":id" element={<Book />} />
					<Route path="/books/new-book" element={<NewBook />} />
				</Route>

				{/* <Route path="/books" element={<Booklist />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new-book" element={<NewBook />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
