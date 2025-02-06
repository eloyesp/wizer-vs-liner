function Nucleotide({ nucleotide }) {
  const mutant = /^[A-Z]*$/.test(nucleotide) || null

  return (
    <li
      className="data-mutant:bg-emerald-100 data-mutant:text-purple-800 size-8 text-center text-lg leading-8"
      data-mutant={mutant}
    >
      {nucleotide}
    </li>
  )
}

export default function DNA({ record }) {
  const nucleotides = record.sequence.split("")

  return (
    <ol className="m-2 grid grid-cols-6 items-center gap-1 border-purple-900 p-1 font-mono uppercase">
      {nucleotides.map((nucleotide, index) => (
        <Nucleotide key={index} nucleotide={nucleotide} />
      ))}
    </ol>
  )
}
