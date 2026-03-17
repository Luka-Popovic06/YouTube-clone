import { FaYoutube } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  setVideoCategory,
  setSearch,
  search,
  setShowChannel,
  setActiveBtn,
  setLoading,
}) => {
  const navigate = useNavigate();

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
          navigate("/");
          setShowChannel(true);
          setActiveBtn("New");
        }}
      >
        <input
          type="text"
          id="text-inp"
          name="text-inp"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">
          <IoSearchSharp className="search-icon" />
        </button>
      </form>
    </nav>
  );
};
export default Navbar;
