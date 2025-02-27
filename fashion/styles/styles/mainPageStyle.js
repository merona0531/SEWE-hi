import styled from "@emotion/styled";
import backgroundImage from '../../Login_mks/fashion/public/images/backgroundImg.jpg'
export const Wrapper = styled.div`
  width: 1250px;
  height: 1300px;
  font-family: sans-serif;
  background-image: url("images/backgroundImg.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  //background-attachment: fixed;
  //&::before {
  //  content: "";
  //  position: absolute; /* Wrapper 내부에 절대 위치 지정 */
  //  top: -400px;
  //  left: -500px;
  //  width: 1000px;
  //  height: 1000px;
  //  background: radial-gradient(circle, rgba(255, 148, 255, 0.35), rgb(255, 255, 255));
  //  border-radius: 50%; /* 원 모양으로 만들기 */
  //  z-index: -1; /* 다른 요소들보다 뒤로 이동 */
  //}
`
// export const Title = styled.div`
//width: 200px;
//height: 80px;
//background-color: #f8e5d5;
//float: left;
//margin-left: 500px;
// `
export const SearchInput = styled.input`
  width: 290px;
  height: 23px;
  float: left;
  margin-top: 112px;
  margin-left: 50px;
  background-color: rgba(255, 255, 255, 0.79);
  border: 2px solid rgba(197, 131, 184, 0.58);
  border-radius: 5px;
  font-size: 12px;
  padding-left: 7px;
  padding-top: 3px;
`
export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(255, 146, 146, 0);
  z-index: 1000;
  
`;

export const ModalContent = styled.div`
  background: #fff9ff;
  width: 700px;
  height: 300px;
  margin-top: 150px;
  margin-left: 50px;
  border-radius: 8px;
  border: 2px solid rgba(197, 131, 184, 0.58);
  font-size: 13px;
`;
export const RecentSearchWrapper = styled.div`
  margin-left: 20px;
  width: 650px;
  height: 57px;
  overflow: hidden;
  //margin-bottom: 10px;
  margin-top: 20px;
  //background-color: red;
  margin-bottom: 3px;
`
export const RecentSearchText = styled.div`
  width: 100px;
  height: 20px;
  font-size: 13px;
  margin-bottom: 5px;
`
export const RecentSearchButton = styled.button`
  //width: 115px;
  height: 22px;
  float: left;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 10px;
  background-color: rgba(188, 133, 200, 0.5);
  border: none;
  border-radius: 10px;
  color: #2c1f14;
  padding: 0 10px;
  min-width: 50px;
  width: auto;
  cursor: pointer;

  &:hover {
    background-color: rgba(230, 128, 137, 0.47);
  }
`
export const TagWrapper = styled.div`
  width: 645px;
  height: 65px;
  //background-color: black;
  margin-left: 20px;
  //margin-top: 10px;
`
export const TagButtonWrapper = styled.div`
  width: 575px;
  height: 30px;
  //background-color: pink;
  overflow: hidden;
  float: left;
`
export const TagText = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
  //float: left;
`
export const TagButton = styled.button`
  float: left;
  //width: 70px;
  height: 22px;
  font-size: 12px;
  margin-right: 7px;
  margin-bottom: 10px;
  padding: 0 8px;
  min-width: 30px;
  width: auto;
  color: #4b3d36;
  background-color: rgba(230, 128, 137, 0.47);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(188, 133, 200, 0.5);
  }
`
export const MoreTagButton = styled.button`
  float: right;
  width: 70px;
  height: 20px;
  font-size: 12px;
  background-color: rgba(234, 230, 226, 0);
  color: #564434;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const PopularSearchWrapper = styled.div`
  //background-color: gainsboro;
  width: 390px;
  height: 150px;
  margin-left: 20px;
  overflow: hidden;
`
export const PopularSearchText = styled.div`
  font-size: 13px;
  margin-bottom: 7px;
`
export const PopularSearchItemsWrapper = styled.div`
  //background-color: aquamarine;
  width: 600px;
  height: 30px;
  margin-left: 5px;
`
export const Rate = styled.div`
  font-size: 13px;
  float: left;
  text-align: center;
  width: 21px;
  margin-top: 6px;
`
export const PopularSearchItems = styled.button`
  //width: 300px;
  height: 30px;
  font-size: 13px;
  float: left;
  text-align: left;
  border: none;
  background-color: rgba(234, 230, 226, 0);
  color: #4b3d36;
  min-width: 50px;
  width: auto;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Title = styled.img`
  width: 220px;
  height: auto;
  margin-left: 150px;
  margin-top: 20px;
  float: left;
`

