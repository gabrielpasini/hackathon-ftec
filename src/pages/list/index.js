import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Container } from "./styles";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const List = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Container>
      <div>
        <h1 style={{ color: "#707070" }}>Lista de Produtos</h1>
      </div>
      <Accordion
        style={{ width: "100%" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Mercado 1
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Checkbox {...label} defaultChecked />
          <span style={{ marginRight: "50%" }}>Arroz</span>
          <span>R$5.99</span>
        </AccordionDetails>
        <AccordionDetails>
          <Checkbox {...label} defaultChecked />
          <span style={{ marginRight: "50%" }}>Feijao</span>
          <span>R$4.99</span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ width: "100%" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Mercado 2
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Checkbox {...label} defaultChecked />
          <span style={{ marginRight: "50%" }}>Arroz</span>
          <span>R$5.99</span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ width: "100%" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Mercado 3
          </Typography>
          <Typography sx={{ color: "text.secondary" }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Checkbox {...label} defaultChecked />
          <span style={{ marginRight: "50%" }}>Arroz</span>
          <span>R$5.99</span>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ width: "100%" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Mercado 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Checkbox {...label} defaultChecked />
          <span style={{ marginRight: "50%" }}>Arroz</span>
          <span>R$5.99</span>
        </AccordionDetails>
      </Accordion>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Valor total: </span>
        <TextField
          value={28.95}
          disabled
          id="outlined-basic"
          variant="outlined"
        />
      </Box>
    </Container>
  );
};

export default List;
