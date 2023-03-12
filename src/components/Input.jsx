export default function Input({ id, label, value, onChangeValue, min = -400, max = 400 }) {
  return (
    <div className="py-4">
      <label
        className="mb-2 block text-neutral-700"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="number"
        value={value}
        onChange={onChangeValue}
      />
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
        min={min}
        max={max}
        value={value}
        onChange={onChangeValue}
        id={`range${id}`}
      />
    </div>
  )
}
