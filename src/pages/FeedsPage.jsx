import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FeedForm from "../components/FeedForm";

const FeedsPage = () => {
  const [feeds, setFeeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
    const savedFeeds = JSON.parse(localStorage.getItem("feeds")) || [];
    setFeeds(savedFeeds);
  }, [navigate]);

  const handleAddFeed = (newFeed) => {
    const updatedFeeds = [...feeds, { id: Date.now(), ...newFeed }];
    setFeeds(updatedFeeds);
    localStorage.setItem("feeds", JSON.stringify(updatedFeeds));
  };

  const handleDeleteFeed = (id) => {
    const updatedFeeds = feeds.filter((feed) => feed.id !== id);
    setFeeds(updatedFeeds);
    localStorage.setItem("feeds", JSON.stringify(updatedFeeds));
  };

  return (
    <div className="feeds-page container">
      <h1 className="text-center my-4">Feeds</h1>

      {/* Form Input */}
      <FeedForm onAddFeed={handleAddFeed} />

      {/* Feeds List */}
      <div className="row">
        {feeds.map((feed) => (
          <div className="col-md-6 mb-4" key={feed.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{feed.title}</h5>
                <p className="card-text">{feed.content}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteFeed(feed.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedsPage;
