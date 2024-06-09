
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'


import Dashboard from "./views/dashboard";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          {/* <Route path="/dashboard" element={ <Dashboard/> } /> */}
        </Routes>
      </Router>
      </ChakraProvider>
  );
}

export default App;