import './App.css';
import Landing from './Pages/Landing/Landing'; // importing landing page component
import SignIn from './Components/SignIn/SignIn'; // importing signIn page component
import Dashboard from './Pages/Dashboard/Dashboard'; // importing dashboard component
import Budgets from './Pages/Dashboard/Budgets'; // import your budgets component
import Expenses from './Pages/Dashboard/Expenses'; // import your expenses component
import Upgrade from './Pages/Dashboard/Upgrade'; // import your upgrade component
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

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
        <Route path="budgets" element={<Budgets />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="upgrade" element={<Upgrade />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
