import React, { Component } from "react";
import DropDown from "./DropDown";
import PropTypes from "prop-types";

class Book extends Component {
	constructor(props) {
		super(props);
		this.onSelected = this.onSelected.bind(this);
	}

	onSelected = (toShelfId) => {
		this.props.onSelected(toShelfId, this.props.book);
	};

	render() {
		const { shelfId } = this.props;
		const { title, author, imageUrl } = this.props.book;
		const url = `url(${imageUrl})`;

		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage: url,
						}}
					></div>
					<DropDown shelfId={shelfId} onSelected={this.onSelected} />
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">{author}</div>
			</div>
		);
	}
}

Book.propTypes = {
	shelfId: PropTypes.string.isRequired,
	book: PropTypes.object.isRequired,
	onSelected: PropTypes.func,
};

export default Book;
