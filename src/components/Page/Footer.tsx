import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      style={{
        borderTop: "2px solid var(--main-border-color)",
        marginTop: "5vh",
        padding: "5vh",
        textAlign: "center",
        backgroundColor: "rgb(248, 248, 249)",
      }}
    >
      © Moonpig.com Limited 2023
    </footer>
  );
};

export default Footer;
