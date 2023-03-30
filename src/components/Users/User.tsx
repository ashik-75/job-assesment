import { Link } from "react-router-dom";
import { UserType } from "../../types/user.types";

function User({ firstName, lastName, company, email, id }: UserType) {
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{email}</p>
      <Link
        to={`/user/${id}/posts`}
        className="font-medium underline underline-offset-2"
      >
        View Profile
      </Link>
    </div>
  );
}

export default User;
