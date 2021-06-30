import * as Types from "./ActorCard.types";
import * as Styles from "./ActorCard.styles";
import { BASE_PROFILE_URL } from "shared/constants";

const ActorCard = ({ actor }: Types.Props) => {
  return (
    <Styles.Card elevation={4}>
      <Styles.Avatar src={BASE_PROFILE_URL + actor.profile_path}></Styles.Avatar>
      <Styles.Bold>{actor.original_name}</Styles.Bold>
      <Styles.StyledText>{actor.character}</Styles.StyledText>
    </Styles.Card>
  );
};

export default ActorCard;
