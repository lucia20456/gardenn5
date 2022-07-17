import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    // promesa que trae datos
  
    useEffect(() => {
      const traerDatos = new Promise((resolve) => {
        const data = [
          {
            id: 1,
            title: "Vespertine",
            category: "Buzos",
            price: 8590,
            pictureUrl:
              "https://static.dafiti.com.ar/p/vespertine-8293-117529-1-catalog-new.jpg"
          },
          {
            id: 2,
            title: "Buzo Emma 47 Street",
            category: "Buzos",
            price: 7500,
            pictureUrl:
              "https://static.dafiti.com.ar/p/47st-dft-8465-418397-1-catalog-new.jpg"
          },
          {
            id: 3,
            title: "Odas",
            category: "Buzos",
            price: 3700,
            pictureUrl:
              "https://static.dafiti.com.ar/p/odas-6612-897639-1-catalog-new.jpg"
          },
  
          {
            id: 4,
            title: "Remera Lila Vespertine",
            category: "Remeras",
            price: 3000,
            pictureUrl:
              "https://static.dafiti.com.ar/p/vespertine-8213-250019-1-catalog-new.jpg"
          },
          {
            id: 5,
            title: "Remera Natural Wanama",
            category: "Remeras",
            price: 3145,
            pictureUrl:
              "https://static.dafiti.com.ar/p/wanama-7850-514949-1-product.jpg"
          },
          {
            id: 6,
            title: "Remera Beige Vespertine",
            category: "Remeras",
            price: 1700,
            pictureUrl:
              "https://static.dafiti.com.ar/p/vespertine-8684-257439-1-catalog-new.jpg"
          }
        ];
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
      traerDatos.then((data) => {
        console.log(data);
        setDatos(data);
      });
    }, [datos]);
  
    return (
      <div className="App">
        <ItemList items={datos} />
      </div>
    );
  }


export default ItemListContainer;