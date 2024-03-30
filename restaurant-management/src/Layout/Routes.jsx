import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import Login from "../pages/Login"
import Payment from "../pages/Payment"
import Dashboard from '../pages/Dashboard'
import Order from '../pages/Order'
import Chef from '../pages/Chef'

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/checkorder" element={<Order />} />
      <Route path="/chef" element={<Chef />} />
    </Routes>
  )
}

export default RoutesComponent