import { useEffect } from "react";
import { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoryContext = createContext({
  categoriesMap: [],
})


export const CategoryProvider = ({ children }) => {
  // eslint-disable-next-line
  const [categoriesMap, setCategoriesMap] = useState([]) 

  useEffect(()=> {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  const value = {categoriesMap, setCategoriesMap}
  return <CategoryContext.Provider value={value}>{ children }</CategoryContext.Provider>
}
