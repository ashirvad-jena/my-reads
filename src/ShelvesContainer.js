import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ShelvesContainer extends Component {
	render() {
		const { books, shelves, onSelected } = this.props;
		console.log(books, shelves);
		if (!(Array.isArray(books) && books.length)) return <div>NO</div>;
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
			</div>
		);
	}
}

ShelvesContainer.propTypes = {
	books: PropTypes.array,
	shelves: PropTypes.array.isRequired,
};

export default ShelvesContainer;
