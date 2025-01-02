
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories, cleanUpCategories } from "@store/categories/CategoriesSlice";

function useCategories() {
    const despatch = useAppDispatch();
    const { records, loading, error } = useAppSelector(
      (state) => state.categories
    );
  
    useEffect(() => {
   
     const proems =   despatch(actGetCategories());
      return () => {
        proems.abort();
        despatch(cleanUpCategories())
      }
    }, [despatch]);
  return {loading , error , records}
}

export default useCategories