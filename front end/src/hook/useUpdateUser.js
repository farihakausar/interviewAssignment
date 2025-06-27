import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const updateUser = async ({ uid, collection, ...userData }) => {
  if (!uid || !collection) {
    throw new Error("UID and collection name are required");
  }

  const response = await axios.post(
    "https://updateuser-qark55cbva-uc.a.run.app",
    {
      uid,
      collection,
      ...userData,
    }
  );
  return response.data;
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateUser,
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });
};
