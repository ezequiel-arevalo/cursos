import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router"

import { AuthLayout } from "@/auth/layout/AuthLayout"
import { LoginPage } from "@/auth/pages/LoginPage"
import { RegisterPage } from "@/auth/pages/RegisterPage"
import { ChatPage } from "@/chat/pages/ChatPage"

import { sleep } from "@/lib/sleep"

const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import("@/chat/Layout/ChatLayout");
});

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

        <Route path="/chat" element={
          <Suspense fallback={<div>Loading...</div>}>
            <ChatLayout />
          </Suspense>
        }>
          <Route index element={< ChatPage /> } />
          <Route path="*" element={ <Navigate to={"/chat"} />} />
        </Route>
        
        {/* Redirection page to auth for user login */}
        <Route path="*" element={ <Navigate to={"/auth"} />} />
      </Routes>
    </BrowserRouter>
  )
}
