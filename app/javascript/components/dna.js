import { Link } from "react-router"

export default function DNA({ record }) {
  return (
    <div className="flex items-center">
      {record.sequence}
      <Link
        to={`/edit/${record.id}`}
        className="m-4 ml-auto rounded bg-purple-500 px-4 py-2 font-medium text-white shadow-md hover:bg-purple-700 md:m-6 md:py-4"
      >
        Mutate
      </Link>
    </div>
  )
}
