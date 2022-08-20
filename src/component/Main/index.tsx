import { useState } from 'react';

import { MainContainer } from './style';
import ImageSelector from './ImageSelector';
import NameInput from './NameInput';

const Main: React.FC = () => {
  const [userIcon, setUserIcon] = useState<string>('');

  return (
    <MainContainer>
      <ImageSelector setUserIcon={setUserIcon} />
      <NameInput />
    </MainContainer>
  );
};

export default Main;
