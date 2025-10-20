import styles from "./CocktailContainer.module.css";
import CocktailCard from "./CocktailCard";
import CocktailModal from "./CocktailModal";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";

function CocktailContainer({ cocktailList, isLoading }) {
  const [modalCocktail, setModalCocktail] = useState({});
  let [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const itemsPerPage = 8;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(Object.keys(cocktailList).length / itemsPerPage);

  // redirect to home page if invalid page # is entered
  useEffect(() => {
    // only fire once pages are loaded
    if (totalPages > 0) {
      if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
        setSearchParams(1);
        navigate("/");
      }
    }
  }, [currentPage, totalPages, navigate, setSearchParams]);

  function handlePreviousPage() {
    setSearchParams(`?page=${currentPage - 1}`);
  }

  function handleNextPage() {
    setSearchParams(`?page=${currentPage + 1}`);
  }

  function hanldeCardClick(cocktailItem) {
    setModalCocktail(cocktailItem);
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={styles.container}>
        {cocktailList.length < 1 || isLoading ? (
          <p>Loading Cocktails...</p>
        ) : (
          cocktailList.slice(startIndex, endIndex).map((cocktailItem) => {
            return (
              <CocktailCard
                key={cocktailItem.idDrink}
                cocktail={cocktailItem}
                onClick={hanldeCardClick}
              />
            );
          })
        )}

        <CocktailModal
          cocktail={modalCocktail}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      </div>

      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {currentPage} 🍸 {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </>
  );
}
export default CocktailContainer;
