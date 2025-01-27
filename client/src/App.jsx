import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import UserProvider from './context/userContext'

const Home = lazy(() => import('./pages/Home'))
const Signup = lazy(() => import('./pages/Signup'))
const Login = lazy(() => import('./pages/Login'))
const Error = lazy(() => import('./pages/Error'))

function App() {

  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Toaster />
        <Suspense>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'*'} element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
