'use client'
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import axios from "axios";
import Link from "next/link";

// 게시글 데이터 타입
interface BbsData {
    b_idx: number;
    title: string;
    writer: string;
    content: string;
    write_date: string;
    hit: number;
}

// params 타입 정의 
interface Bbs {
    params: {idx: string};
}

export default function Page( {params}:Bbs) {
    const {idx} = params;
    const API_URL = `/api/v1/bbs/${idx}`;

    const [data, setData] = useState<BbsData>();

    function getBbs() {
        axios.get(API_URL).then((res) => {
            setData(res.data.data);
        })
    }

    useEffect(() => {
        getBbs();
    }, [idx]); // idx 값이 변경될 때만 실행

    return(
        <main className={styles.main}>
            <h1>상세보기{idx}</h1>
            <hr/>
            <table className="t1">
                <tbody>
                    <tr>
                        <th>번호</th>
                        <td colSpan={3}>{idx}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>{data?.title}</td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td>{data?.writer}</td>
                        <th>조회수</th>
                        <td>{data?.hit}</td>
                    </tr>
                    <tr>
                        <th>등록일</th>
                        <td colSpan={3}>{data?.write_date}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>{data?.content}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <Link href="/bbs">뒤로</Link>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </main>
    );
}