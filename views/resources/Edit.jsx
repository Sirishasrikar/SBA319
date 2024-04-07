// Edit.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');

class Edit extends React.Component {
    render() {
        const { resource } = this.props;

        return (
            <DefaultLayout title={"Edit Resource"}>
                <h2>Edit Resource</h2>
                <form action={`/resources/${resource._id}?_method=PUT`} method="POST">
                    <label>Title:</label>
                    <input type="text" name="title" defaultValue={resource.title} /><br />

                    <label>Description:</label>
                    <textarea name="description" defaultValue={resource.description}></textarea><br />

                    <label>Category:</label>
                    <input type="text" name="category" defaultValue={resource.category} /><br />

                    <label>Benefits:</label>
                    <textarea name="benefits" defaultValue={resource.benefits}></textarea><br />

                    <input type="submit" value="Save" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;
