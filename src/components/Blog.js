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
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "40px", fontWeight: "bold",
            fontFamily: "cursive",
            textShadow: `
              0 0 5px #facc15,
              0 0 10px #facc15,
              0 0 20px rgb(255, 25, 0),
              0 0 40px orange
            `
         }}>My Blog</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: "8px",
              padding: "15px",
              background: "rgba(45, 45, 45, 0.9)",
              height: "100%",
            }}
          >
            <div>
              <h1
                style={{ textAlign: "center", fontSize: "20px" }}
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p
                style={{ fontSize: "16px", fontWeight: "normal", marginTop: "10px" }}
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </div>

            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
              style={{
                marginTop: "20px",
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}