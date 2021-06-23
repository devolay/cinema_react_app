import * as Types from "./RoomActions.types";
import * as Styles from "./RoomActions.styles";
import * as SharedStyles from "shared/styles";

const RoomActions = ({ confirmHandler, cancelHandler }: Types.Props) => {
  return (
    <Styles.ButtonContainer>
      <SharedStyles.StyledButton color="inherit" onClick={confirmHandler}>
        Confirm reservation
      </SharedStyles.StyledButton>
      <SharedStyles.StyledButton color="inherit" onClick={cancelHandler}>
        Cancel
      </SharedStyles.StyledButton>
    </Styles.ButtonContainer>
  );
};

export default RoomActions;
