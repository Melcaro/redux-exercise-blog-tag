import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost } from '../actions';

const mapStateToProps = state => {
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost }, dispatch);

const Blog = ({ posts, createPost }) => {
  return (
    <div>
      <h1>BLOG WITH REDUX</h1>
      {
        <div>
          {posts.map(
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
      <button>Add a new post</button>
      <form>
        <label for="title">Enter the title of your post</label>
        <input type="text" name="title" id="title" />
        <label>Write your post here:</label>
        <input type="text"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

const ConnectedPost = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default ConnectedPost;
