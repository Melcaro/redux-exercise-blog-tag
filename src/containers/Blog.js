import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost, addTags } from '../actions';

const mapStateToProps = state => {
  return { posts: state.posts, tags: state.tags };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost, addTags }, dispatch);

class Blog extends React.Component {
  state = {
    postTitle: '',
    postDescription: '',
    postTag: '',
  };

  setPostTitle = ({ target: { value: postTitle } }) => {
    this.setState({ postTitle });
  };

  setPostDescription = ({ target: { value: postDescription } }) => {
    this.setState({ postDescription });
  };

  setPostTag = ({ target: { value: postTag } }) => {
    this.setState({ postTag });
  };

  sendNewPost = e => {
    e.preventDefault();
    const { postTitle, postDescription, postTag } = this.state;
    const newPost = { postTitle, postDescription, postTag };

    this.props.createPost(newPost);
    this.props.addTags(postTag);
    this.setState({
      postTitle: '',
      postDescription: '',
      postTag: '',
    });
  };
  render() {
    const { postTitle, postDescription, postTag } = this.state;
    console.log(this.props.tags);
    return (
      <div>
        <h1>BLOG WITH REDUX</h1>
        {
          <div>
            {this.props.posts.map(
              ({ postID, postTitle, postDescription, postTag }) => (
                <div key={postID}>
                  <h2>{postTitle}</h2>
                  <p>{postDescription}</p>
                  <p>Tag: {postTag}</p>
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
          <label for="tag">Enter one or more tags:</label>
          <input
            type="text"
            name="tag"
            id="tag"
            onChange={this.setPostTag}
            value={postTag}
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
