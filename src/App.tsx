import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

import '@/styles/font.css';
import Router from './routes';
import LoadingPage from './pages/LoadingPage';

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
      <ToastContainer />
    </Suspense>
  );
};
export default App;
