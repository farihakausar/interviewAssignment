import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import OfflineNavigator from "./pages/error/OfflineNavigator";

function App() {
  return (
    <div>
      <OfflineNavigator />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
