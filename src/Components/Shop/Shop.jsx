import React from "react";
import Cards from "./../Shared/Cards";
import { FaFilter } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";


const Menu = () => {
  const { data: menu , isLoading } = useQuery({
    queryKey: "menu",
    queryFn: async () => {
      const response = await fetch(`https://task-backend-sigma.vercel.app/bags`);
      const data = await response.json();
      return data;
    },
  });

  const [filteredItems, setFilteredItems] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [sortOption, setSortOption] = React.useState("default");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(8); // Number of items to display per page

  React.useEffect(() => {
    setFilteredItems(menu || []);
  }, [menu]);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered || []);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu || []);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) return <div className="lg:my-80 my-72 flex items-center justify-center"><span className=" text-xl">Loading</span><span className="loading loading-ball loading-xs"></span>
  <span className="loading loading-ball loading-sm"></span>
  <span className="loading loading-ball loading-md"></span>
  <span className="loading loading-ball loading-lg"></span></div>;
  
  return (
    <div>
      {/* menu banner */}
      <div className=" bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of <span className="text-green-400">Awsome Bags</span>
            </h2>
          </div>
        </div>
      </div>

      {/* menu shop  */}
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          
           {/* all category buttons */}
          <div className="flex mx-4 flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("Tote Bag")}
              className={selectedCategory === "Tote Bag" ? "active" : ""}
            >
              Tote Bag
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

            {/* filter options */}
          <div className="flex mx-4 justify-end mb-4 rounded-sm">
            <div className="bg-black p-2 ">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default"> Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <div className=" mx-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

       {/* Pagination */}
       <div className="flex justify-center my-8">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green-400 text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
