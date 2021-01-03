import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class Shelf extends Component {
	constructor(props) {
		super(props);
		this.onSelected = this.onSelected.bind(this);
	}

	onSelected = (fromCategory, toCategory, book) => {
		console.log(fromCategory, toCategory, book);
	};

	render() {
		const { currentCategory, categories, books } = this.props;

		const bookList = books.map((book) => {
			return (
				<li key={book.id}>
					<Book
						categories={categories}
						currentCategory={currentCategory}
						book={book}
						onSelected={this.onSelected}
					/>
				</li>
			);
		});

		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{currentCategory}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">{bookList}</ol>
				</div>
			</div>
		);
	}
}

Shelf.propTypes = {
	currentCategory: PropTypes.string.isRequired,
	categories: PropTypes.array,
	books: PropTypes.array,
};

export default Shelf;
