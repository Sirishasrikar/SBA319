// New.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Resource"}>
                <h2>Create New Resource</h2>
                <form action="/resources" method="POST">
                    Title:<input type="text" name="title" /><br /><br /><br />

                    Description:<input type="text" name="description" /><br /><br /><br />

                    Category:<input type="text" name="category" /><br /><br /><br />

                    Instructions:<input type="text" name="instructions" /><br /><br /><br />

                    Benefits:<input type="text" name="benefits" /><br /><br /><br />

                    <input type="submit" name="" value="Create" />
                </form>

            </DefaultLayout>

        );
    }
}

module.exports = New;
