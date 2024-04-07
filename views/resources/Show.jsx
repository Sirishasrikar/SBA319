// Show.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');

class Show extends React.Component {
    render() {
        const { resource } = this.props;

        return (
            <DefaultLayout title={"Resource Details"}>
                <h2>{resource.title}</h2>
                <p><strong>Category:</strong> {resource.category}</p>
                <p><strong>Description:</strong> {resource.description}</p>
                <p><strong>Benefits:</strong> {resource.benefits}</p>
            </DefaultLayout>
        );
    }
}

module.exports = Show;
