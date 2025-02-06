import { BrowserRouter, Routes, Route, Link } from "react-router"
import HomePage from "./pages/home"
import NewPage from "./pages/new"

function SequenceEdit() {
  return <h1 className="text-3xl font-medium">Edit Sequence</h1>
}

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/edit/:id" element={<SequenceEdit />} />
      </Routes>
    </BrowserRouter>
  )
}
