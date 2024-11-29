import React, { useState } from "react";

const FeedForm = ({ onAddFeed }) => {
  const [feed, setFeed] = useState({ title: "", content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feed.title && feed.content) {
      onAddFeed(feed); // Mengirim data feed ke fungsi di parent
      setFeed({ title: "", content: "" }); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={feed.title}
          onChange={(e) => setFeed({ ...feed, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          className="form-control"
          value={feed.content}
          onChange={(e) => setFeed({ ...feed, content: e.target.value })}
          rows={3}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success">
        Add Feed
      </button>
    </form>
  );
};

export default FeedForm;
