import { UserType } from "../../types/user.types";
import User from "./User";
function Users({ users }: { users: UserType[] }) {
  return (
    <div className="space-y-5">
      {users?.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default Users;
