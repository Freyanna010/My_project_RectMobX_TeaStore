import { FC } from "react";
import GridPage from "../../Components/GridPage";
import TeaCatalog from "./TeaCatalog";
import SupplementsCatalog from "./SupplementsCatalog";
import CatalogBasket from "./CatalogCart";
import CatalogNavigation from "./CatalogNavigation";

const Catalog: FC = () => {
  return (
    <>
      <CatalogNavigation />
      <GridPage>
        <TeaCatalog />
        <SupplementsCatalog />
        <CatalogBasket />
      </GridPage>
    </>
  );
};
export default Catalog;
