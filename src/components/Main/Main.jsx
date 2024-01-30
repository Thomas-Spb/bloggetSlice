import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import List from './List';
import Tabs from './Tabs';
import { Modal } from '../Modal/Modal';
import { StartPage } from '../Pages/StartPage/StartPage';
import ErrorPage from '../Pages/ErrorPage';

export const Main = () => (
  <main>
    <Layout>
      <Tabs />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/auth" element={<StartPage />} />
        <Route path="/category/:page" element={<List />}>
          <Route path="post/:id" element={<Modal />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  </main>
);
