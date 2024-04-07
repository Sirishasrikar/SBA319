// Index.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
    render() {
        const { resources } = this.props;

        return (
            <DefaultLayout title={"Resources Index Page"}>
                
                    <a href="/resources/new">Create a New Resource</a>
                
                <ul>
                    {resources.map((resource, i) => {
                        return (
                            <li key={i}>
                                <div>
                                    Title:{resource.title}<br />
                                    Category:{resource.category}<br />
                                    Description:{resource.description}<br />
                                     Benefits:{resource.benefits}<br/>
                                </div>
                                <br/>
                                <br/>
                                {/* <a href={`/resources/${resource._id}/edit`}>Edit This Resource</a>
                            <form action={`/resources/${resource._id}?_method=DELETE`} method="POST"><br />
                                <input type="submit" value="DELETE"/>
                            </form> */}
                            </li>
                        );
                    })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;
