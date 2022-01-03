import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Card, Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Dashboard from "./components/Dashboard"
import NavComp from "./components/NavComp/NavComp"
import { setUser } from './redux/actionCreators/authActionCreators';
import { auth } from './config/firebase';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();

  const {isLoggedIn} = useSelector(
    (state) =>({
      isLoggedIn:state.auth.isLoggedIn, 
    }), shallowEqual
  );

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
        if(!user){
            return;
        }
        const data = {
            id:user._delegate.uid,
        }
        dispatch(setUser(data));
    })
  }, [dispatch]);

  return (
    <Card style={{display:"inline"}}>
      <NavComp/>
      <Routes>
        {
          isLoggedIn
            ?
              <Route path="admin/*" element={<Admin/>} />
            :
              <Route path="admin/*" element={<Dashboard/>} />
        }
        <Route path="/*" element={<Dashboard/>} />
      </Routes>
      <Footer/>
    </Card>
  );
}

export default App;
