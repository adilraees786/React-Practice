

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
