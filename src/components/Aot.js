import React, { useEffect, useState } from "react";
import "../styles/Aot.css";

/**
 * Tester countdown for app
 * @returns countdown
 */
const Aot = () => {
    let year = new Date().getFullYear();
    /**
    * AOT countdown difference:
    */
    const AOTdifference = +new Date(`08/26/${year}`) - +new Date();

    const computeRemainingTime = (difference) => {
        let RemainingTime = {};
    
        if (difference > 0) {
          RemainingTime = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
        return RemainingTime;
    }

    const [AOTcountDown, AOTsetCountDown] = useState(computeRemainingTime(AOTdifference));
    const AOTcountDownComponents = [];

    useEffect(() => {
        const timer = setTimeout(() => {
          AOTsetCountDown(computeRemainingTime(AOTdifference));
        }, 1000);
    
        return () => clearTimeout(timer);
    });

    Object.keys(AOTcountDown).forEach((interval) => {
        if (!AOTcountDown[interval]) {
          return;
        }
      
        AOTcountDownComponents.push(
          <span>
            {AOTcountDown[interval]} {interval}{" "}
          </span>
        );
    });

    return(
      <p className="aot-timerText">
        {AOTcountDownComponents.length ? AOTcountDownComponents : <span>It is out!</span>}
      </p>
    );
}

export default Aot;
