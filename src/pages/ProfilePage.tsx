import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Profile from "../components/Profile";
import useUser from "../hooks/useUser";

function ProfilePage() {
  const { userId } = useParams();
  const [user, data, loading, error] = useUser(parseInt(userId!));

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return <Profile user={user} posts={data?.posts} />;
}

export default ProfilePage;
