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
    filteredTag: [],
  };

  setPostTitle = ({ target: { value: postTitle } }) => {
    this.setState({ postTitle });
  };

  setPostDescription = ({ target: { value: postDescription } }) => {
    this.setState({ postDescription });
  };

  setPostTag = ({ target: { value: postTag } }) => {
    this.setState({ postTag });
    this.autoCompleteTags(this.state.postTag);
  };

  autoCompleteTags = query => {
    const tagRegex = new RegExp(query, 'gi');
    const { tags } = this.props;
    const filteredTag = tags.filter(tag => tagRegex.test(tag));
    this.setState({ filteredTag });
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
      filteredTag: [],
    });
  };
  render() {
    const { postTitle, postDescription, postTag, filteredTag } = this.state;
    console.log(filteredTag);
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
                  <div>
                    {postTag.map(tag => (
                      <p>{tag}</p>
                    ))}
                  </div>
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
          <div>
            {filteredTag.map(filter => (
              <p>{filter}</p>
            ))}
          </div>
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
