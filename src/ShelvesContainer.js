import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ShelvesContainer extends Component {
	render() {
		const { books, shelves, onSelected } = this.props;
		if (!(Array.isArray(books) && books.length))
			return <div>No Books found</div>;
		const shelfComponents = shelves.map((shelf) => {
			return (
				<Shelf
					key={shelf.id}
					books={books.filter((book) => book.shelfId === shelf.id)}
					shelf={shelf}
					onSelected={onSelected}
				/>
			);
		});

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<ul>{shelfComponents}</ul>
				</div>
				<Link to="/searchBook" className="open-search">
					Add a book
				</Link>
			</div>
		);
	}
}

ShelvesContainer.propTypes = {
	books: PropTypes.array,
	shelves: PropTypes.array.isRequired,
};

export default ShelvesContainer;
