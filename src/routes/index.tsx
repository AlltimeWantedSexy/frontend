import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from '@/pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_ENV}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
