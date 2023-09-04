import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "./lib/Router";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { LoginScreen } from "./pages/Login";
import { PostDetail } from "./pages/PostDetail";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout></DefaultLayout>}>
            <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
            <Route path="/:id" element={<PostDetail></PostDetail>}></Route>
          </Route>
          <Route path="/home" element={<DefaultLayout></DefaultLayout>}>
            <Route path="/home" element={<Home></Home>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
