import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://public-api.wordpress.com/wp/v2/sites/odimasharon.wordpress.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: 20 }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>My Blog</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              //border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              background:"rgba(45, 45, 45, 0.9)",
            }}
          >
            <h1
              style={{ textAlign: "center", fontSize: "20px" }} 
              dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
            />
            <p
              style={{ fontSize: "16px", fontWeight: "normal" }}
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}