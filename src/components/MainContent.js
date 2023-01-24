import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddCustomer,
  AddGear,
  AddTransaction,
  Categories,
  Customers,
  EditCategoryPage,
  EditCustomerPage,
  EditGearPage,
  EditTransactionPage,
  Gears,
  Homepage,
  PageNotFound,
  Transactions,
} from "../pages";
import AddCategory from "../pages/AddCategory";
import InfoGearPage from "../pages/InfoGearPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

function MainContent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/gears" element={<Gears />} />
        <Route path="/gears/create" element={<AddGear />} />
        <Route path="/gears/:id" element={<InfoGearPage />} />
        <Route path="/gears/edit/:id" element={<EditGearPage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/create" element={<AddCategory />} />
        <Route path="/categories/edit/:id" element={<EditCategoryPage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/create" element={<AddCustomer />} />
        <Route path="/customers/edit/:id" element={<EditCustomerPage />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactions/create" element={<AddTransaction />} />
        <Route
          path="/transactions/edit/:id"
          element={<EditTransactionPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainContent;
