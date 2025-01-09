import Backdrop from "@mui/material/Backdrop";
import React from "react";
import useLoadingStore from "../../hooks/useLoadingStore";
import { ContainerLoading, EscritaLoading, Spinner } from "./styles";

export default function ModalLoading() {
  const { isLoading } = useLoadingStore();

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <ContainerLoading>
        <Spinner />
        <EscritaLoading>Processando informações...</EscritaLoading>
      </ContainerLoading>
    </Backdrop>
  );
}
