import React, { Component } from "react";
import DropDown from "./DropDown";

const categories = ["Currently Reading", "Want to read", "Read", "None"];

class Book extends Component {
	constructor(props) {
		super(props);
		this.onSelected = this.onSelected.bind(this);
	}

	onSelected = (category) => {
		console.log(category);
	};

	render() {
		return (
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{
							width: 128,
							height: 193,
							backgroundImage:
								'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
						}}
					></div>
					<DropDown
						defaultSelection={categories[2]}
						categories={categories}
						onSelected={this.onSelected}
					/>
				</div>
				<div className="book-title">To Kill a Mockingbird</div>
				<div className="book-authors">Harper Lee</div>
			</div>
		);
	}
}

export default Book;
