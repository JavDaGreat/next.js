export default async function GetUser(userId: string) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!resp.ok) return undefined;

  return resp.json();
}
