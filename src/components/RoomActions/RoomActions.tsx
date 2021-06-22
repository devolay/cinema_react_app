import * as Types from "./RoomActions.types";
import * as Styles from "./RoomActions.styles";

const RoomActions = ({ confirmHandler, cancelHandler }: Types.Props) => {
  return (
    <Styles.ButtonContainer>
      <Styles.Button onClick={confirmHandler}>Confirm reservation</Styles.Button>
      <Styles.Button onClick={cancelHandler}>Cancel</Styles.Button>
    </Styles.ButtonContainer>
  );
};

export default RoomActions;
