import React, { useState } from "react";
import { CategoriaAdd } from "./componentes/CategoriaAdd";
import { GifGrid } from "./componentes/GifGrid";


const GifExpertApp = () => {
	const [categorias, setcategorias] = useState(["goku"]);
	
	const HandleAdd = () => {
		setcategorias(["Superman", ...categorias]);
	};

	return (
		<>
			<h2>Gif Expert App </h2>
			<CategoriaAdd AgregarCategoria={setcategorias} />
			<hr />

			{/* <button onClick={HandleAdd}>Otra Categoria</button> */}
			<ol>
                {
                    categorias.map((categoria) => (
                        <GifGrid key={categoria} categoria={categoria} />
                    ))
                }
			</ol>
		</>
	);
};

export default GifExpertApp;
