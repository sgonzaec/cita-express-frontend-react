import { RouterProvider } from 'react-router-dom';
import './App.scss';
import routerList from './routes/routes';

function App() {
  return (
    <main>
      <RouterProvider router={routerList} />
    </main>
  );
}

export default App;
