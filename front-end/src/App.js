import "./App.css";
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { nullifyErrorAction } from "./redux/actions";
import SideBar from "./components/SideBar";
import {
  HomeAdmin,
  ProductAdmin,
  CategoriesAdmin,
  RecipesAdmin,
  PaymentAdmin,
  ProductFlowAdmin,
  Login,
  SignUp,
  Verification,
  ForgotPassword,
  ChangePassword,
  UserAddress,
  Products
} from "./pages";
import { Nav } from '../src/components/Navbar';
// import { useDispatch } from "react-redux";
// import { nullifyErrorAction } from "./redux/actions";

function App() {
  // const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(nullifyErrorAction());
  // }, [dispatch]);

  return (
  // <>
  //     (
      <div className="container">
        <div className="sidebar">
          <SideBar/>
        </div>
        <div style={{ overflowY: 'auto', marginLeft: '210px'}}>
          <Route path="/" exact component={HomeAdmin} />
          <Route path="/product" component={ProductAdmin} />
          <Route path="/category" component={CategoriesAdmin} />
          <Route path="/recipe" component={RecipesAdmin} />
          <Route path="/payment-proof" component={PaymentAdmin} />
          <Route path="/product-flow" component={ProductFlowAdmin} />
          <Route path="/user/address" component={UserAddress}/>
        </div>
      </div>
    );
  // } else {
//     return (
//       <div>
//         <Nav />
//         <Route exact path="/signup" component={SignUp} />
//         <Route exact path="/verification" component={Verification} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/forgot-password" component={ForgotPassword} />
//         <Route exact path="/change-password" component={ChangePassword} />
//         <Route exact path="/product" component={Products} />
//       </div>
//     );
  // }
};

export default App;
