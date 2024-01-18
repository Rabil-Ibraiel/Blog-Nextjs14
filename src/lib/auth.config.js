export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {

    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnCreatePost = request.nextUrl?.pathname.startsWith("/addPost");

      if (isOnBlogPage && !user) {
        return false;
      }

      if (isOnCreatePost && !user) {
        return false
      }

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
