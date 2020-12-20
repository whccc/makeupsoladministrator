import React from "react";
import { Container, ContainerPage } from "./styles";
import { OrdersPending, OrdersDespachados } from "../../components/Orders";

export const OrdersPage = () => {
  return (
    <ContainerPage>
      <Container>
        <OrdersPending />
        <OrdersDespachados />
      </Container>
    </ContainerPage>
  );
};
