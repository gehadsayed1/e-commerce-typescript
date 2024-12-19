
import { createRoot } from 'react-dom/client';
// rudux
import { Provider } from 'react-redux';
import { store , persistor} from '@store/index';
import { PersistGate } from 'redux-persist/integration/react';

// services
import '@services/Axios-global';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/global.css'
import AppRouter from '@routes/AppRouter';




createRoot(document.getElementById('root')!).render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AppRouter/>
    </PersistGate>
   
    </Provider>)
 
