import moduleStyles from "../styles/Footer.module.scss";

const { footer } = moduleStyles;

const Footer = () => {
  return (
    <footer className={footer}>
        <p>Copyright Daniel Strayker Nowak</p>
        <p>All rights reserved, MIT license</p>
    </footer>
  );
};

export default Footer;