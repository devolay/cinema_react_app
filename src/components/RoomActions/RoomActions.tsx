import * as Types from "./RoomActions.types";
import * as Styles from "./RoomActions.styles";

const RoomActions = ({ confirmHandler, cancelHandler }: Types.Props) => {
  return (
    <Styles.ButtonContainer>
      <Styles.StyledButton color="inherit" onClick={confirmHandler}>
        Confirm reservation
      </Styles.StyledButton>
      <Styles.StyledButton color="inherit" onClick={cancelHandler}>
        Cancel
      </Styles.StyledButton>
    </Styles.ButtonContainer>
  );
};

export default RoomActions;
