import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"), 
  route("/home", "routes/home.tsx"), 
  route("/auth", "routes/auth.tsx"),
  route("/howitworks", "components/HowItWorks.tsx"),
  route("/upload", "routes/upload.tsx"),
  route("/resume/:id", "routes/resume.tsx"),
  route("/wipe", "routes/wipe.tsx"),
] satisfies RouteConfig;
