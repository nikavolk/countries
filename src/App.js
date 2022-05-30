import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Filter from "./Components/Filter/Filter";
import CountryList from "./Components/CountryList/CountryList";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    setRegions(() => [...new Set(country.map((country) => country.region))]);
  }, [country]);
  return (
    <div className="wrapper">
      <header>
        <Header theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          country={country}
          setFilteredResults={setFilteredResults}
          theme={theme}
        />
        <Filter
          country={country}
          setFilteredResults={setFilteredResults}
          regions={regions}
          theme={theme}
        />
        <CountryList
          setCountry={setCountry}
          filteredResults={filteredResults}
          theme={theme}
        />
      </main>
    </div>
  );
}

export default App;
