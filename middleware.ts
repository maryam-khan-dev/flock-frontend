import { auth } from "@/auth";

export const config = {
  matcher: "/((?!$))",
};
export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/unauthorized", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
