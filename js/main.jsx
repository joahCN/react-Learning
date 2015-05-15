import React from "react";

class CommentBox extends React.Component {
	render() {
		return <div>
			hello , react
		</div>;
	}
}

React.render(<CommentBox />, document.getElementById("content"));
