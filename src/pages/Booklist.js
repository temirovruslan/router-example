import React from "react";
import {  Link } from "react-router-dom";

function Booklist() {
	return (
		<>
			<h1>Booklist</h1>
      <Link to='/books/1'>Book 1</Link>{' '}
      <br/>
      <Link to='/books/2'>Book 2</Link>
      <br/>
      <Link to='/books/new-book'>NewBook</Link>
		</>
	);
}

export default Booklist;
