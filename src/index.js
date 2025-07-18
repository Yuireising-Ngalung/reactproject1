import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRouter from './pagesroute/PageRouter';


const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);


root.render(
  <StrictMode>
    <PageRouter />
  </StrictMode>
)