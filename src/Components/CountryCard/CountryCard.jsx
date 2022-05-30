const CountryCard = ({ country }) => {
  return (
    <div>
      <div>{country.name.common}</div>
      <div>{country.population}</div>
      <div>{country.region}</div>
      <div>{country.capital}</div>
      <br />
    </div>
  );
};

export default CountryCard;
