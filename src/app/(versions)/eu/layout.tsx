"use client";
import type { Metadata } from "next";

import "./globals.css";
import { NextRequest } from "next/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import FabButton from "@/components/ChatIcons";
import ScrollButton from "@/components/BacktoTop/BaToTop";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: any }) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("+447593709971");
  const fetchCity = async () => {
    const ipUrl = "https://api.ipify.org?format=json";
    const dynamicNumber: any = {
      US: "+19179331132",
      MX: "+19179331132",
      CA: "+19179331132",
      AU: "+61480004010",
      NZ: "+61480004010",
      UK: "+447593709971",
    };

    if (dynamicNumber[country]) {
      setNumber(dynamicNumber[country]);
    } else {
      setNumber("+447593709971");
    }
    // var script = document.createElement("script");
    // script.type = "text/javascript";
    // script.async = true;
    // script.src = "https://embed.tawk.to/638f20b0b0d6371309d2de32/1gjjhfd73";
    // script.charset = "UTF-8";
    // script.setAttribute("crossorigin", "*");
    // document.head.appendChild(script);

    try {
      // Fetch the user's IP address
      const response = await fetch(ipUrl);
      const data = await response.json(); // Assuming the response is in JSON
      const userIp = data.ip;

      // Fetch location data based on the IP address
      const locationResponse = await fetch(
        `https://pro.ip-api.com/json/${userIp}?key=tRuJ0KuCug4wEHs&fields=status,message,continent,continentCode,country,countryCode,countryCode3,region,regionName,city,district,zip,lat,lon,timezone,offset,currentTime,currency,callingCode,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
      );
      const locationData = await locationResponse.json();

      let fetchedCity = locationData.country || "London"; // Set default value
      let fetchedCountry = locationData.countryCode || "GB"; // Set default value
      //
      // Store the city and country in local storage
      localStorage.setItem("city", fetchedCity);
      localStorage.setItem("country", fetchedCountry);

      // Assuming you have functions like setCity and setCountry to update your UI
      setCity(fetchedCity);
      setCountry(fetchedCountry);
    } catch (error) {
      // If the API request fails, set default values
      setCity("London");
      setCountry("GB");
    }
  };

  useEffect(() => {
    fetchCity();
    const dynamicNumber: any = {
      US: "+19179331132",
      MX: "+19179331132",
      CA: "+19179331132",
      AU: "+61480004010",
      NZ: "+61480004010",
      UK: "+447593709971",
    };

    if (dynamicNumber[country]) {
      setNumber(dynamicNumber[country]);
    } else {
      setNumber("+447593709971");
    }
  }, [country]);

  return (
    <html lang="en">
      <body className={` bg-white`}>
        <Navbar number={number} region={"/eu"} />
        {/* <ScrollButton /> */}
        <FabButton number={number} />
        {children}
        {/* <Footer number={number} region={"/eu"} /> */}
      </body>
    </html>
  );
}
