import classes from "./CatalogCart.module.css";
import teaStore from "../../../stores/teaStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import Button from "../../../Components/Button";
import userBasketStore from "../../../stores/userBasketStore";
import CardSupplementMainBasket from "./SupplementsCatalogCart";
import CartButton from "../../../Components/CartButton";
import TeaCatalogCart from "./TeaCatalogCart";
import SupplementsCatalogCart from "./SupplementsCatalogCart";

const CatalogCart: FC = () => {
  const onHandlerAddToCard = () => {
    userBasketStore.addTeaAndSupplementToUserBasket(
      teaStore.mainTeaBasket,
      teaStore.mainSupplementsBasket
    );
    teaStore.removeTeaOnAddButton();
    teaStore.removeSupplementsOnAddButton();
  };

  return (
    <div className={classes.man_basket}>
      <div>
        <CartButton />
        <TeaCatalogCart />
        <SupplementsCatalogCart />
      </div>

      {teaStore.mainTeaBasket.length > 0 &&
        teaStore.mainSupplementsBasket.length > 0 && (
          <div className={classes.buttons}>
            <Button
              type={"primary"}
              shape={"square"}
              size={"large "}
              onClick={onHandlerAddToCard}
            >
              add to card
            </Button>
            <h2> Price: {teaStore.priceProductMainBasket}</h2>
          </div>
        )}
    </div>
  );
};

export default observer(CatalogCart);
