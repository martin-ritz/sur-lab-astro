import type { APIRoute } from "astro";

//run on every request, not only at build time
export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ now: Date.now() }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", //never serve old answer
    },
  });
};