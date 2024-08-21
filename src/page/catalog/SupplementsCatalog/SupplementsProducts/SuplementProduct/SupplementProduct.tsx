import classes from "./SupplementProduct.module.css";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import teaStore from "../../../../../stores/teaStore";
import Button from "../../../../../Components/Button";
import { CollectionSupplements, Supplement } from "../../../../../models";

type Props = {
  supplementId: string;
  id: string;
  img: string;
  name: string;
  isAdd: boolean;
  price: null;
};

//TODO:упрастить пропс тайп?
// type SupplementId = Pick<CollectionSupplements, "id">;
// type Props = SupplementId | Supplement;

const SupplementProduct: FC<Props> = (props) => {
  const onAddHandler = () => {
    teaStore.addSupplementToMainBasket(props.supplementId, props.id);
    teaStore.changeIsEnoughSupplements();
    teaStore.getSupplementPrice();
  };

  return (
    <div>
      <div>
        <div className={classes.icon}>
          <img
            src={props.img}
            alt={props.name}
            className={props.isAdd ? classes.isAdd : ""}
          />
        </div>
        <div className={classes.title}>
          <h3>
            {props.name}
            <p>{props.price} €</p>
            <Button
              onClick={onAddHandler}
              type={"primary"}
              shape={"round"}
              size={"large "}
            >
              <img src="./../../../../public/add_button.png" />
            </Button>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default observer(SupplementProduct);
