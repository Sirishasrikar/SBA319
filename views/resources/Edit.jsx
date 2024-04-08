// Edit.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');

class Edit extends React.Component {
    render() {
        const { resource } = this.props;
        return (
            <DefaultLayout title={"Edit Resource"}>
                <h2>Edit Resource</h2>
                <form action={`/resources/${this.props.resource._id}?_method=PUT`} method="POST">
                    <label>Title:</label>
                    <input type="text" name="title" defaultValue={this.props.resource.title} /><br />

                    <label>Description:</label>
                    <textarea name="description" defaultValue={this.props.resource.description}></textarea><br />

                    <label>Category:</label>
                    <input type="text" name="category" defaultValue={this.props.resource.category} /><br />

                    <label>Instructions:</label>
                    <input type="text" name= "instructions" defaultValue={this.props.resource.instructions} /><br />

                    <label>Benefits:</label>
                    <textarea name="benefits" defaultValue={this.props.resource.benefits}></textarea><br />

                    <input type="submit" value="Save" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;
