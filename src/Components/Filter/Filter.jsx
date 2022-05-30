const Filter = ({ country, setFilteredResults, regions }) => {
  const handleRegionChange = (e) => {
    setFilteredResults(country.filter((country) => country.region.includes(e)));
  };

  return (
    <div>
      <div>FILTER</div>
      <div>
        <select
          name="filter"
          id="regions"
          onChange={(e) => handleRegionChange(e.target.value)}
        >
          {/* List regions and sort alphabetically */}
          {regions.sort().map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
