import { useEffect, useState } from "react";
import { IUser } from "../models/usersData";
import axios from "axios";

interface useUsers {
  baseUrl: string;
  pagination?: {
    page?: number;
    limit?: number;
    email?: string;
  };
}

export const useUsers = ({ baseUrl, pagination }: useUsers) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = new URLSearchParams();

  if (pagination) {
    if (pagination.page) {
      params.append("page", pagination.page.toString());
    }
    if (pagination.limit) {
      params.append("limit", pagination.limit.toString());
    }
    if (pagination.email) {
      params.append("email", pagination.email);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    axios(`${baseUrl}?${params.toString()}`)
      .then((res) => {
        setUsers(res.data.body.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [baseUrl, params]);

  return { users, isLoading, error };
};
