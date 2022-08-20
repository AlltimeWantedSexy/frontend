import SimpleImageSlider from 'react-simple-image-slider';
import { ImageSelectorContainer } from './style';

const imageURLs: string[] = [
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/d6c72a7c-d137-41e4-9fb3-93d99d87a02f/81ed31c4-1881-4e03-8c0d-1917d106a699',
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/70fab0c4-f662-44a0-a328-0288c1461d0f/adae6c96-b846-4f39-aceb-aee7bf4c0f7e',
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/cbd4e719-7669-4af7-a7df-9250944ba354/dd073653-aea0-4a28-8af7-0d4e6d9bf8a7',
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/7144d91a-de4f-47a4-87ee-af82f9cf23cd/6c59d15a-7aea-4773-b89e-6bcced5399fd',
  'https://image-snapshot-storage.s3.ap-northeast-2.amazonaws.com/65992747-8b4f-40de-966e-32ca3ecada8b/b1c11e69-1506-451a-894e-953d254e3d50',
];

interface Props {
  setUserIcon: React.Dispatch<React.SetStateAction<string>>;
}

const ImageSelector: React.FC<Props> = ({ setUserIcon }: Props) => {
  return (
    <ImageSelectorContainer>
      <SimpleImageSlider
        width="100%"
        height="100%"
        images={imageURLs}
        showBullets={false}
        showNavs={true}
        onCompleteSlide={(idx) => {
          setUserIcon(imageURLs[idx - 1]);
        }}
      />
    </ImageSelectorContainer>
  );
};

export default ImageSelector;
