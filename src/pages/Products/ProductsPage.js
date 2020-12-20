import React from "react";
import {
  Section,
  ContainerProducto,
  Button,
  ContainerPage,
  ContainerPager,
} from "./styles";
import { FaPlus, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Inputs } from "../../components/Generales";
import { Products } from "../../components/Products";
import Imgs from "../../img/producto3.jpg";
import Imgs1 from "../../img/producto1.jpg";
import Imgs2 from "../../img/producto2.jpg";
import Imgs4 from "../../img/producto4.jpg";

const JsonProducts = [
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs1,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs2,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs4,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs2,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs1,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs2,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs4,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs1,
  },
  {
    Title: "Paleta",
    Description: "Esta buena",
    Price: "2.900",
    Img: Imgs4,
  },
];

const Buttons = () => {
  return (
    <Button>
      <FaPlus />
    </Button>
  );
};

export const ProductsPage = () => {
  return (
    <ContainerPage>
      <div>
        <ContainerProducto>
          <h2>Productos</h2>
          <Inputs type="text" placeholder="Buscar Producto" />{" "}
        </ContainerProducto>
        <ContainerPager>
          <FaArrowLeft />
          <p>Página 1 de 20</p>
          <FaArrowRight />
        </ContainerPager>
        <Section>
          {JsonProducts.map((Elemento) => {
            return <Products {...Elemento} />;
          })}
        </Section>
      </div>
      <Buttons />
    </ContainerPage>
  );
};
