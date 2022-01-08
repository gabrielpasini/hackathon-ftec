import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Container, Navigation } from "./styles";
import Search from "./pages/search";
import List from "./pages/list";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QRCode from "./pages/qrcode";
import Profile from "./pages/profile";

export default function App() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/lista" element={<List />} />
        <Route path="/qrcode" element={<QRCode />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
      <Navigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction component={Link} to="/" icon={<SearchIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/lista"
          icon={<ShoppingCartIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/qrcode"
          icon={<QrCodeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/perfil"
          icon={<PersonIcon />}
        />
      </Navigation>
    </Container>
  );
}
