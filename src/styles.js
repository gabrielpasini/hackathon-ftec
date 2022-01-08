import styled from "styled-components";
import BottomNavigation from "@mui/material/BottomNavigation";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #e8eef6;
`;

export const Navigation = styled(BottomNavigation)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
