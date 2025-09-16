"use client";
import { useEffect, useState } from "react";

export default function MswWorker({ children }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    async function initMocks() {
      if (typeof window !== "undefined" && process.env.MSW_ENABLED) {
        const { worker } = await import("../mocks/browser");
        await worker.start();
        setMswReady(true);
      }
    }

    if (!mswReady) {
      initMocks();
    }
  }, [mswReady]);

  if (!mswReady && process.env.MSW_ENABLED) {
    return null; // Or a loading spinner
  }

  return children;
}
