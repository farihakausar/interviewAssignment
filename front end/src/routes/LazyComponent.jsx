import { Suspense, lazy } from "react";
import Loading from "../components/loading/Loading";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";
import NetworkErrorFallback from "../pages/error/ErrorFallback";

const componentMap = {
  // auth
  "/login": lazy(() => import("../pages/auth/Login")),
  "/signup": lazy(() => import("../pages/auth/Signup")),
 

  // dashboard
  "/": lazy(() => import("../pages/dashboard/Dashboard")),
  "/doctorDirectory": lazy(() => import("../pages/dashboard/DoctorDirectory")),
  "/doctorManagement": lazy(() => import("../pages/dashboard/DoctorManagement")),
  "/manageAppointments": lazy(() => import("../pages/dashboard/ManageAppointments")),
  // performance
"/myAppointments": lazy(() => import("../pages/dashboard/MyAppointments")),


};

const LazyComponent = ({ path }) => {
  const Component = componentMap[path];
  if (!Component) {
    return <div>Component not found</div>;
  }
  return (
    <ErrorBoundary FallbackComponent={NetworkErrorFallback}>
      <Suspense fallback={<Loading />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};
LazyComponent.propTypes = {
  path: PropTypes.string,
};
export default LazyComponent;
