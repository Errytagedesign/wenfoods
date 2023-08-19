"use client";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

export default function AOSAnimation({ children }) {
  // AOS animation
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <div> {children} </div>;
}
