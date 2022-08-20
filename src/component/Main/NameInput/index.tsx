import { useState } from 'react';

import Input from '@/component/Input';
import { NameInputContainer } from './style';

const NameInput: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  return (
    <NameInputContainer>
      <Input text="이름을 입력해주세요" inputValue={userName} setInputValue={setUserName} />
    </NameInputContainer>
  );
};

export default NameInput;
