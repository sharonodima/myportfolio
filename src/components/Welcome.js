/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios';
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
      <div className="section dark text-center text-red-400">
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }

  if (!photoData) {
    return (
      <div className="section dark text-center">
        <p className="text-yellow-400 text-2xl font-bold">
          Loading NASA Photo of the Day...
        </p>
      </div>
    );
  }

  return (
    <div className="py-10">
      {/* Title */}
      <div className="max-w-5xl mx-auto px-4">
       <h2
          className="text-4xl text-yellow-400 text-center mb-8 glow"
          style={{
            fontFamily: "Poppins",
            textShadow: `
              0 0 5px #facc15,
              0 0 10px #facc15,
              0 0 20px rgb(255, 25, 0),
              0 0 40px orange
            `
          }}
        >
          BEFORE EXPLORING MY PAGE, EXPLORE THE BEAUTY OF SPACE WITH NASA'S PHOTO OF THE DAY
       </h2>
      </div>

      {/* NASA Media Card */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[rgba(45,45,45,0.9)] p-6 rounded-lg shadow-lg text-center">
          <div className="mb-6">
            {photoData.media_type === 'image' ? (
              <img
                src={photoData.url}
                alt={`NASA Photo of the Day: ${photoData.title}`}
                className="rounded mx-auto max-w-full"
              />
            ) : photoData.media_type === 'video' ? (
              <iframe
                src={photoData.url}
                title={photoData.title}
                className="w-full max-h-[500px] rounded"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="text-red-400">Unsupported media type: {photoData.media_type}</p>
            )}
          </div>

          <h3 className="text-yellow-400 text-lg font-semibold mb-2">{photoData.title}</h3>
          <p className="text-gray-300 text-sm mb-4">Date: {photoData.date}</p>
          <p className="text-gray-200 leading-relaxed">{photoData.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;