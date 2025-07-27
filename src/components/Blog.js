import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://portfolio-wp.local/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, textAlign: "center" }}>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: 40 }}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          {/* ✅ Show only excerpt */}
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}