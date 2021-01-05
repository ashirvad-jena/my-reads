import React, { Component } from "react";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

class ShelvesContainer extends Component {
	render() {
		const jsonObject = this.props.jsonObject;
		const categories = Object.keys(jsonObject);

		const shelves = categories
			.filter((category) => category !== "None")
			.map((category) => {
				return (
					<Shelf
						key={category}
						currentCategory={category}
						categories={categories}
						books={jsonObject[category]}
					/>
				);
			});

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<ul>{shelves}</ul>
				</div>
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>
						Add a book
					</a>
				</div>
			</div>
		);
	}
}

ShelvesContainer.propTypes = {
	jsonObject: PropTypes.object,
};

export default ShelvesContainer;
