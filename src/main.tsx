import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { router } from "./App";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
