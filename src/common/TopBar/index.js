import { useState } from "react";
import { Footer } from "../../common/Footer/footer";
import { Menu } from "./Menu/menu";
import { Burger } from "./Burger/burger";

export const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
};
