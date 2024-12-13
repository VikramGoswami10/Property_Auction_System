import './App.css';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter to enable routing
import { Home, Layout } from './Routes/index';

function App() {
  return (
    <BrowserRouter> {/* Wrap the layout with BrowserRouter */}
        <Layout>
            <Home/>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
