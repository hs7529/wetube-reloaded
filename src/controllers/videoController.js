export const trending = (req, res) => {
  res.render("video/trending", { pageTitle: "Trending Videos" });
};
export const watch = (req, res) => {
  res.render("video/watch", { pageTitle: "Video Watch" });
};
export const edit = (req, res) => {
  res.render("video/edit", { pageTitle: "Video Edit" });
};
export const remove = (req, res) => {
  res.render("video/remove", { pageTitle: "Video Remove" });
};
