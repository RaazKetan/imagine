import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'],
  ignoredRoutes: ["/((?!api|trpc).*)", "/(?!\\.[\\w]+$|_next).*"],
});
