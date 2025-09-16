import { Posts } from "./Posts";

// This fetch runs on the server and is mocked by `setupServer`
async function getUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}

export default async function Home() {
  const user = await getUser();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>MSW in Next.js App Router</h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      >
        <h2>Data from a Server Component</h2>
        <p>This data was fetched on the server.</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>

      {/* This component will fetch data on the client */}
      <Posts />
    </main>
  );
}
