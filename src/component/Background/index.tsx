import { BackgroundImageContainer } from './style';

const snowflakeURL: string =
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/83e48151-a42a-47d4-8b30-42a7966c99eb/6f501239-25c7-44b7-a2d5-3650d26a2783';
const snowhillURL: string =
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/234a796a-134c-4f7d-b276-c5bb8e510d38/4a28b1a8-7b69-48ed-9123-aedc5ca169f5';

const snowmanURL: string =
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/3fe06eea-e873-497b-8748-bd435edd4618/238303d6-29d6-4093-b8c0-6e19395117b6';

const Background: React.FC = () => {
  return (
    <BackgroundImageContainer>
      <img src={snowhillURL} alt="background-image" />
      <img src={snowmanURL} alt="snowman" />
    </BackgroundImageContainer>
  );
};

export default Background;
