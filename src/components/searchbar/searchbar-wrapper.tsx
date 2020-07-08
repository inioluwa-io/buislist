import React from "react";
import SearchDatalist from "./search-datalist";
import "./style.scss";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

type TSearchbarWrapper = {
  searchProductStore: Function;
  searchLocation: Function;
  items: any;
  locations:any;
};

const SearchbarWrapper: React.FC<any> = ({
  searchProductStore,
  searchLocation,
  items,
  locations,
}) => {

  return (
    <form id="search-bar" action="/search">
      <SearchDatalist
        name="name"
        title="looking for"
        placeholder="Items or stores"
        items={items}
        onInputChange={searchProductStore}
      />

      <SearchDatalist
        title="location"
        name="location"
        placeholder="City or address"
        items={locations}
        onInputChange={searchLocation}
      />
      <button className="btn btn-md btn-primary">
        <Icon path={mdiMagnify} color="#fff" size={0.7} />
        Search
      </button>
    </form>
  );
};
export default SearchbarWrapper;
