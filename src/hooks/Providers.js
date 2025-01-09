import React from "react";
import { PedidosProvider } from "./usePedidos";

const Providers = ({ children }) => (
  <PedidosProvider>{children}</PedidosProvider>
);

export default Providers;
