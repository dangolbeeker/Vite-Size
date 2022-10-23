import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Features from './components/body/Features/FeaturesGrid/FeaturesGrid';
import Artists from './components/body/Artists/Artists';
import Fans from './components/body/Fans/Fans';
import Groups from './components/body/Groups/Groups';
import Footer from './components/body/Footer/Footer';
import PPV from './components/body/PPV/PPV';









function App() {
    return (
        <BrowserRouter>
        
               <nav>
  
            <Header />
            </nav>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/features" element={<Features />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/fans"     element={<Fans />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/ppv"  element={<PPV />} />
                {/* <Route path="/feed" element={<Feed />} /> */}
             </Routes>
        </BrowserRouter>
        
    );
}


export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   