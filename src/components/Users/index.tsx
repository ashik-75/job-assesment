import { UserType } from "../../types/user.types";
import User from "./User";
function Users({ users }: { users: UserType[] }) {
  return (
    <>
      <h1 className="font-bold text-2xl mb-5">Users...</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {users?.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </>
  );
}

export default Users;
