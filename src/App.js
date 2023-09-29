import Login from "./Components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import SignUp from "./Components/SignUp";
import TeacherRegistration from "./Components/TeacherRegistration";
import StudentRegister from "./Components/StudentRegister";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "SignUp",
          element: <SignUp />,
        },
        {
          path: "SignUp/Teacher",
          element: <TeacherRegistration />,
        },
        {
          path: "SignUp/Student",
          element: <StudentRegister />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
