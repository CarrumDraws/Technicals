import React, { useState, useEffect } from "react";
import { PromoProvider } from "./context/PromoContext";
import Header from "./components/Header";
import PromoToggle from "./components/PromoToggle";
import Body from "./components/Body";
import SideMenu from "./components/SideMenu";
import "./Main.css";

function Main() {
  const [promos, setPromos] = useState([]); // Full List
  const [currPromos, setCurrPromos] = useState([]); // Only New Stuff
  const [status, setStatus] = useState("all"); // Dataset to Display
  const [menuUp, setMenuUp] = useState(false); // Menu Display

  // Fetch Data from http://www.mocky.io/v2/5bc3b9cc30000012007586b7
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "http://www.mocky.io/v2/5bc3b9cc30000012007586b7"
        );
        const promoData = await response.json();
        // Sort promoData by sequence
        promoData.sort(function (a, b) {
          return a.sequence - b.sequence;
        });
        setPromos(promoData);
        // Filter into currPromos
        setCurrPromos(promoData);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  function toggleMenu(menuState) {
    setMenuUp(menuState);
  }

  // Toggle between the two promo states
  function toggleStatus(newStatus) {
    console.log(`New Status is ${newStatus}`);
    if (newStatus === "new") {
      setCurrPromos(promos.filter((promo) => (promo.onlyNewCustomers = false)));
    } else {
      setCurrPromos(promos);
    }
    setStatus(newStatus);
  }

  return (
    <PromoProvider>
      <SideMenu menuState={menuUp} toggleMenu={toggleMenu} />
      <Header menuState={menuUp} toggleMenu={toggleMenu} />
      <PromoToggle status={status} toggleStatus={toggleStatus} />
      <Body currPromos={currPromos} />
    </PromoProvider>
  );
}

export default Main;
