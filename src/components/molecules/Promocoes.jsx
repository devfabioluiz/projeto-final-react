import React, { useState, useEffect } from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import './Promocoes.css'
import axios from 'axios';

const Promocoes = () => {
  const listaPromocoes = [
    {
      title: 'Camiseta 1',
      text: 'Sobre a camiseta 1',
      price: 200.90,
      description: 'camisa 1',
      image: "https://www.foxtonbrasil.com.br/_next/image?url=https%3A%2F%2Ffoxton.vtexassets.com%2Farquivos%2Fids%2F600335%2F710265_00449_1-CAMISETA-MINIMAL.jpg%3Fv%3D638690112300430000&w=384&q=90"
    },
    {
      title: 'Camiseta 2',
      text: 'Sobre a camiseta 2',
      price: 200.90,
      description: 'camisa 2',
      image: "https://www.foxtonbrasil.com.br/_next/image?url=https%3A%2F%2Ffoxton.vtexassets.com%2Farquivos%2Fids%2F600335%2F710265_00449_1-CAMISETA-MINIMAL.jpg%3Fv%3D638690112300430000&w=384&q=90"
    },
    {
      title: 'Camiseta 3',
      text: 'Sobre a camiseta 3',
      price: 200.90,
      description: 'camisa 3',
      image: "https://www.foxtonbrasil.com.br/_next/image?url=https%3A%2F%2Ffoxton.vtexassets.com%2Farquivos%2Fids%2F600335%2F710265_00449_1-CAMISETA-MINIMAL.jpg%3Fv%3D638690112300430000&w=384&q=90"
    },
  ]

  const [imagens, setImagens] = useState(null);

  useEffect(() => {
      axios.get('https://picsum.photos/v2/list')
      .then((response) => setImagens(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
        {imagens?.map((item, index) => (
          <div key={index}>
            <MultiActionAreaCard url={item.download_url} 
            title={item.author}
            text={item.author}
            />
          </div>
        ))}
      </>
    );
};


export default Promocoes;