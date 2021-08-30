import { ChangeEventHandler } from "react"


interface Props {
  label: string,
  name: string,
  prepend?: string,
  append?: string,
  onSubmit: ChangeEventHandler<HTMLInputElement>
}

const TextInput: React.FC<Props> = ({label, name, prepend, append, onSubmit}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <div className="input-group mb-3">
        {prepend && <span className="input-group-text">{prepend}</span>}
        <input
          type="text"
          name={name}
          className="form-control"
          aria-label="{label}"
          onChange={onSubmit}
          onKeyPress={(event) => {
            // Prevent non-numeric characters from being entered (excepting `.`)
            if (!/[0-9\.]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        {append && <span className="input-group-text">{append}</span>}
      </div>
    </div>
  )
}

export default TextInput
