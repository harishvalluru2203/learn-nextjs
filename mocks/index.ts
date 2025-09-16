async function initMocks() {
  console.log("INIT MOCKS");
  console.log("typeof window: ", typeof window);

  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    console.log("BROWSER");
    const { worker } = await import("./browser");
    worker.start();
  }
}

initMocks();

export {};
