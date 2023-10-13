import { Provider } from 'react-redux';
import '../styles/globals.css';
import { store } from '../features/store';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import CategoryRoutes from '../features/slices/categoryRotes';
import { Html } from 'next/document';

function MyApp({ Component, pageProps }) {
    return (
        // <Html lang="ru">
        <div>
            <Provider store={store}>
                <Header />
                <CategoryRoutes />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </div>
        // </Html>
    );
}

export default MyApp;
