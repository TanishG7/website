import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog">
      <header className="blog-header">
        <h1>Blog</h1>
      </header>
      <section className="blog-content">
        {/* Sample Blog Post Links */}
        <div className="blog-post">
          <h2><Link to="/blog/1">Building a Sustainable Future</Link></h2>
          <p>Learn about our efforts in sustainable building practices...</p>
        </div>
        <div className="blog-post">
          <h2><Link to="/blog/2">Top 10 Home Design Trends</Link></h2>
          <p>Explore the latest trends in home design...</p>
        </div>
        {/* Add more blog post links as needed */}
      </section>
    </div>
  );
};

export default Blog;
