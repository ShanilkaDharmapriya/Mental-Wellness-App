import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/feed.css';
import Layout from '../components/Layout';
import '../styles/dashboard.css';

const SupportWall = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  const userId = 'user123';

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:5000/api/Feed');
    setPosts(res.data);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/Feed', {
      userId,
      message,
    });
    setMessage('');
    fetchPosts();
  };

  const handleComment = async (postId) => {
    const commentText = commentInputs[postId];
    if (!commentText) return;

    await axios.post(`http://localhost:5000/api/Feed/${postId}/comment`, {
      userId,
      comment: commentText,
    });

    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="wall-page">
        <div className="wall-form bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <h2 className="wall-heading text-2xl font-bold text-gray-800 mb-4">Share Your Feelings or Ask for Support</h2>
          <form onSubmit={handlePost} className="wall-post-form">
            <textarea
              rows={4}
              placeholder="What's on your mind? (You'll appear as anonymous)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all duration-300"
            />
            <button 
              type="submit"
              className="mt-4 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Share Anonymously
            </button>
          </form>
        </div>

        <div className="wall-feed mt-8">
          <h3 className="wall-subheading text-xl font-semibold text-gray-800 mb-6">Community Positivity Wall</h3>
          {posts.map((post) => (
            <div key={post._id} className="wall-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
              <div className="wall-header flex justify-between items-center mb-4">
                <span className="wall-author text-gray-600">🕊️ Anonymous</span>
                <span className="wall-time text-sm text-gray-500">Just now</span>
              </div>
              <p className="wall-message text-gray-700">{post.message}</p>

              <hr className="wall-divider my-4 border-gray-200" />

              <div className="comment-section">
                <h4 className="comment-title text-lg font-semibold text-gray-800 mb-4">Comments</h4>
                {post.comments?.map((c, i) => (
                  <div key={i} className="comment-item bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 mb-3 text-gray-700">
                    🗨️ {c.comment}
                  </div>
                ))}
                <div className="comment-input flex gap-2 mt-4">
                  <input
                    type="text"
                    placeholder="Write a kind reply..."
                    value={commentInputs[post._id] || ''}
                    onChange={(e) =>
                      setCommentInputs({ ...commentInputs, [post._id]: e.target.value })
                    }
                    className="flex-1 p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all duration-300"
                  />
                  <button 
                    onClick={() => handleComment(post._id)}
                    className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SupportWall;
