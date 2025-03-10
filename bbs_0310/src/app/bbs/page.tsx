"use client"

import BbsTr from "@/component/bbsTr";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {

    // 게시글 타입 정의
    interface BbsItem {
        b_idx: number;
        title: string;
        writer: string;
        write_date: string;
        hit: number;
    }

    const API_URL = "/api/v1/bbs";

    const [list, setList] = useState<BbsItem[]>([]);

    // 비동기식 통신을 수행하는 함수
    function getBbsList() {
        axios.get(API_URL).then((res) => {
            setList(res.data.data);
        });
    }

    // 한번만 호출하는 함수
    useEffect(() => {
        getBbsList();
    }, []);

    return(
        <div>
            <h2>게시판</h2>
            <hr/>
            <table className="t1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((row, index) => (
                        <BbsTr key={index} b_idx={row.b_idx} title={row.title}
                            writer={row.writer} write_date={row.write_date} hit={row.hit}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}