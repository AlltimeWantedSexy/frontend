import { InputContainer, InputField } from './style';

interface Props {
  text: string;
  placeholder?: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ text, placeholder, inputValue, setInputValue }: Props) => {
  return (
    <InputContainer>
      <h2>{text}</h2>
      <InputField value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </InputContainer>
  );
};

export default Input;
