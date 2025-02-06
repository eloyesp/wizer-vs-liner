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

export default function DNA({ record, ...props }) {
  const sequence = (record.sequence || "").padEnd(36)
  const nucleotides = sequence.split("")
  props.className = `w-max my-4 p-2 grid grid-cols-6 items-center gap-1 border-purple-900 p-1 font-mono uppercase ${props.className}`

  return (
    <ol {...props}>
      {nucleotides.map((nucleotide, index) => (
        <Nucleotide key={index} nucleotide={nucleotide} />
      ))}
    </ol>
  )
}
