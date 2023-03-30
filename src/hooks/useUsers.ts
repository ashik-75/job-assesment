import axios from "axios";
import { useEffect, useState } from "react";
import { UserResponse } from "../types/user.types";

function useUsers() {
  const [data, setData] = useState<UserResponse>({} as UserResponse);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setLoading(false);
        setData(response.data);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          setError(error.response?.data);
        } else {
          setError("Something went Wrong");
        }
      }
    }

    fetchUsers();
  }, []);
  return [data, loading, error] as [UserResponse, boolean, string | null];
}

export default useUsers;
