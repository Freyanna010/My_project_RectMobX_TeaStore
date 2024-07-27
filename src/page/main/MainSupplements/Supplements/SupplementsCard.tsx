import classes from "./SupplementsCard.module.css";

export type Supplement = {
  id: string;
  name: string;
  img: string;
};
type Props = {
  collectionIndigenous: Array<Supplement>;
  id: string;
  addIndigenousManBasket: (id: string, collectionId: string) => void;
};

const SupplementsCard = (props: Props) => {
  return (
    <ul className={classes.indigenous_card}>
      {props.collectionIndigenous.map((i) => {
        const onAddHandler = () => {
          props.addIndigenousManBasket(i.id, props.id);
        };
        return (
          <li key={i.id}>
            <div className={classes.icon}>
              <img src={i.img} alt={i.name} />
            </div>
            <div className={classes.title}>
              <h3>
                {i.name}
                <button onClick={onAddHandler}>+</button>
              </h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SupplementsCard;
