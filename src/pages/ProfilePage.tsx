import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Profile from "../components/Profile";
import useUser from "../hooks/useUser";

function ProfilePage() {
  const { userId } = useParams();
  const [user, data, loading, error] = useUser(parseInt(userId!));

  return (
    <div className="p-5">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : (
          <Profile user={user} posts={data?.posts} />
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
