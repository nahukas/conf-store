import { MutableRefObject } from 'react';

interface SearchProps {
  search: string;
  searchInput: MutableRefObject<HTMLInputElement>;
  handleSearch: () => void;
}

const Search: React.FC<SearchProps> = ({
  search,
  searchInput,
  handleSearch
}) => {
  return (
    <div className='Search'>
      <input
        type='text'
        ref={searchInput}
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
