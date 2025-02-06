import { Link } from "react-router"
import { useEffect, useState } from "react"
import Dna from "../components/dna"

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
    <Dna key={seq.id} record={seq} />
  ))

  return (
    <>
      <h1 className="my-4 text-3xl font-medium">DNA Sequences available</h1>
      {renderedSequences}
      <Link
        to="/new"
        className="fixed bottom-0 right-0 m-4 block w-max rounded bg-purple-600 px-4 py-2 font-medium text-white shadow-md hover:bg-purple-800 md:m-6 md:py-4"
      >
        Add a new sequence
      </Link>
    </>
  )
}
