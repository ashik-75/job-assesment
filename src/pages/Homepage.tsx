import Error from "../components/Error";
import Loader from "../components/Loader";
import Users from "../components/Users";
import useUsers from "../hooks/useUsers";

function Homepage() {
  const [data, loading, error] = useUsers();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (data?.users && !data?.users?.length) {
    return <div>Users not found</div>;
  }

  return <Users users={data.users} />;
}

export default Homepage;
