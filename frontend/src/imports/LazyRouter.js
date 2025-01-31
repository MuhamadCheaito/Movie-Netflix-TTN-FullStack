import React, { lazy } from "react";
export const Home = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Home/Home")), 2000);
  });
});
export const Welcome = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Welcome/Welcome")), 2000);
  });
});
export const Login = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Authentication/Login")), 1000);
  });
});
export const LoginAdmin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Admins/LoginAdmin")), 1000);
  });
});
export const Admin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Admins/Admin")), 1000);
  });
});
export const ProfileAdmin = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("../Page/Admins/ProfileAdmin")), 1000);
  });
});

