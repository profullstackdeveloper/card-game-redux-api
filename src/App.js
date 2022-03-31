import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Layout from './layout/Layout';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Home></Home>
      </Layout>
    </Provider>

  );
}

export default App;
