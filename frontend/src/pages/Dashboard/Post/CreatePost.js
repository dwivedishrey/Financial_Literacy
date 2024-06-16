import React, { useState, useEffect } from "react";
import "./CreatePost.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, TextField } from "@mui/material";
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
    <Box className="create-post-container">
      <Box className="create-post-box">
        <Typography variant="h4" className="create-post-header">
          Ask Your Question
        </Typography>
        <TextField
          value={body}
          onChange={(e) => setBody(e.target.value)}
          // multiline
          // rows={4}
          placeholder="Ask your question here..."
          // variant="outlined"
          fullWidth
          margin="normal"
          className="create-post-textarea"
          // sx={{border:"1px solid black"}}
          
        />
       
        
        <Button
          variant="contained"
          onClick={postDetails}
          className="create-post-button"
        >
          Post
        </Button>
       
      </Box>

      {Array.isArray(posts) && posts.map((post) => (
        <Box key={post._id} className="post-preview">
          <Typography variant="subtitle2" color="#1679AB">{post.username}</Typography>
          <Typography variant="h4">{post.body}</Typography>
          <div className="underline"></div>
          <Box className="comment-section">
            {/* <Typography variant="h6">Comments</Typography> */}
            {(post.comments || []).map((comment) => (
              <Box key={comment._id} className="comment">
                {/* <Typography color="black" variant="body" ><strong>{comment.username}:</strong> {comment.comment}</Typography> */}
                <Typography color="grey" variant="subtitle2">{comment.username}</Typography>
                <Typography color="black" variant="body">{comment.comment}</Typography>
              </Box>
            ))}
            <form onSubmit={(e) => handleCommentSubmit(e, post._id)}>
              <TextField
                value={commentInputs[post._id] || ""}
                onChange={(e) => handleCommentChange(e, post._id)}
                placeholder="Add a comment..."
                variant="outlined"
                fullWidth
                margin="normal"
                className="comment-textarea"
                sx={{border:"1px solid black"}}
              />
              <Button
                variant="contained"
                type="submit"
                className="comment-button"
              >
                Post Comment
              </Button>
              
            </form>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
