"use client";

import React from "react";
import AOSAnimation from "./AosInit";

export default function Provider({ children }) {
  return <AOSAnimation>{children}</AOSAnimation>;
}
