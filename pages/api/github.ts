import { type NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge'
};

export default async function handler(req: NextRequest) {
  const followersResponse = await fetch(
    'https://api.github.com/users/TiagoPereira06/followers'
  );

  const followers = await followersResponse.json();

  const followersCount = followers.length;

  return new Response(
    JSON.stringify({
      followersCount: followersCount
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600'
      }
    }
  );
}
