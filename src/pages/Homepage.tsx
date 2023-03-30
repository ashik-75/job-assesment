import Users from "../components/Users";
import useUsers from "../hooks/useUsers";

function Homepage() {
  const [data, loading, error] = useUsers();

  return (
    <div className="p-5">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div>Loading ...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Users users={data.users} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
