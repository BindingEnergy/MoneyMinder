import './App.css';
import Landing from './Pages/Landing/Landing'; // importing landing page component
import SignIn from './Components/SignIn/SignIn'; // importing signIn page component
import Dashboard from './Pages/Dashboard/Dashboard'; // importing dashboard component
import Expenses from './Pages/Dashboard/Expenses'; // import your expenses component
import Income from './Pages/Dashboard/Income'; // import your upgrade component
import Subscription from './Pages/Dashboard/Subscription';
import DashboardContents from './Pages/Dashboard/DashboardContents';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import { useGlobalContext } from './context/globalContext';
import DashboardNew from './Pages/Dashboard/DashboardNew';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <SignedIn>
            <Dashboard />
          </SignedIn>
        }
      >
        {/* Nested Routes inside Dashboard */}
        <Route path="subscription" element={<Subscription/>} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="income" element={<Income />} />
        <Route path="/dashboard" element={<DashboardNew/>} />
      </Route>
    </>
  )
);

function App() {
  const global = useGlobalContext()
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
