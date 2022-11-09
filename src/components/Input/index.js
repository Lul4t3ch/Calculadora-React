import { InputContainer} from "./styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <input type="number" disabled value={value}/>
      </InputContainer>
    );
  }
  
export { Input };
  