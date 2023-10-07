export default async function GetUsersPost(userId: string) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 120 } }
  );
  if (!resp.ok) return undefined;

  return resp.json();
}
