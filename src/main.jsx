
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App.jsx';

ReactDOM.render(
  <ConfigProvider theme={{ token: { colorPrimary: '#4A90E2' } }}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
