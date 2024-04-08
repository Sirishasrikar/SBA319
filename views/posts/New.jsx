// New.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default');
{/* <link rel="stylesheet" href="/style.css" /> */}


class New extends React.Component {
    // validateForm() {
    //     const title = document.getElementById('title').value;
    //     const content = document.getElementById('content').value;
    //     const author = document.getElementById('author').value;
    //     const category = document.getElementById('category').value;

    //     if (!title || !content || !author || !category) {
    //         alert('All fields are required.');
    //     } else {
    //         // Submit the form
    //         document.getElementById('postForm').submit();
    //     }
    // }
    render() {
        return (
            <div className="form-container">
            <DefaultLayout title={"New Post"}>
                <h2>Create New Post</h2>
                <form id="postForm" action="/posts" method="POST">
                    <label>Title:</label>
                    <input type="text" id='title' name="title"/><br />

                    <label>Content:</label>
                    <textarea id="content" name="content" ></textarea><br />

                    <label>Author:</label>
                    <input type="text" id='author' name="author" /><br />

                    <label>Category:</label>
                    <input type="text" id= 'category' name="category" /><br />

                    <button type="submit" onClick={this.validateForm}>Submit</button>

                </form>
               
            </DefaultLayout>
            </div>
        );
    }
}

module.exports = New;