export const TopButton = styled.button`
  width: 80px;
  height: 30px;
  margin-top: 120px;
  margin-right: 15px;
  float: right;
  background-color: rgba(245, 219, 231, 0.63);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(232, 202, 239, 0.49);
  }
`
export const Top = styled.div`
  width: 1200px;
  height: 130px;
`
export const Divide = styled.div`
  width: 1200px;
  height: 2px;
  background-color: #b3a5b6;
  margin-top: 30px;
  margin-bottom: 20px;
`
export const Left = styled.div`
  //background-color: antiquewhite;
  width: 860px;
  height: auto;
  //padding-top: 30px;
  float: left;
  display: flex;
`
export const Right = styled.div`
  float: left;
  //background-color: aquamarine;
  width: 330px;
  height: 450px;
`
export const StylesWrapper = styled.div`
  //background-color: darkgrey;
  margin-left: 50px;
  width: 860px;
  height: 450px;
  //float: left;

`
export const CommunityWrapper = styled.div`
  //background-color: #efe4e4;
  border-right: 2px dotted #b2a4b5;
  border-top: 2px dotted #b2a4b5;

  width: 570px;
  height: 650px;
  margin-left: 50px;
  float: left;
`
export const TradeWrapper = styled.div`
  //background-color: #e8d4c3;
  border-top: 2px dotted #b2a4b5;
  width: 570px;
  height: 650px;
  float: left;
`
export const StylesText = styled.h2`
  //background-color: white;
  margin-bottom: 20px;
  color: #c784b9;
`
export const Styles = styled.div`
  width: 170px;
  height: 350px;
  //background-color: #d3c7b9;
  float: left;
  margin-right: 20px;
  overflow: hidden;

`
export const StylesImg = styled.img`
  //max-width: 100%;
  max-height: 250px;
  //width: 170px;
  //background-color: red;
`
export const StylesUserImg = styled.img`
  float: left;
  margin-top: 15px;
  margin-left: 5px;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  object-fit: cover;
`
export const StylesUserName = styled.div`
  margin-left: 13px;
  margin-top: 17px;
  font-size: 15px;
  float: left;
`
export const ProfileWrapper = styled.div`
  //background-color: #efe4e4;
  width: 330px;
  height: 200px;
`
export const Bottom = styled.div`
  width: 1200px;
  //overflow: hidden;
  //&::before {
  //  content: "";
  //  position: absolute; /* Wrapper 내부에 절대 위치 지정 */
  //  top: 700px;
  //  left: 500px;
  //  width: 1000px;
  //  height: 1000px;
  //  background: radial-gradient(circle, rgba(255, 72, 75, 0.13), rgb(255, 255, 255));
  //  border-radius: 50%; /* 원 모양으로 만들기 */
  //  z-index: -1; /* 다른 요소들보다 뒤로 이동 */
  //}
`
export const Mid = styled.div`
`
export const WeatherWrapper = styled.div`
  width: 310px;
  height: 90px;
  border-radius: 15px;
  border: 5px solid #ede2e2;
  padding-left: 1px;
  padding-top: 12px;
`
export const StylesImgWrapper = styled.div`
  border-radius: 10px;
  width: 170px;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const StylesUserWrapper = styled.div`
  width: 170px;
  height: 40px;
  //background-color: black;
`
export const StylesTag = styled.button`
  font-size: 12px;
  color: #91526c;
  //margin-left: 5px;
  margin-top: 3px;
  float: left;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const StylesTagWrapper = styled.div`
  width: 150px;
  height: 30px;
  margin-left: 55px;
  //background-color: #8c7878;
`
export const ProfileText = styled.div`
  width: 320px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: #e4808e;
  margin-top: 20px;
  //background-color: darkslateblue;
`
export const ProfileUserWrapper = styled.div`
  width: 320px;
  height: 50px;
  //background-color: indianred;
`
export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  object-fit: cover;
  float: left;
`
export const ProfileName = styled.div`
  float: left;
  margin-left: 30px;
  margin-top: 17px;
  font-size: 20px;
  color: #332126;
  //font-weight: bold;
`
export const ProfileEdit = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 15px;
  margin-left: 25px;
  background-color: rgba(245, 219, 231, 0.58);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(232, 202, 239, 0.51);
  }
`
export const WeatherText = styled.div`
  width: 320px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: #e4808e;
  margin-top: 20px;
  //background-color: darkslateblue;
`
export const TemInfo = styled.div`
  width: 110px;
  height: 50px;
  // background-color: darkgray;
  font-size: 17px;
  margin-top: 10px;
  color: #311f20;
  float: left;
`
export const WeatherInfo = styled.div`
  width: 170px;
  height: 50px;
  // background-color: darkgray;
  font-size: 17px;
  margin-top: 10px;
  color: #311f20;
  float: right;
`
export const CommunityText = styled.div`
  width: 320px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: #d683a4;
  margin-top: 20px;
`
export const TradeText = styled.div`
  width: 320px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  color: #dc829b;
  margin-top: 20px;
  margin-left: 20px;
`
export const WeatherImg = styled.img`
  width: 35px;
  height: 35px;
  float: left;
  margin-top: 12px;
`
export const WeatherDetail = styled.div`
  float: left;
  margin-top: 15px;
  margin-left: 5px;
`