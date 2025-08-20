import { AuthLayout } from "@/auth/layout/AuthLayout"
import { LoginPage } from "@/auth/pages/LoginPage"
import { Route } from "lucide-react"
import { BrowserRouter, Navigate, Routes } from "react-router"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />}/>
        </Route>
        <Route path="/" element={<Navigate to={"/auth"} />}/>
        <Route path="*" element={<Navigate to={"/auth"} />}/>
      </Routes>
    </BrowserRouter>
  )
}
