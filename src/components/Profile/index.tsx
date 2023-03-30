import { PostType } from "../../types/post.types";
import { UserType } from "../../types/user.types";
import Post from "./Post";

function Profile({ user, posts }: { user: UserType; posts: PostType[] }) {
  return (
    <div className="space-y-5">
      <div>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <p>{user.email}</p>
      </div>

      <div>
        <h1 className="font-bold text-2xl font-mont">Posts</h1>
        <div className="space-y-2">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
