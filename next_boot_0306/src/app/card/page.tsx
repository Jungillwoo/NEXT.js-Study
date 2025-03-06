'use client';
import MyCard from "@/component/myCard";
import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
    const API_URL = "/board/list?bname=BBS";

    const [list, setList] = useState([]);

    // 서버를 비동기식 통신을 수행하는 함수정의
    function callAPI() {
        axios.get(API_URL).then((response) => {
            setList(response.data.ar);
            //console.log(response.data)
        });
    }

    // 첫 렌더링 시 한 번만 실행
    useEffect(() => { // 익명 함수 중괄호로 열면 return을 안쓰는 의미
        callAPI();
    }, []); // 두번째 인자로 빈 배열을 추가하여 무한 실행 방지

    return(
        <div className="list-bg">
            <h2>Card Page</h2>
            <Divider/>
            <MyCard ar={list}/>
        </div>
    );
}