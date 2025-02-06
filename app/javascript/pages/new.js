import DNA from "../components/dna"
import { Link, useNavigate } from "react-router"
import { useState, useRef } from "react"

export default function NewPage() {
  const [sequence, setSequence] = useState("")
  const inputRef = useRef(null)
  const record = { sequence }
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content
  const headers = {
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json",
  }
  const navigate = useNavigate()

  function handleChange (event) {
    const newSequence = event.target.value.replace(/[^acgt]/ig, "").toLowerCase().substring(0, 36)
    fetch("/adns/new/explore.json", {
      method: 'POST',
      body: JSON.stringify({
        adn: { sequence: newSequence }
      }),
      headers,
    }).then((response) => response.json())
      .then((json) => {
        setSequence(json.sequence)
      })
  }

  function submit () {
    const csrfToken = document.head.querySelector('meta[name="csrf-token"]')?.content
    fetch("/adns.json", {
      method: 'POST',
      body: JSON.stringify({ adn: { sequence } }),
      headers,
    }).then((response) => response.json())
      .then((json) => {
        navigate("/")
      })
  }

  return (
    <>
      <h1 className="text-3xl font-medium my-4">Add a New Sequence</h1>
      <form action={ submit }>
        <label htmlFor="sequence">Sequence</label>
        <p className="text-emerald-600">
          Use only the leters 'a', 'c', 'g', 't'
        </p>
        <input
          autoFocus
          type="text"
          id="sequence"
          value={sequence}
          onChange={ handleChange }
          className="sr-only peer"
          ref={ inputRef }
          required
          minLength="36"
          pattern="[acgtACGT]{36}"
          title="Sequences of 36 nucleotides (ACGT)"
        />
        <DNA
          { record }
          className="peer-focus:outline min-h-20 bg-emerald-50"
          onClick={ () => inputRef.current.focus() }
        />
        <button
          className="my-4 block w-max rounded bg-purple-700 px-4 py-2 font-medium text-white shadow-md hover:bg-purple-800 md:m-6 md:py-4"
        >Submit</button>
      </form>

      <Link
        to="/"
        className="fixed bottom-0 left-0 m-4 block w-max rounded bg-purple-600 px-4 py-2 font-medium text-white shadow-md hover:bg-purple-800 md:m-6 md:py-4"
      >
        Back to Home
      </Link>
    </>
  )
}
