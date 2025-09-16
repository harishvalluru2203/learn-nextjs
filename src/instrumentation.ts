export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs" && process.env.MSW_ENABLED) {
    const { server } = await import("../mocks/server");
    server.listen();
  }
}
