import './App.css';
import Landing from './Pages/Landing/Landing'; //importing landing page component
import SignIn from './Components/SignIn/Signin'; //importing signIn page component
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
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