import * as Types from "./RoomBar.types";
import * as Styles from "./RoomBar.styles";
import PriceInfo from "../PriceInfo/PriceInfo";
import RoomActions from "components/RoomActions/RoomActions";

const RoomBar = ({ price, confirmHandler, cancelHandler }: Types.Props) => {
  return (
    <Styles.InfosContainer>
      <PriceInfo price={price} />
      <RoomActions confirmHandler={confirmHandler} cancelHandler={cancelHandler} />
    </Styles.InfosContainer>
  );
};

export default RoomBar;
