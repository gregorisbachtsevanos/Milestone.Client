import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./.config/theme";
import { GlobalStyles } from "./assets/styles/global.styled";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
