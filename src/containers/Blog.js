import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost } from '../actions';

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost }, dispatch);

class Blog extends React.Component {
  state = {
    postTitle: '',
    postDescription: '',
  };

  setPostTitle = ({ target: { value: postTitle } }) => {
    this.setState({ postTitle });
  };

  setPostDescription = ({ target: { value: postDescription } }) => {
    this.setState({ postDescription });
  };

  sendNewPost = e => {
    e.preventDefault();
    const { postTitle, postDescription } = this.state;
    this.props.createPost(postTitle, postDescription);
    this.setState({
      postTitle: '',
      postDescription: '',
    });
  };
  render() {
    const { postTitle, postDescription } = this.state;
    return (
      <div>
        <h1>BLOG WITH REDUX</h1>
        {
          <div>
            {this.props.posts.map(
              ({ postID, postTitle, postDescription, postTimeStamp }) => (
                <div key={postID}>
                  <h2>{postTitle}</h2>
                  <p>{postDescription}</p>
                  <p>{postTimeStamp}</p>
                </div>
              )
            )}
          </div>
        }
        <form>
          <label for="title">Enter the title of your post</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.setPostTitle}
            value={postTitle}
          />
          <label for="description">Write your post here:</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={this.setPostDescription}
            value={postDescription}
          ></input>
          <input
            type="submit"
            value="Add a new post"
            onClick={this.sendNewPost}
          />
        </form>
      </div>
    );
  }
}

const ConnectedPost = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default ConnectedPost;
