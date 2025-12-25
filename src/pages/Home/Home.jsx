import { SearchInput, Cards } from "@/component";
import { useEffect } from "react";
import { useDataStore } from "@/store";

const Home = () => {
  const fetchCSVData = useDataStore((state) => state.fetchCSVData);

  useEffect(() => {
    fetchCSVData();
  }, [fetchCSVData]);

  return (
    <>
      <SearchInput />
      <Cards />
    </>
  );
};

export default Home;
