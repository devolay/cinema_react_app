import { Button, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import AliceCarousel from "react-alice-carousel";
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
  align-items: center;
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
    `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,1) 80%), url(${img_src})`};
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
  width: 90%;
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
  margin-top: 20px;
`;

export const Stars = styled(Rating)`
  .MuiRating-iconEmpty {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const StyledCarousel = styled(AliceCarousel)`
  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    color: white;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  width: 60%;
`;

export const ReservationButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 60px;
  border: 0px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  border-radius: 0px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
