import { createBrowserRouter , RouterProvider } from 'react-router-dom';
// layout
import {MainLayout} from '@layouts/index.ts'
// pages
import Home from '@pages/Home';
import AbutUs from '@pages/AbutUs';
import Products from '@pages/Products';
import Categories from '@pages/Categories';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';

function AppRouter() {
    
const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout />,
    errorElement: <Error/>,

    children :[
    {
        index: true,
        element: <Home/>
    },
    {
        path : 'abut-us',
        element : <AbutUs/>
    },
    {
        path : 'products/:prefix',
        element : <Products/>,
        loader: ({ params }) => {
            if (
              typeof params.prefix !== "string" ||
              !/^[a-z]+$/i.test(params.prefix)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category not found",
                status: 400,
              });
            }
            return true;
        }
    },
    {
        path : 'Categories',
        element : <Categories/>
    },
    {
        path : 'login',
        element : <Login/>
    },
    {
        path : 'register',
        element : <Register/>
    }


]
}])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter