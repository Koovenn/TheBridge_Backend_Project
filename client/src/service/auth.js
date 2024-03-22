import api from "./api";

const postLogin = async ({ username, password }) => {
  const { data } = await api.post("/auth/login", {
    username,
    password,
  });
  return data;
};

const postRegister = async ({ username, password }) => {
  const { data } = await api.post("/auth/register", {
    username,
    password,
  });
  return data;
};

const isUserLoggedIn = async () => {
  const { data } = await api.get("/auth/logged-in");
  return data;
}

export { postLogin, postRegister, isUserLoggedIn };
