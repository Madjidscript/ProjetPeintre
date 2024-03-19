import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicRouter from "./pages/public/PublicRooter"
import AdminRouter from "./components/admin/public/AdminRouter"
import AuthRouter from "./components/auth/authRouter"
import Helpergard from "./components/helper/helperGard"



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter/>} />
        <Route path="/admin/*" element={
          <Helpergard>
            <AdminRouter/>
          </Helpergard>
        }/>
        <Route path="/auth/*" element={<AuthRouter/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
