const Header = ({ theme, setTheme }) => {
  const themeSwitchHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="wrapper">
      <div>Where in the world?</div>
      <div>
        <button onClick={themeSwitchHandler}>Mode</button>
      </div>
    </div>
  );
};

export default Header;
