import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Layout from './layout/default.jsx';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import i18n from './locales/i18n.js';
import store from './store/store';

import Home from './pages/Home/Home.jsx';
import Page404 from './pages/Page404/Page404.jsx';

import './style.scss';

ReactDOM.createRoot(document.getElementById('avrora')).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Provider>
    </I18nextProvider>
  </BrowserRouter>
)
