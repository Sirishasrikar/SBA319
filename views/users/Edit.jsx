//Users/Edit.jsx
const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit Page">
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/users/${this.props.user._id}?_method=PUT`} method="POST">
                    First Name: <input type="text" name="fname" defaultValue={this.props.user.fname} /><br />
                    Last Name: <input type="text" name="lname" defaultValue={this.props.user.lname} /><br />
                    E Mail:<input type="email" name="email" defaultValue={this.props.user.email} /><br />
                    Password:<input type="password" name="pword" defaultValue={this.props.user.pword} /><br />
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;