import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home }  from "../pages/Home";
import { PostDetail } from "../pages/PostDetail";
import { LoginScreen } from "../pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout></DefaultLayout>}>
        <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/:id" element={<PostDetail></PostDetail>}></Route>
      </Route>
    </Routes>
  );
}
