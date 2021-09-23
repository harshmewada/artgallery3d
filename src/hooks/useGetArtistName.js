import React from "react";

const useGetArtistName = () => {
  const location = window.location.pathname.replace("/", "");
  console.log("location", location);
  return location;
};
export default useGetArtistName;
