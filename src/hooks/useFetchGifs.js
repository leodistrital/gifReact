/** @format */

import { useEffect, useState } from "react";
import { getGifs } from "../helper/getGifs";

export const useFetchGifs = (categoria) => {
	const [state, setstate] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(categoria).then((imgs) => {
			setstate({
				data: imgs,
				loading: false,
			});
		});
	}, [categoria]);

	// console.log(state)
	return state;
};
