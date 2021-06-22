import * as Types from "./RoomInfo.types";
import * as Styles from "./RoomInfo.styles";
import PriceInfo from "./../PriceInfo/PriceInfo";

const RoomInfo = ({ price }: Types.Props) => {
  return (
    <Styles.InfosContainer>
      <Styles.InfoContainer>
        <PriceInfo price={price} />
      </Styles.InfoContainer>
    </Styles.InfosContainer>
  );
};

export default RoomInfo;
