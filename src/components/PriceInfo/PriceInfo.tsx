import * as Types from "./PriceInfo.types";
import * as Styles from "./PriceInfo.styles";

const PriceInfo = ({ price }: Types.Props) => {
  return (
    <Styles.PriceContainer>
      <Styles.Price>PRICE: </Styles.Price>
      <Styles.Label>{price.toPrecision(4)} $</Styles.Label>
    </Styles.PriceContainer>
  );
};

export default PriceInfo;
