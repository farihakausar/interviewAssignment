import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const deleteUser = async ({ uid, collection }) => {
  const url = "https://deleteuser-qark55cbva-uc.a.run.app/";
  const response = await axios.delete(url, {
    data: { uid, collection },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const useDelete = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};

export default useDelete;
