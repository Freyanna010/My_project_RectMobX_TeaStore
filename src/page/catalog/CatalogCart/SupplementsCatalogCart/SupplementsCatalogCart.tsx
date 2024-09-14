import classes from "./SupplementsCatalogCart.module.css";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import teaStore from "../../../../stores/teaStore";
import Button from "../../../../Components/Button";


const SupplementsCatalogCart: FC = () => {
  return (
    <div className={classes.man_basket}>
      <div className={classes.indigenous}>
        {/* TODO:добавить компоненты? */}
        <ul>
          <h2 className={classes.title}> supplements: </h2>
          {teaStore.mainSupplementsBasket.map((supplement) => {
            const onRemoveHandler = () => {
              // TODO:перенести в Store
              supplement.isAdd = false;
              teaStore.removeSupplementsOnAddButton();
              teaStore.changeIsEnoughSupplements();
            };
            return (
              <li key={supplement.id}>
                <div>
                  <h3>
                    {supplement.name}
                    <Button
                      onClick={onRemoveHandler}
                      type={"primary"}
                      shape={"round"}
                      size={"large "}
                    >
                      <img src="./../../../../public/remove_button.png" />
                    </Button>
                  </h3>
                </div>
                <div className={classes.icon}>
                  <img
                    src={supplement.img}
                    alt={supplement.name}
                    onClick={onRemoveHandler}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default observer(SupplementsCatalogCart);
