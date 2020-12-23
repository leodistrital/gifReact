/** @format */

export const getGifs = async (categoria) => {
	const url = `http://api.giphy.com/v1/gifs/search?api_key=caaoPy4odLlSnGVLHNhSXB6kkPf8ow9y&q=${encodeURI(
		categoria
	)}&limit=10`;

	const respuesta = await fetch(url);
	const { data } = await respuesta.json();

	// console.log(data)
	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		};
	});

	// console.log(gifs);

	return gifs;
	//setimges(gifs);

	//console.log(data)
	//console.log(gifs)
};
