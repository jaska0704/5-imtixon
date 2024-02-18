import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout/main-layout"
import { nanoid } from "nanoid"
import { main_pages } from "./router/main.router"
import { ShopSingle } from "./pages/shop-single/shop-single"




function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<MainLayout />} >
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={nanoid()}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route path="/Shopsingle/:id/" element={<ShopSingle/>}/>
        </Route>
      </Routes>
    </div>
  )
}


export default App;
