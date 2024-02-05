import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './layouts/Main';
import Index from './pages/Index';
import Blog from './pages/Blog';
import About from './pages/About';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Fullstack from './components/Fullstack';
import BlogDetails from './pages/BlogDetails';
import HeaderMain from './layouts/HeaderMain';
import Dashboard from './admin/Dashboard';
import Post from './admin/Post';
import CreatePost from './admin/CreatePost';
import Login from './admin/Login';
import axios from 'axios';
import EditPost from './admin/EditPost';
axios.defaults.baseURL = "http://localhost:8000/";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Index   />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/frontend",
          element: <Frontend />,
        },
        {
          path: "/backend",
          element: <Backend />,
        },
        {
          path: "/fullstack",
          element: <Fullstack />,
        },
        {
          path: "/blog/:id",
          element: <BlogDetails />,
        },
      ]
    }
    ,
    {
      path: "/admin/",
      element: <HeaderMain />,
      children : [
        {
          index: true,
          element: <Dashboard   />,
        }
        ,
        {
          path: "/admin/post",
          element: <Post />,
        },
        {
          path: "/admin/create",
          element: <CreatePost />,
        },
        {
          path: "/admin/edit-post/:id",
          element: <EditPost />,
        },
        
      ]
    }
    ,
    {
      path : "/login",
      element : <Login/>
    }
    
  ])
  return <RouterProvider router={router}/>
}

export default App;
