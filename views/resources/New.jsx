// New.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Resource"}>
                <h2>Create New Resource</h2>
                <form action="/resources" method="POST">
                    <label>Title:</label>
                    <input type="text" name="title" /><br />

                    <label>Description:</label>
                    <textarea name="description"></textarea><br />

                    <label>Category:</label>
                    <input type="text" name="category" /><br />

                    <label>Benefits:</label>
                    <textarea name="benefits"></textarea><br />

                    <input type="submit" value="Create" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;
