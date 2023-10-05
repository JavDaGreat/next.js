export default async function GetUser(userId: string) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!resp.ok) throw new Error("failed to fetch user");

  return resp.json();
}
