import Error from "../components/Error";
import Loader from "../components/Loader";
import Users from "../components/Users";
import useUsers from "../hooks/useUsers";

function Homepage() {
  const [data, loading, error] = useUsers();

  return (
    <div className="p-5">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : (
          <Users users={data?.users} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
