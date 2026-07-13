let serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("./server-BTmofNUn.mjs").then((n) => n.s).then(
      (m) => m.default ?? m
    );
  }
  return serverEntryPromise;
}
const server = {
  async fetch(request, env, ctx) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return response;
    } catch (error) {
      console.error("SSR error:", error);
      return new Response("Internal Server Error", {
        status: 500,
        headers: { "content-type": "text/plain" }
      });
    }
  }
};
export {
  server as default
};
