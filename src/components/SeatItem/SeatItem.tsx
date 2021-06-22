import * as Types from "./SeatItem.types";
import * as Styles from "./SeatItem.styles";
import { BsFillPersonFill } from "react-icons/bs";

const SeatItem = ({ seatInfo, clickHandler }: Types.Props) => {
  return (
    <Styles.Container
      isBusy={!!seatInfo.userId}
      notConfirmed={seatInfo.notConfirmed}
      onClick={() => clickHandler(seatInfo)}
    >
      <BsFillPersonFill size={35} />
    </Styles.Container>
  );
};

export default SeatItem;
