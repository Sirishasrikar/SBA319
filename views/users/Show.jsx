const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const user = this.props.user;

        return (
            <DefaultLayout title="Show an Individual User">
                <p>The {user.fname} {user.lname} is having a username as {user.uname}</p>
                {user.keepSignedIn ? 'Keep Signed In' : "NO!"}
                <br />
                <a href={`/users/${user.uname}/edit`}>Edit This User</a>
                <form action={`/users/${user.uname}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/users">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;