// Show.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render() {
        const post = this.props.post;

        return (
            <DefaultLayout title= "Post Details">
                <h2>Title: {post.title}</h2>
                <p><strong>Content:</strong> {post.content}</p>
                <p><strong>Author:</strong> {post.author}</p>
                <p><strong>Category:</strong> {post.category}</p>

            </DefaultLayout>
        );
    }
}

module.exports = Show;
