import { BrowserRouter, Route, Routes } from "react-router-dom"
import PublicRouter from "./pages/public/PublicRooter"
import AdminRouter from "./components/admin/public/AdminRouter"



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter/>} />
        <Route path="/admin/*" element={<AdminRouter/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
