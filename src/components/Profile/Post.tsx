import { PostType } from "../../types/post.types";

function Post({ body, title, userId, id }: PostType) {
  return (
    <div>
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="text-sm ">{body}</p>
    </div>
  );
}

export default Post;
