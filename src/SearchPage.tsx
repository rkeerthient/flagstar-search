import { SearchBar } from "@yext/search-ui-react";

const SearchPage = () => {
  const handleSearch = (searchEventData: {
    verticalKey?: string;
    query?: string;
  }) => {
    const { query } = searchEventData;
    if (query)
      window.open(
        "https://220fddac-cbd.sandboxlandingpagespreview.com/?query=" + query,
        "_blank"
      );
  };
  return (
    <div>
      <div className="fixed w-full px-28 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search here..."
        ></SearchBar>
      </div>
    </div>
  );
};

export default SearchPage;
