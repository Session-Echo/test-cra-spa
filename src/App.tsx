import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { ImportantForm } from "./ImportantForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "products",
        element: <div>Prodcts</div>,
      },
      {
        path: "pricing",
        element: <ImportantForm />,
      },
      {
        path: "blog",
        element: <div>Blog</div>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <>
        <RouterProvider router={router} />
      </>
    </div>
  );
}

export default App;
