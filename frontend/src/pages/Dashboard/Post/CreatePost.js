import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useGlobalContext } from "../../Context/globalContext";

export default function Createpost() {
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]); // Ensure initial state is an empty array
  const [commentInputs, setCommentInputs] = useState({}); // Track comments for each post
  const navigate = useNavigate();
  const { users } = useGlobalContext();
  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setPosts([]); // Set posts to an empty array if data is not an array
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const postDetails = () => {
    fetch("http://localhost:5000/createpost", {
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
    fetch("http://localhost:5000/addComment", {
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

  return (
    <Box sx={{ width: "500px", marginLeft: "420px", border: "1px solid black", height: "auto", marginTop: "50px", padding: "20px" }}>
      <div className="createPost">
        <div className="post-header">
          <h4 style={{ margin: "3px auto" }}>Ask Question</h4>
        </div>
        <div className="details">
          <textarea 
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Write a caption...."
            style={{ padding: "10px" }}
          ></textarea>
          <Button style={{ backgroundColor: "#4cceac", color: "black", fontWeight: "600" }} id="post-btn" onClick={postDetails}>
            Send
          </Button>
        </div>
      </div>

      {Array.isArray(posts) && posts.map((post) => (
        <div key={post._id} className="post-preview" style={{ marginTop: "20px" }}>
          <h5>{post.body}</h5>
          <p>Posted by: {post.username}</p>
          <div className="comment-section" style={{ marginTop: "20px" }}>
            <h4>Comments</h4>
            {(post.comments || []).map((comment) => (
              <div key={comment._id} className="comment">
                <p><strong>{comment.username}:</strong> {comment.comment}</p>
              </div>
            ))}
            <form onSubmit={(e) => handleCommentSubmit(e, post._id)}>
              <textarea
                value={commentInputs[post._id] || ""}
                onChange={(e) => handleCommentChange(e, post._id)}
                type="text"
                placeholder="Add a comment..."
                style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
              />
              <Button style={{ backgroundColor: "#4cceac", color: "black", fontWeight: "600" }} type="submit">
                Post Comment
              </Button>
            </form>
          </div>
        </div>
      ))}
    </Box>
  );
}
