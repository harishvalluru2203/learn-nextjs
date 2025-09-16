"use client";

import { useState, useEffect } from "react";

export function Posts() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This fetch runs in the browser and is mocked by `setupWorker`
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}
    >
      <h2>Data from a Client Component 2</h2>
      <p>This data was fetched in the browser.</p>
      {loading && <p>Loading posts...</p>}

      {posts && <pre>{JSON.stringify(posts, null, 2)}</pre>}
    </div>
  );
}
