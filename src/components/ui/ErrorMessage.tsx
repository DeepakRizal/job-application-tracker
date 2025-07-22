interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return (
    <>
      {" "}
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </>
  );
};

export default ErrorMessage;
