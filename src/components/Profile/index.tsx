import { PostType } from "../../types/post.types";
import { UserType } from "../../types/user.types";
import Post from "./Post";

function Profile({ user, posts }: { user: UserType; posts: PostType[] }) {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-bold text-lg">Account</h1>
        <h1 className="font-medium">
          {user?.firstName} {user?.lastName}
        </h1>
        <p>{user?.email}</p>
      </div>

      <div className="max-w-3xl">
        <h1 className="font-bold text-2xl font-mont mb-5">Posts ...</h1>
        <div className="space-y-2">
          {posts?.length > 0 ? (
            posts?.map((post) => <Post key={post.id} {...post} />)
          ) : (
            <div>Posts Not Found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
