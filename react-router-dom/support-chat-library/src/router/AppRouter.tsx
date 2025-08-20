import { BrowserRouter, Route, Routes } from "react-router"
import { AuthLayout } from "@/auth/layout/AuthLayout"
import { LoginPage } from "@/auth/pages/LoginPage"
import { RegisterPage } from "@/auth/pages/RegisterPage"
import { Navigate } from "react-router"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages and Layout */}
        <Route path="/auth" element={ <AuthLayout /> }>
          <Route index element={ <LoginPage/>} />
          <Route path="/auth/register" element={ <RegisterPage />} />

          {/* Redirection page to auth to login for default */}
          {/* Podemos evitar usar esto con el index */}
          {/* <Route path="/auth/login" element={ <LoginPage/> } /> */}
          {/* <Route path="/auth" element={ <Navigate to={"/auth/login"} />} /> */}
        </Route>
        
        {/* Redirection page to auth for user login */}
        <Route path="*" element={ <Navigate to={"/auth"} />} />
      </Routes>
    </BrowserRouter>
  )
}
