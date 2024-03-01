import { useState } from "react";
import { Burger } from "./Burger/burger";
import { Menu } from "./Menu/menu";
import { Footer } from "../../common/Footer/footer";

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
