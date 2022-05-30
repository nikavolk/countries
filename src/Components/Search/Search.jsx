import { useEffect } from "react";

const Search = ({ country, setFilteredResults, searchTerm, setSearchTerm }) => {
  useEffect(() => {
    setFilteredResults(
      country.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, country]);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by country's name"
        />
      </form>
    </div>
  );
};

export default Search;
