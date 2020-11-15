import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <h3 className="text-2xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-center mb-10 lg:pr-4 lg:w-1/2">
            © 2021 - Caio Augusto
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
