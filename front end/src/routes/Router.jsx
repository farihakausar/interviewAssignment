import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/Layout";
import LazyComponent from "./LazyComponent";
import ErrorScreen from "../pages/error/ErrorScreen";
// import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <AppLayout />
      // </PrivateRoute>
    ),
    errorElement: <ErrorScreen />,
    children: [
   
      {
        path: "/",
        element: <LazyComponent path="/" />,
      },
      {
        path: "doctorDirectory",
        element: <LazyComponent path="/doctorDirectory" />,
      },
      {
        path: "doctorManagement",
        element: <LazyComponent path="/doctorManagement" />
      },
      {
        path: "manageAppointments",
        element: <LazyComponent path="/manageAppointments" />
      },
      // performance route
      {
        path: "myAppointments",
        element: <LazyComponent path="/myAppointments" />
      },
     
      // settings
    ],
  },
  // auth route
  {
    path: "/login",
    element: <LazyComponent path="/login" />,
  },
  {
    path: "/signup",
    element: <LazyComponent path="/signup" />,
  },
 
]);
