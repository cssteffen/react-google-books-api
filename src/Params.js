import React from "react";

export default function Params() {
  const API_Key = "AIzaSyAMwUnPu0Le4DE6lyYYSruNy12_m8vBU_k";

  if (this.state.bookTypeValue === "No Filter") {
    params =
      this.state.searchBoxValue +
      "&printType=" +
      this.state.printTypeValue +
      "&key=" +
      API_Key;
  } else {
    params =
      this.state.searchBoxValue +
      "&printType=" +
      this.state.printTypeValue +
      "&filter=" +
      this.state.bookTypeValue +
      "&key=" +
      API_Key;
  }
  return params;
}
