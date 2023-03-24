import { FC } from "react";
import { useSelector } from "react-redux";
import { Styles } from "./dashboard.module.scss";
const Dadhboard = () => {
    const  selecter = useSelector((state)=>state.dashboardData.contriesData)
    log
  return <div className={Styles.container}> </div>;
};

export default Dadhboard;
