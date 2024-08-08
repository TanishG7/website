import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  
  // Sample blog content based on ID
  const blogContent = {
    1: {
      title: 'Building a Sustainable Future',
      content: 'At Onyx Constructions, we believe in sustainable building practices. We use eco-friendly materials and focus on energy-efficient designs...'
    },
    2: {
      title: 'Top 10 Home Design Trends',
      content: 'The latest trends in home design include open floor plans, smart home technology, and sustainable materials...'
    }
  };

  return (
    <div className="blog-post">
      <header className="blog-post-header">
        <h1>{blogContent[id]?.title}</h1>
      </header>
      <section className="blog-post-content">
        <p>{blogContent[id]?.content}</p>
      </section>
    </div>
  );
};

export default BlogPost;
