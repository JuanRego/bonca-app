import app from "../../Services/api.js";
import { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@leilao user")) || false
  );
  const [userOperations, setUserOperations] = useState([]);

  const history = useHistory();

  const handleListOneUser = (id) => {
    app
      .get(`/user/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (email, password) => {
    app
      .post("users/login/", {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem(
          "@leilao Token",
          JSON.stringify(response.data.AccessToken)
        );
        localStorage.setItem(
          "@leilao user",
          JSON.stringify(response.data.user)
        );
        setUser(response.data.user);
        history.push("/");
      })
      .catch((error) => console.log({ ...error }));
  };

  const handleLogOut = () => {
    localStorage.removeItem("@leilao Token");
    localStorage.removeItem("@leilao user");
    setUser(false);
    history.push("/");
  };

  const handleRegister = ({ name, email, cellphone, cpf, password }) => {
    app
      .post(
        "users/register",
        {
          name,
          email,
          cellphone,
          cpf,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userOperations,
        handleLogin,
        handleLogOut,
        handleListOneUser,
        handleRegister,
        setUserOperations,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
