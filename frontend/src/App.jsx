import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  //{
   // path:'/browse',
   // element:<Browse/>
 // },
  /*{
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription />
  },
  {
    path:'/profile',
    element:<Profile/>
  },**/
]
)

function App() {
  return (
    <>
    <RouterProvider router ={appRouter}/>
      
    </>
  )
}
export default App