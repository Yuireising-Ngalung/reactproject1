import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRouter from './pagesroute/PageRouter';
import AuthProvider from './context/AuthContext';


const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);


root.render(
  <StrictMode>
    <AuthProvider>
      <PageRouter />
    </AuthProvider>
  </StrictMode>
)