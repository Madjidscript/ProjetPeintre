import React from "react";
import {Navigate} from "react-router-dom"
import { accountService } from "../../services/accountService";
const Helpergard = ({ children }) => {
  //const local = localStorage.getItem("Mydata");

  if (!accountService.local()) {
    return <Navigate to="/auth/connexion" />;
  }
  return children;
};

export default Helpergard;
