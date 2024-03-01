import { Divider, StyledBurger } from "./styled";

export const Burger = ({ open, setOpen }) => {
  return (
    <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Divider />
    </>
  );
};
