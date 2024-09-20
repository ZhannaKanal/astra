export default defineNuxtRouteMiddleware((to, from) => {
  // !isValidToken(localStorage['ACCESS_TOKEN'])
  if (to.name === "profile" && !localStorage["ACCESS_TOKEN"]) {
    return navigateTo({ name: "login" });
  }
});
