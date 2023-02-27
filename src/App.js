import './App.css';
import { Provider } from 'react-redux';
import RouterNav from './Router';
import Store from './components/Store';

function App() {
  return (
    <Provider store={Store}>
      <RouterNav />
    </Provider>
  );
}

export default App;
