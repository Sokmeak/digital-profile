const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
