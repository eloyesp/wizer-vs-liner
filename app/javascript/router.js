import { BrowserRouter, Routes, Route, Link } from "react-router"

function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-medium">Hello from React!</h1>
      <Link to="/new">Add a new sequence</Link>
    </>
  )
}

function SequenceNew() {
  return (
    <>
      <h1 className="text-3xl font-medium">Add New Sequence</h1>
      <Link to="/">Back to Home</Link>
    </>
  )
}

function SequenceEdit() {
  return <h1 className="text-3xl font-medium">Edit Sequence</h1>
}

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<SequenceNew />} />
        <Route path="/edit/:id" element={<SequenceEdit />} />
      </Routes>
    </BrowserRouter>
  )
}
