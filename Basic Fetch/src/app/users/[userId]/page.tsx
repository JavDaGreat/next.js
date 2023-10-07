import GetUser from "../../../../lib/GetUser";
import GetUsersPost from "../../../../lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import GetAllUsers from "../../../../lib/GetAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = GetUser(userId);
  const user = await userData;
  if (!user?.name) {
    return {
      title: "User not Found",
    };
  }
  return {
    title: user.name,
    description: `this is the page of ${user.name}`,
  };
}
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = GetUser(userId);
  const userPostsData: Promise<Post[]> = GetUsersPost(userId);
  const user = await userData;
  // const [user, userposts] = await Promise.all([userData, userPostsData]);
  if (!user?.name) {
    return notFound();
  }
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
export async function generateStaticParams() {
  const usersData: Promise<User[]> = GetAllUsers();
  const users = await usersData;
  return users.map((user) => ({ userId: user.id.toString() }));
}
