import * as Types from "./PriceInfo.types";
import * as Styles from "./PriceInfo.styles";

const PriceInfo = ({ price }: Types.Props) => {
  return (
    <Styles.Card>
      <Styles.Label>{price} $</Styles.Label>
      <Styles.Price>PRICE</Styles.Price>
    </Styles.Card>
  );
};

export default PriceInfo;
