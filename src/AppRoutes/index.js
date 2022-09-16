import {Routes,Route} from 'react-router-dom'
import Home from '../components/pages/Home';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />            
            
        </Routes>
    );
};

export default AppRoutes;