

const Navigation = () => {
  return (
    <nav className="container  margin:0 auto;
  max-width: 1280px;">
      <div className="logo">
        <img src="../public/brand_logo.png" alt="logo"></img>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}

export default Navigation