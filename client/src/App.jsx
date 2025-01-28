import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import UserProvider from './context/userContext'

const Home = lazy(() => import('./pages/Home'))
const Signup = lazy(() => import('./pages/Signup'))
const Login = lazy(() => import('./pages/Login'))
const Verification = lazy(() => import('./pages/Verification'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Upload = lazy(() => import('./pages/Upload'))
const Error = lazy(() => import('./pages/Error'))
const Chat = lazy(() => import('./pages/Chat'))
const Generate=lazy(()=>import('./pages/generate'))
const Pricing= lazy(()=> import('./pages/pricing'))

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
            <Route path={'/verify/:token'} element={<Verification />} />
            <Route path={'/dashboard'} element={<Dashboard />} />
            <Route path={'/upload'} element={<Upload />} />
            <Route path={'/chat'} element={<Chat />} />
            <Route path={'*'} element={<Error />} />
            <Route path={'/generate'} element={<Generate/>}/>
            <Route path={'/pricing'} element={<Pricing/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
