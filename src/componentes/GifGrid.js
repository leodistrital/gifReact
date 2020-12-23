import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
	
	const {data :images ,loading} = useFetchGifs(categoria);
	// console.log(data)
	// console.log(loading)

	return (
		<>
		<h3>{categoria}</h3>
		{ loading && 'Cargando...'  }
		<div className='card-grid' >
			{images.map((gif) => (
				<GifGridItem key={gif.id} {...gif} />
				))}
		</div>
		</>
	);
};
