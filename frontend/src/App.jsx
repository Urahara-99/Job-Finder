import ApplyPage from "./pages/ApplyPage"
import { Route,Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home"
import AppliedJobsPage from "./pages/AppliedJobsPage";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apply-job/:id" element={<ApplyPage />}/>
        <Route path="/user-job-portal/:name/:id" element={<AppliedJobsPage />} />
      </Routes>
    </>
  )
}

export default App
