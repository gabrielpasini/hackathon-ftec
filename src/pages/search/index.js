import React, { useState, useEffect, forwardRef } from "react";
import { TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Container, ItemsContainer, CustomCard } from "./styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Search = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [list, setList] = useState([]);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSuccess(false);
    setOpenWarning(false);
  };

  const addToList = (itemAdded) => {
    if (itemAdded === list.find((item) => item.id === itemAdded.id)) {
      setOpenWarning(true);
    } else {
      const newList = list;
      newList.push(itemAdded);
      localStorage.setItem("list", JSON.stringify(newList));
      setList(newList);
      setOpenSuccess(true);
      setSearch("");
    }
  };

  useEffect(() => {
    const initialItems = localStorage.getItem("items");
    const initialMarkets = localStorage.getItem("markets");
    const initialList = localStorage.getItem("list");
    if (initialItems) setItems(JSON.parse(initialItems));
    if (initialMarkets) setMarkets(JSON.parse(initialMarkets));
    if (initialList) setList(JSON.parse(initialList));
  }, []);

  useEffect(() => {
    if (!search) setSearchedItems([]);
    if (search && items.length) {
      const newItems = items.filter((item) =>
        item.label.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedItems(newItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "90%", marginLeft: "2%" }}
        >
          Item adicionado a lista!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openWarning}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="warning"
          sx={{ width: "90%", marginLeft: "2%" }}
        >
          Este item ja esta na lista!
        </Alert>
      </Snackbar>
      <Container>
        <img
          alt=""
          style={{ width: 160, marginTop: 20 }}
          src="https://cdn.discordapp.com/attachments/929090833502830692/929293836063236096/Grupo_23.png"
        />
        <TextField
          style={{ width: "90%", marginTop: 30 }}
          label="Buscar"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {searchedItems.length > 0 && (
          <>
            <CustomCard
              style={{
                width: "86%",
                height: 60,
                marginTop: 10,
                backgroundColor: "#e8eef6",
              }}
            >
              <span style={{ width: "35%" }}>Produto</span>
              <span>Distancia</span>
              <span>Valor</span>
              <div style={{ width: 100 }} />
            </CustomCard>
            <ItemsContainer>
              {searchedItems.map((item, index) => (
                <CustomCard
                  style={{
                    width: "86%",
                    height: 60,
                    marginTop: 10,
                  }}
                  key={index}
                >
                  <span style={{ width: "35%" }}>{item.label}</span>
                  <span>
                    {
                      markets.find((market) => market.id === item.marketId)
                        .distance
                    }
                    km
                  </span>
                  <span>R${item.price}</span>
                  <Button
                    onClick={() => addToList(item)}
                    style={{ width: 100 }}
                    variant="contained"
                  >
                    Adicionar
                  </Button>
                </CustomCard>
              ))}
            </ItemsContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default Search;
