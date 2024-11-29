import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminFeedsPage = () => {
  const [feeds, setFeeds] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingFeedId, setEditingFeedId] = useState(null);

  // Fetch feeds from server
  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await axios.get("http://localhost:5000/feeds");
        setFeeds(response.data);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    };
    fetchFeeds();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingFeedId) {
        // Update feed
        await axios.put(`http://localhost:5000/feeds/${editingFeedId}`, {
          title,
          content,
        });
      } else {
        // Create new feed
        await axios.post("http://localhost:5000/feeds", { title, content });
      }
      setTitle("");
      setContent("");
      setEditingFeedId(null);
      const response = await axios.get("http://localhost:5000/feeds");
      setFeeds(response.data);
    } catch (error) {
      console.error("Error saving feed:", error);
    }
  };

  // Handle delete feed
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/feeds/${id}`);
      setFeeds(feeds.filter((feed) => feed.id !== id));
    } catch (error) {
      console.error("Error deleting feed:", error);
    }
  };

  // Handle edit feed
  const handleEdit = (feed) => {
    setTitle(feed.title);
    setContent(feed.content);
    setEditingFeedId(feed.id);
  };

  return (
    <div className="admin-feeds-page">
      <h1 className="text-center my-4">Manage Feeds</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Content</label>
          <textarea
            className="form-control"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {editingFeedId ? "Update Feed" : "Create Feed"}
        </button>
      </form>

      <h2>Existing Feeds</h2>
      <ul className="list-group">
        {feeds.map((feed) => (
          <li key={feed.id} className="list-group-item d-flex justify-content-between">
            <div>
              <h5>{feed.title}</h5>
              <p>{feed.content}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(feed)}
                className="btn btn-sm btn-warning me-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(feed.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminFeedsPage;
