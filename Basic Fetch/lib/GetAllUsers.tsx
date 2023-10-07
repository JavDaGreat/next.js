export default async function GetAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) return undefined;

  return res.json();
}
