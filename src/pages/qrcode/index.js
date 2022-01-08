import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "./styles";
import Button from "@mui/material/Button";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const QRCode = () => {
  const addStorage = () => {
    localStorage.setItem(
      "items",
      JSON.stringify([
        {
          id: 1,
          label: "Arroz",
          price: 5.99,
          marketId: 1,
        },
        {
          id: 2,
          label: "Feijao",
          price: 7.99,
          marketId: 1,
        },
        {
          id: 3,
          label: "Arroz",
          price: 4.99,
          marketId: 2,
        },
        {
          id: 4,
          label: "Feijao",
          price: 6.99,
          marketId: 2,
        },
        {
          id: 5,
          label: "Arroz",
          price: 6.99,
          marketId: 3,
        },
        {
          id: 6,
          label: "Feijao",
          price: 5.99,
          marketId: 3,
        },
      ])
    );
    localStorage.setItem(
      "markets",
      JSON.stringify([
        {
          id: 1,
          label: "Seu Carlos",
          distance: 2,
        },
        {
          id: 2,
          label: "Grande",
          distance: 3.5,
        },
        {
          id: 3,
          label: "Hyper",
          distance: 1.1,
        },
      ])
    );
    localStorage.setItem("list", []);
  };

  return (
    <>
      <h1 style={{ color: "#707070" }}>Adicionar Produtos</h1>
      <Container>
        <Card
          sx={{ minWidth: 250, border: "2px solid black", marginBottom: 5 }}
        >
          <CardMedia
            variant="outlined"
            component="img"
            height="250"
            image="https://res.cloudinary.com/dunz5zfpt/images/f_auto,q_auto/v1601782781/Qr-code-2-1_3577beee7/Qr-code-2-1_3577beee7.png"
          />
        </Card>
        <Button
          endIcon={<AddAPhotoIcon />}
          variant="contained"
          size="large"
          onClick={() => addStorage()}
        >
          Ler QR code
        </Button>
      </Container>
    </>
  );
};

export default QRCode;
