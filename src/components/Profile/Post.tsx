import { PostType } from "../../types/post.types";

function Post({ body, title, userId, id }: PostType) {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-700">{title}</h1>
      <p className="text-sm text-gray-600 ">{body}</p>
    </div>
  );
}

export default Post;
