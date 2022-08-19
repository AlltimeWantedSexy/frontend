import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import '@/styles/font.css';
import Router from './routes';
import Hello from './component/Hello';

const App = () => {
  return (
    <Suspense fallback={<Hello />}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </Suspense>
  );
};
export default App;
