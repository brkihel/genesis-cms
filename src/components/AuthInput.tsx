interface AuthInputProps {
  newState: (state: string) => void;
  placeholder: string;
  isPassword?: boolean;
}

function AuthInput(props: AuthInputProps) {
  return (
    <div className="mb-4">
      <input
        type={props.isPassword ? "password" : "text"}
        className="block appearance-none w-full py-1 px-2 mb-1 border border-gray-200 rounded auth-form auth-input form-control"
        placeholder={props.placeholder}
        onChange={(e) => props.newState(e.currentTarget.value)}
      />
    </div>
  );
}

export default AuthInput;
