//posts/Edit.jsx
const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/posts/${this.props.post._id}?_method=PUT`} method="POST">
                    Title: <input type="text" name="title" defaultValue={this.props.post.title} /><br />
                    Content: <input type="text" name="content" defaultValue={this.props.post.content} /><br />
                    Author: <input type="text" name="author" defaultValue={this.props.post.author} /><br />
                    Category: <input type="text" name="category" defaultValue={this.props.post.category} /><br />
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;