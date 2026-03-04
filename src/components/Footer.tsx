const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-5xl text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Lucas Joakinson | Desenvolvido com{" "}
          <span className="text-primary">React</span> &{" "}
          <span className="text-primary">TypeScript</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
