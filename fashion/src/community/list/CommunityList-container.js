import { useRouter } from "next/router";
import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import * as S from "../../../src/community/list/CommunityList-styles";
import {FireFilledIcon, Searchbar, SearchbarInput} from "../searchbars/01/Searchbars01-styles";
import _ from "lodash";
import{v4 as uuidv4} from "uuid"
import {getDate} from "../../commons/libraries/utils";
import Cookies from "js-cookie"

// file2.js
// console.log(window.sharedVariable);  // 출력: Hello from file1!


const SECRET = "!@#$";


export default function CommunityList() {


    const router = useRouter();



    const [reqData, setReqData] = useState([])
    const [keyword, setKeyword] = useState("")

    const accessToken = Cookies.get('access_token')
    const refreshToken = Cookies.get('refresh_token')

    const[dataLoaded, setDataLoaded] = useState(false)




    useEffect(()=>{
        const fetchData = async () => {

            console.log("마운트가 완료되었디!")
            const result = await axios.get("http://127.0.0.1:8000/boardType/1/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                })
                .then((response) => {
                    setReqData([...response.data])


                    console.log(response.data);

                    setDataLoaded(true)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        if(accessToken && !dataLoaded){
            fetchData()
        }


    },[accessToken, dataLoaded])



    const printValue = useCallback(
        _.debounce((value) => console.log(value), 500),
        []
    );

    const handleChange = (event) => {
        printValue(event.target.value);
        setKeyword(event.target.value);
    };


    const onClickMoveToBoardNew = () => {
    router.push("/community/new");
  }

  let eventData ;

  const onClickMoveToBoardDetail = (event) => {
    router.push(`/community/${event.target.id}`);
    console.log(event.target.id)


  };


  const onChangeKeyword = (value) => {
    setKeyword(value);
  };


    return (
        <S.Wrapper>
            <Searchbar>
                <FireFilledIcon />
                <SearchbarInput
                    placeholder="검색어를 입력해 주세요."
                    onChange={handleChange}
                />
            </Searchbar>

            커뮤니티

            <S.TableTop />
            <S.Row>
                <S.C디olumnHeaderTitle>제목</S.C디olumnHeaderTitle>
                {/*<S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>*/}
                <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.Row>


            {reqData.filter(el => el.title.includes(keyword)).map(el => (
                    <S.Row key={el.boardID}>

                        <S.ColumnTitle id={el.boardID}  props = {eventData} onClick={onClickMoveToBoardDetail} >

                            {el.title
                                .replaceAll(keyword, `${SECRET}${keyword}${SECRET}`)
                                .split(SECRET)
                                .map((el, index) => (
                                    <S.TextToken key={uuidv4()} isMatched={keyword === el}>
                                        {el}
                                    </S.TextToken>
                                ))}
                        </S.ColumnTitle>
                       <S.ColumnBasic>{getDate(el.datetime)}</S.ColumnBasic>
                    </S.Row>

                ))}


            <S.TableBottom />
            <S.Footer>
                {/*  <Paginations01 refetch={props.refetch} count={props.count} />*/}
                <S.Button onClick={onClickMoveToBoardNew}>
                    {/*<S.PencilIcon src="/images/board/list/write.png" />*/}
                    게시물 등록하기
                </S.Button>
            </S.Footer>
        </S.Wrapper>
    );

}
