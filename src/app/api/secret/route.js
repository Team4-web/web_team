import { NextRequest } from 'next/server';
import { withAuth } from '@/lib/with-auth';
 
async function secretGET(Request) {
  return new Response(JSON.stringify({ secret: 'Here be dragons' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
 
export const GET = withAuth(secretGET);