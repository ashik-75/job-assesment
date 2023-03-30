import { useParams } from "react-router-dom";
import Profile from "../components/Profile";
import useUser from "../hooks/useUser";

function ProfilePage() {
  const { userId } = useParams();
  const [user, data, loading, error] = useUser(parseInt(userId!));

  console.log("POSTS: ", data);
  return (
    <div className="p-5">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div>Loading ....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Profile user={user} posts={data?.posts || []} />
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
