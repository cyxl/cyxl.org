const BlackNavbar = () => {
  return (
    <nav className="nav-black">
      <a href="/">
        <span className="hover-underline-black">Home</span>
      </a>{" "}
      /{" "}
      <a href="/about">
        <span className="hover-underline-black">About</span>
      </a>{" "}
      /{" "}
      <a href="/projects">
        <span className="hover-underline-black">Projects</span>
      </a>{" "}
      /{" "}
      <a href="/contact">
        <span className="hover-underline-black">Contact</span>
      </a>
    </nav>
  );
};

export default BlackNavbar;
