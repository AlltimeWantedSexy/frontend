import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: { id: -1, name: '', classroom_id: '' },
});

export default userState;
