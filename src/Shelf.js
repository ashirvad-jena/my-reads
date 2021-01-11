import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ shelf, books, onSelected }) => {
	const bookList = books.map((book) => {
		return (
			<Book
				key={book.id}
				shelfId={shelf.id}
				book={book}
				onSelected={onSelected}
			/>
		);
	});

	return (
		<li className="bookshelf">
			<h2 className="bookshelf-title">{shelf.name}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">{bookList}</ol>
			</div>
		</li>
	);
};

Shelf.propTypes = {
	shelf: PropTypes.object,
	books: PropTypes.array,
	onSelected: PropTypes.func,
};

export default Shelf;
