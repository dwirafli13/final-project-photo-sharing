import { useEffect, useState } from "react";
import { loggedUserData } from "../api/data";

const useLoggedUser = () => {
  const [loggedUser, setLoggedUser] = useState([]);

  const getLoggedUser = () => {
    loggedUserData()
      .then((res) => {
        const data = res?.data?.data;
        setLoggedUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLoggedUser();
  }, []);
  return { loggedUser };
};

export default useLoggedUser;
