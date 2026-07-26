import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';


// Nested About Pages
import { Overview } from './pages/about/Overview';



export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Top-Level Routes */}
          <Route path="/" element={<Home />} />
          
          {/* About Us Sub-routes */}
          <Route path="/about">
            <Route path="overview" element={<Overview />} />
            
          </Route>

        </Routes>
      </main>
      
      <footer className="bg-blue-950 text-gray-400 py-8 text-center text-xs border-t border-blue-900">
        © 2026 Pavna International School. Built with React & TypeScript.
      </footer>
    </div>
  );
};

export default App;