import styled from "styled-components";

// export const List = styled.li`
//   text-decoration: none;
//   list-style: none;
//   displat: flex;
//   margin-right: 10px;
//   margin-top: 22px;
// `;
export const CardDiv = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 20px;
  margin-bottom: 30px;
  background: linear-gradient(
    to bottom,
    #471ca9 100%,
    #5736a3 100%,
    #4b2a99 100%
  );
`;
export const CardImg = styled.img`
  width: 308px;
  height: 168px;
  padding-left: 30px;
  padding-top: 30px;
`;

export const CardLine = styled.div`
  width: 380px;
  height: 8px;
  background: linear-gradient(to bottom, #ebd8ff, #ae7be3);
  margin-top: 65px;
  position: absolute;
  z-index: 0;
  top: 190px;
`;
export const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const DivImg = styled.div`
  width: 80px;
  height: 80px;
  z-index: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgb(235, 216, 255) 0px 0px 0px 4px,
    rgb(174, 123, 227) 0px 0px 0px 8px;
  object-fit: cover;
  background: linear-gradient(
    to bottom,
    #471ca9 100%,
    #5736a3 100%,
    #4b2a99 100%
  );
`;
export const UlText = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;
export const LiCard = styled.li`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  list-style-type: none;
  color: #ebd8ff;
  margin-top: 20px;
`;
export const BtnCard = styled.button`
  background-color: #ebd8ff;
  width: 196px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
`;
export const BtnText = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 18px;
`;
