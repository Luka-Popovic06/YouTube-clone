import { FaYoutube } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = ({ setVideoCategory, setSearch, search }) => {
  return (
    <nav>
      <div>
        <FaYoutube className="youtube-icon" />
        <p>YouTube</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setVideoCategory(search);
          setSearch("");
        }}
      >
        <input
          type="text"
          id="text-inp"
          name="text-inp"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <IoSearchSharp className="search-icon" />
        </button>
      </form>
    </nav>
  );
};
export default Navbar;
