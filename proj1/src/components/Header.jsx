import { Link } from "react-router-dom";

const Header = () => {
  const navigation = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Brands",
      path: "/#brands",
    },
    {
      name: "Services",
      path: "/#services",
    },
  ];

  return (
    <nav>
      <h1>Rahul.</h1>
      <main>
        {navigation.map((item, index) => (
          <Link to={item.path} key={index}>
            {item.name}
          </Link>
        ))}
      </main>
    </nav>
  );
};

export default Header;
