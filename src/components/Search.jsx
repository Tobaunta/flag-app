import "./Search.css";

export default function Search({ filter, setFilter }) {
  const changeSearch = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="search">
      <input id="search" type="text" placeholder="" onChange={changeSearch} autoComplete="off"/>
      <label>Search for a country</label>
    </div>
  );
}
