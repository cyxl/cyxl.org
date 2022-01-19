const RedNavbar = () => {
  return (
    <nav className="nav-red">
      <a href="/">
        <span className="hover-underline-red">Home</span>
      </a>{" "}
      /{" "}
      <a href="/about">
        <span className="hover-underline-red">About</span>
      </a>{" "}
      /{" "}
      <a href="/projects">
        <span className="hover-underline-red">Projects</span>
      </a>{" "}
      /{" "}
      <a href="/contact">
        <span className="hover-underline-red">Contact</span>
      </a>
    </nav>
  );
};

export default RedNavbar;
