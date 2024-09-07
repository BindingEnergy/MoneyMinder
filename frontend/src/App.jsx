import './App.css';
import Landing from './Pages/Landing/Landing'; //importing landing page component
import SignIn from './Components/SignIn/SignIn'; //importing signIn page component
import Dashboard from './Pages/Dashboard/Dashboard'; //importing dashboard component
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import { SignedIn,SignedOut } from '@clerk/clerk-react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/dashboard' element={
        <div>
          <SignedIn>
            <Dashboard/>
          </SignedIn>
          <SignedOut>
            <SignIn/>
          </SignedOut>
        </div>

      }/>
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