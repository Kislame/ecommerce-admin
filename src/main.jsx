import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider.jsx';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App.jsx';
import './index.css';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
