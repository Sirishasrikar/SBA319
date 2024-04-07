const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { posts } = this.props;
        
        return (
            <DefaultLayout title={"Posts Index Page"}>
                
                    <a href="/posts/new">Create a New Post</a>
              
                <ul>
                    {posts.map((post, i) => {
                        return (
                            <li key={i}>
                                <div>
                                    Title:{post.title}<br />
                                    Content:{post.content}<br />
                                    Author:{post.author}<br />
                                    Category:{post.category}<br/>
                                     </div>
                            <a href={`/posts/${post._id}/edit`}>Edit This Post</a>
                            <form action={`/posts/${post._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;