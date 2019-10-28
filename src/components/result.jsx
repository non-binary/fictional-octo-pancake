import React, { Component } from "react";

const Result = ({ tip }) => {
  const tipAmount = tip.total * (tip.percent / 100);

  return <h3 className="mt-2">Tip: {tipAmount.toFixed(2)}</h3>;
};

export default Result;
