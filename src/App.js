import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Home/>}>
    
    </Route>
  )
);
function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
