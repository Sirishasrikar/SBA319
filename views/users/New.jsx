const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Fruit'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/users' method="POST" id="submit-form">
            
                    First Name: <input type="text" id="fname" name="fname" /><br />
                    Last Name: <input type="text" id="lname" name="lname" /> <br />
                    User Name: <input type="text" id="uname" name="uname" /> <br />
                    Password: <input type="password" id="pword" name="pword" /><br />
                    Confirm Password: <input type="password" id="pword2" name="pword2" /><br />
                    Keep Signed In: <input type="checkbox" name="keepSignedIn"/> <br />
                    <input type="submit" name="" value="Register"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;

