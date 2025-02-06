import { Link } from "react-router"
import { useEffect, useState } from "react"

export default function () {
  const [isLoading, setLoading] = useState(true)
  const [sequences, setSequences] = useState([])

  useEffect(() => {
    fetch("/adns.json")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false)
        setSequences(json)
      })
  }, [])

  const renderedSequences = sequences.map((seq) => (
    <div key={seq.id}>{seq.sequence}</div>
  ))

  return (
    <>
      <h1 className="text-3xl font-medium">Hello from React!</h1>
      {isLoading && "LOADING"}
      {renderedSequences}
      <Link to="/new">Add a new sequence</Link>
    </>
  )
}
