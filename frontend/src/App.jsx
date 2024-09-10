import './App.css';
import Landing from './Pages/Landing/Landing'; // importing landing page component
import SignIn from './Components/SignIn/SignIn'; // importing signIn page component
import Dashboard from './Pages/Dashboard/Dashboard'; // importing dashboard component
import Budgets from './Pages/Dashboard/Budgets'; // import your budgets component
import Expenses from './Pages/Dashboard/Expenses'; // import your expenses component
import Income from './Pages/Dashboard/Income'; // import your upgrade component
import DashboardContents from './Pages/Dashboard/DashboardContents';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import Orb from './Components/Orb/Orb';
import { useGlobalContext } from './context/globalContext';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <SignedIn>
            <Orb/>
            <Dashboard />
          </SignedIn>
        }
      >
        {/* Nested Routes inside Dashboard */}
        <Route path="budgets" element={<Budgets />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="income" element={<Income />} />
        <Route path="/dashboard" element={<DashboardContents/>} />
      </Route>
    </>
  )
);

function App() {
  const global = useGlobalContext()
  console.log(global);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
