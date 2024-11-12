export const join = (req, res) => {
  res.render("user/join", { pageTitle: "User join" });
};
export const login = (req, res) => {
  res.render("user/login", { pageTitle: "User Login" });
};
export const edit = (req, res) => {
  res.render("user/edit", { pageTitle: "User Edit" });
};
export const remove = (req, res) => {
  res.render("user/remove", { pageTitle: "User Remove" });
};
