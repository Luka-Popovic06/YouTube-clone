import { categories } from "../utils/Categories";

const Sidebar = ({ setVideoCategory, setActiveBtn, activeBtn }) => {
  return (
    <aside className="btn-box">
      {categories.map((category, index) => (
        <button
          className={
            category.name === activeBtn ? "btn-category-activ" : "btn-category"
          }
          onClick={() => {
            setVideoCategory(category.name);
            setActiveBtn(category.name);
          }}
          key={index}
        >
          {category.icon}
          <p>{category.name}</p>
        </button>
      ))}
    </aside>
  );
};
export default Sidebar;
