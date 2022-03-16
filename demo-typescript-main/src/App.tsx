import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import { list, remove } from './api/product';
import { Navigate, } from 'react-router-dom';
import { ProductType } from './types/product'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import WebsiteLayout from'./pages/layouts/WebsiteLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ManagerProduct from './pages/ManagerProduct'
import Header from './components/Header'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  },[])
  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  return (
    <div className="App">
      <hr></hr>
       <div>
        {/* <table className='App' border="1">
          <thead>
            <th>Stt</th>
          <th>Name</th>
          <th>Price</th>
          <th>Title</th>
          </thead>
          {products.map((item,index) =><tbody>
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.title}</td>
            <td>
              <button onClick={() => removeItem(item._id)}>Remove</button>
            </td>
          </tbody>)}
          
        </table> */}
        <header>
          <ul>
            <li><a href="/">Home Page</a></li>
            <li><a href="/product">Product Page</a></li>
            <li><a href="/admin/dashbostd">Admin Dashboard</a></li>
          </ul>
        </header>
        <main>
        <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<ManagerProduct />} /> */}
        <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<Header />} />
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}> 
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ManagerProduct />} />
        </Route>
      </Routes>
      
        </main>
      </div>
    </div>
  )
}



export default App