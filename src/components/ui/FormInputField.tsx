import ErrorMessage from "./ErrorMessage";

interface FormInputFieldProps {
  labelText: string;
  type?: string;
  placeholder?: string;
  name: string;
  id: string;
  onHandleChange: (value: string, name: string) => void;
  value: string;
  errorMessage: string;
  elementText?: string;
}

const FormInputField = ({
  labelText,
  type = "text",
  placeholder,
  id,
  name,
  onHandleChange,
  value,
  errorMessage,
  elementText = "input",
}: FormInputFieldProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="company">{labelText}</label>
      {elementText === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onHandleChange(e.target.value, e.target.name)
          }
          value={value}
          className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onHandleChange(e.target.value, e.target.name)
          }
          value={value}
          className=" border px-1 py-2 border-gray-400 rounded-sm outline-none"
        />
      )}
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default FormInputField;
