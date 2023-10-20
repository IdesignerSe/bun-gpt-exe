
const server = Bun.serve({
    hostname: "localhost",
    port: 4000,
    fetch: fetchHandler,
  });

  console.log(
    `Chat GPT Clone using Bun is running on ${server.hostname}:${server.port}`
  );

  function fetchHandler (request: Request): Response {
    return new Response(Bun.file("imdex.html"))

  }
