import MainBasket from "./BasketCart";
import { FC } from "react";
import GridPage from "../../Components/GridPage";
import NavigationBar from "./NavigationBar";
import TeaCatalog from "./TeaCatalog";
import SupplementsCatalog from "./SupplementsCatalog";
import CatalogBasket from "./BasketCart";

const Catalog: FC = () => {
  return (
    <>
      <NavigationBar />
      <GridPage>
        <TeaCatalog />
        <SupplementsCatalog />
        <CatalogBasket />
      </GridPage>
    </>
  );
};
export default Catalog;
