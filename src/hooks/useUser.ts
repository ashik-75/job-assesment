import axios from "axios";
import { useEffect, useState } from "react";
import { PostResponse } from "../types/post.types";
import { UserType } from "../types/user.types";

function useUser(userId: number) {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [data, setData] = useState<PostResponse>({} as PostResponse);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const userResponse = await axios.get(
          `https://dummyjson.com/users/${userId}`
        );
        const postsResponse = await axios.get(
          `https://dummyjson.com/users/${userId}/posts`
        );
        setLoading(false);

        // filled state
        setUser(userResponse.data);
        setData(postsResponse.data);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          setError(error.response?.data);
        } else {
          setError("Something went Wrong");
        }
      }
    }

    fetchData();
  }, []);
  return [user, data, loading, error] as [
    UserType,
    PostResponse,
    boolean,
    string | null
  ];
}

export default useUser;
