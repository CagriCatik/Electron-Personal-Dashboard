// src/pages/Home.js
import React from "react";
import "../styles/Management.css"; // Import custom styles
import {
    FaAppStore,
    FaChrome,
    FaImage,
    FaMusic,
    FaFilm,
    FaFilePowerpoint,
    FaFileAlt,
    FaFolderOpen,
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaLinkedin,
    FaYoutube,
    FaInstagram,
    FaReddit,
    FaMedium
  } from "react-icons/fa";
  



function Home() {
  return (
    <div className="home-container">
      {/* App Icons Section */}
      <section className="app-icons">
        <h2>Open Local Files</h2>
        <div className="icons-grid">
          <a
            href="file:///C:/Program%20Files/YourApp/YourApp.exe"
            className="icon-link"
          >
            <FaAppStore size={40} />
            <span>Open App</span>
          </a>
          <a
            href="file:///C:/Users/YourUsername/Documents/YourFile.pdf"
            className="icon-link"
          >
            <FaChrome size={40} />
            <span>Open Document</span>
          </a>
          <a
            href="file:///C:/Users/YourUsername/Downloads/ImageFile.jpg"
            className="icon-link"
          >
            <FaImage size={40} />
            <span>Open Image</span>
          </a>
          <a
            href="file:///C:/Users/YourUsername/Music/MySong.mp3"
            className="icon-link"
          >
            <FaMusic size={40} />
            <span>Play Music</span>
          </a>
          <a
            href="file:///C:/Users/YourUsername/Videos/MyVideo.mp4"
            className="icon-link"
          >
            <FaFilm size={40} />
            <span>Play Video</span>
          </a>
          <a
            href="file:///C:/Users/YourUsername/Documents/MyPresentation.pptx"
            className="icon-link"
          >
            <FaFilePowerpoint size={40} />
            <span>Open Presentation</span>
          </a>
          <a
            href="file:///C:/Windows/System32/notepad.exe"
            className="icon-link"
          >
            <FaFileAlt size={40} />
            <span>Open Notepad</span>
          </a>
          <a
            href="file:///C:/Users/YourUsername/Desktop/MyFolder"
            className="icon-link"
          >
            <FaFolderOpen size={40} />
            <span>Open Folder</span>
          </a>
        </div>
      </section>

      {/* Webpage URLs Section */}
      <section className="webpage-icons">
        <h2>Open Webpages</h2>
        <div className="icons-grid">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub size={40} />
            <span>GitHub</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaTwitter size={40} />
            <span>Twitter</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaFacebook size={40} />
            <span>Facebook</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin size={40} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaYoutube size={40} />
            <span>YouTube</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaInstagram size={40} />
            <span>Instagram</span>
          </a>
          <a
            href="https://reddit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaReddit size={40} />
            <span>Reddit</span>
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaMedium size={40} />
            <span>Medium</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
