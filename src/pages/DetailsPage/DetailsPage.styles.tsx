import { Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(Paper)`
  background-color: #29434e;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 20px;
  width: 80%;
`;

export const Cover = styled.img`
  width: 260px;
  height: 400px;
  border-top-left-radius: 5px;
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 900px;
  height: 220px;
`;

export const UpperContainer = styled.div<{ img_src: string }>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  flex-direction: row;
  height: 460px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  background-image: ${({ img_src }) =>
    `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(129,156,169,0.2) 74%,
    rgba(255,255,255,0.1) 100%), url(${img_src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  ::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px;
`;

export const LeftContainer = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 40%;
  margin-left: 30px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const StyledText = styled(Typography)`
  font-size: 14px;
  color: white;
  margin-right: 10px;
`;

export const Bold = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
  color: white;
  flex-wrap: wrap;
`;

export const TitleHeader = styled(Bold)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 22px;
  color: white;
  margin-right: 40px;
`;

export const CrouselHeader = styled(Bold)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  font-size: 22px;
  color: white;
  margin-right: 40px;
  margin-bottom: 20px;
  margin-left: 45px;
`;

export const Stars = styled(Rating)`
  .MuiRating-iconEmpty {
    color: rgba(255, 255, 255, 0.4);
  }
`;
