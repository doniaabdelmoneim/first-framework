// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './Components/About/About';
// import Portfolio from './Components/Portfolio/Portfolio';
// import Contact from './Components/Contact/Contact';
// import Layout from './Components/Layout/Layout';
// import Home from './Components/Home/Home';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;


import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import './App.css';


function App() {
  const routes = createBrowserRouter([
    {path: '', element: <Layout /> , children: [
      {index:true , element: <Home /> },
      {path: 'about' , element: <About /> },
      {path: 'portfolio' , element: <Portfolio />},
      {path: 'contact' , element: <Contact />},
    ]}
    

  ]);
  
  return (
    <>
<RouterProvider router={routes} ></RouterProvider>
  
    </>
  );
}

export default App;




