import axios from "axios";
import React from "react";

import { image } from "d3-fetch";
const useGetImage = (url) => {
  const [myimage, setMyImage] = React.useState();
  const handleGetImages = async () => {
    // const hehe = await fetch(
    //   `https://api.unsplash.com/photos/?client_id=${key}`
    // ).then((res) => res.json());
    // const size = await Promise.all(
    //   hehe.map(async (res) => {
    //     let result = await probe(res.urls.regular);
    //     return {
    //       ...res,
    //       sizeData: result,
    //     };
    //   })
    // );
    const img = await image("https://example.com/test.png", {
      crossOrigin: "anonymous",
    });

    // const hehe = await axios
    //   .get(
    //     // `https://api.pexels.com/v1/curated?page=1&per_page=20`,
    //     `http://artcooly.com/getArtistArtworkDetails.php?artistNicename=fritz-bleichert`,
    //     {
    //       crossdomain: true,
    //       // headers: {
    //       //   "Content-Type": "application/json",
    //       //   "Access-Control-Allow-Origin": "*",
    //       // },
    //       // headers: {
    //       //   Authorization: pexleskey,
    //       // },
    //     }
    //   )
    //   .then((res) => res.data);
    // .then((res) => res);
    console.log("d3img", img);
  };
  React.useEffect(() => {
    handleGetImages();
  }, []);
  return myimage;
};
export default useGetImage;
