/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
import './Theme.css';
import React, { useState, useEffect } from 'react';

function Welcome() {
  const [photoData, setPhotoData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPhotoData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=rvPwdMg8wKYuThGawmTfauaSbgid0Gz2HNr4TFY6'
        );
        setPhotoData(response.data);
      } catch (error) {
        setError(true);
        console.error('Error fetching NASA Photo of the Day:', error);
      }
    };

    fetchPhotoData();
  }, []);

  if (error) {
    return (
      <div className="section dark">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  if (!photoData) {
    return (
      <div className="section dark">
        <p className="welcome-subheading">Loading NASA Photo of the Day...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="section dark">
        <p className="welcome-subheading">Before exploring my page, explore the beauty of space with NASA's Photo of the Day</p>
      </div>
      <div className="section gray">
        <div className="nasa-container">
          {/* NASA Photo/Video and Description */}
          <div className="nasa-media-container">
            <div className="nasa-media">
              {photoData.media_type === 'image' ? (
                <img
                  src={photoData.url}
                  alt={`NASA Photo of the Day: ${photoData.title}`}
                  className="nasa-photo"
                />
              ) : photoData.media_type === 'video' ? (
                <iframe
                  src={photoData.url}
                  title={photoData.title}
                  className="nasa-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>Unsupported media type: {photoData.media_type}</p>
              )}
            </div>
            <div className="nasa-description">
              <h3>{photoData.title}</h3>
              <p>Date: {photoData.date}</p>
              <p>{photoData.explanation}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section dark">
      </div>
    </div>
  );
}

export default Welcome;
