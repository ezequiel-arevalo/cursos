import { ChatLayout } from "./chat/Layout/ChatLayout"
import { ChatPage } from "./chat/pages/ChatPage"

export const App = () => {
  return (
    <ChatLayout>
      <ChatPage />
    </ChatLayout>
  )
}
