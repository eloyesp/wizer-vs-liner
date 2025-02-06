import { Link } from "react-router"

export default function () {
  return (
    <>
      <h1 className="text-3xl font-medium">Hello from React!</h1>
      <Link to="/new">Add a new sequence</Link>
    </>
  )
}
