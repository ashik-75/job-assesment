import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="space-y-3">
        <h1 className="text-pink-500 font-medium">400</h1>
        <p className="text-3xl font-extrabold text-gray-800">Page Not Found</p>

        <div>
          <Link className="underline underline-offset-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
