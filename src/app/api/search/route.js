export function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
 
  return new Response(
    JSON.stringify({ result: `You searched for: ${query}` }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}