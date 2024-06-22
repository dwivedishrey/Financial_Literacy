import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../Context/globalContext";
import quora from '../../../assets/quora1.jpg'
export default function CreatePost() {
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]); // Ensure initial state is an empty array
  const [commentInputs, setCommentInputs] = useState({}); // Track comments for each post
  const navigate = useNavigate();
  const { users } = useGlobalContext();
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    fetch("https://financial-literacy-be3z.onrender.com/posts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          
          setPosts([]); // Set posts to an empty array if data is not an array
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const postDetails = () => {
    fetch("https://financial-literacy-be3z.onrender.com/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body,
        user_id: users.user_id,
        username: users.username // Assume userId is stored in localStorage
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB("Successfully Posted");
          setPosts([data, ...posts]); // Add new post to the posts state
          setBody(""); // Clear the input field after submission
        }
      })
      .catch((err) => console.log(err));
  };

  const postComment = (postId, comment) => {
    fetch("https://financial-literacy-be3z.onrender.com/addComment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        comment,
        userId: users.user_id,
        username: users.username // Assume userId is stored in localStorage
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notifyA(data.error);
        } else {
          notifyB("Comment posted successfully");
          setPosts(posts.map(post => post._id === postId ? data : post)); // Update the post with new comment
          setCommentInputs({ ...commentInputs, [postId]: "" }); // Clear the comment input for the specific post
        }
      })
      .catch((err) => console.log(err));
  };

  const handleCommentChange = (e, postId) => {
    setCommentInputs({ ...commentInputs, [postId]: e.target.value });
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    if (commentInputs[postId] && commentInputs[postId].trim() !== "") {
      postComment(postId, commentInputs[postId]);
    } else {
      notifyA("Please enter a comment");
    }
  };
  const style = {
    paddingTop: '30px',
    backgroundImage: `url(${quora})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundAttachment:'fixed',
    minHeight: '100vh'
  
  };

  return (
    <div style={style} className="main-container">
    <div className="create-post-container">
      <div  className="create-post-box">
        <h4 className="create-post-header">Ask Your Question</h4>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          placeholder="Ask your question here..."
          className="create-post-textarea"
        />
        <button onClick={postDetails} className="create-post-button">
          Post
        </button>
      </div>

      {Array.isArray(posts) && posts.map((post) => (
        <div key={post._id} className="post-preview">
          <h4>{post.body}</h4>
          <p>Posted by: {post.username}</p>
          <div className="comment-section">
            <h6>Comments</h6>
            {(post.comments || []).map((comment) => (
              <div key={comment._id} className="comment">
                <p><strong>{comment.username}:</strong> {comment.comment}</p>
              </div>
            ))}
            <form onSubmit={(e) => handleCommentSubmit(e, post._id)}>
              <textarea
                value={commentInputs[post._id] || ""}
                onChange={(e) => handleCommentChange(e, post._id)}
                placeholder="Add a comment..."
                className="comment-textarea"
              />
              <button type="submit" className="comment-button">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
