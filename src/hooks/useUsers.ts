import axios from "axios";
import { useEffect, useState } from "react";
import { UsersResponseType } from "../types/user.types";

function useUsers() {
  const [data, setData] = useState<UsersResponseType>({} as UsersResponseType);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsersData() {
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

    fetchUsersData();
  }, []);
  return [data, loading, error] as [UsersResponseType, boolean, string | null];
}

export default useUsers;
