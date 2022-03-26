import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";

type Image = {
  breeds: [];
  categories: [];
  height: number;
  id: string;
  url: string;
  width: number;
};
export type MainProps = {
  category: number | undefined;
};
export const Main = ({ category }: MainProps) => {
  const [images, setImages] = useState<[]>();
  useEffect(() => {
    axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${category}`
      )
      .then((res) => {
        setImages(res.data);
      });
  });

  return (
    <div className="main">
      {images?.map((image: Image, index) => (
        <img
          key={index}
          src={image.url}
          width={image.width}
          height={image.height}
          alt=""
        ></img>
      ))}
    </div>
  );
};
