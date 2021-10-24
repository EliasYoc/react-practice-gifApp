import React from "react";
import useFetchGif from "../hooks/useFetchGif";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGif(category);
  return (
    <>
      <h3>{category}</h3>
      <section className="card-grid">
        {loading && <h5>Cargando...</h5>}
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </section>
    </>
  );
};
