const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New User'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/users' method="POST" >
            
                    First Name: <input type="text" name="fname" /><br />
                    Last Name: <input type="text"  name="lname" /> <br />
                    User Name: <input type="text"  name="uname" /> <br />
                    E Mail:<input type="email"  name="email" />
                    Password: <input type="password"  name="pword" /><br />
                    {/* Confirm Password: <input type="password" id="pword2" name="pword2" /><br /> */}
                    Keep Signed In: <input type="checkbox"  name="keepSignedIn"/> <br />
                    <input type="submit" name="" value="Create User"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;

