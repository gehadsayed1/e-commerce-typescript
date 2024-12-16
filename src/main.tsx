
import { createRoot } from 'react-dom/client';
// rudux
import { Provider } from 'react-redux';
import { store } from '@store/index';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/global.css'
import AppRouter from '@routes/AppRouter';




createRoot(document.getElementById('root')!).render(
<Provider store={store}><AppRouter/></Provider>)
 
