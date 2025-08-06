import { useState, useEffect } from 'react';
import axios from 'axios';
import linkedin from '../linkedin.jpeg';
import github from '../github.png';
import website from '../website.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    try {
      await axios.post('https://portfolio-backend-vc9x.onrender.com/api/contact', formData);
      setStatusMessage('Thanks for your message. I will be in touch as soon as possible.');
      setFormData({ name: '', email: '', message: '' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatusMessage('Oops! Something went wrong.');
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <h2
      className="font-bold text-yellow-400 text-center mb-8 drop-shadow-md"
      style={{ fontSize: "40px",
            fontFamily: "cursive",
            textShadow: `
              0 0 5px #facc15,
              0 0 10px #facc15,
              0 0 20px rgb(255, 25, 0),
              0 0 40px orange
            `
            }}
    >
      CONTACT ME
    </h2>

      <div className="bg-[rgba(45,45,45,0.95)] p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="text-center text-white mb-6 space-y-2">
          <p className="text-lg font-semibold">Email:</p>
          <a href="mailto:odimasharon@gmail.com" className="text-blue-400 hover:underline block">
            odimasharon@gmail.com
          </a>
          <p className="text-lg font-semibold">Phone:</p>
          <a href="tel:+19197033335" className="text-blue-400 hover:underline block">
            +1 919-703-3335
          </a>
        </div>

        <div className="flex justify-center gap-5 mb-6">
          <a href="https://www.linkedin.com/in/sharonodima" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/sharonodima" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://sharonodima.github.io/myportfolio/" target="_blank" rel="noopener noreferrer">
            <img src={website} alt="Website" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 rounded border-2 border-blue-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 rounded border-2 border-blue-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-2 rounded border-2 border-blue-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>

        {statusMessage && (
          <p className="text-green-400 font-semibold mt-4 text-center">{statusMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;