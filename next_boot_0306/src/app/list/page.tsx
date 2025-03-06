'use client';

import BoardTable from "@/component/boardTable";
import CustomPagination from "@/component/pagination";
import { Divider, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Page() {
    const API_URL = "/board/list?bname=BBS";

    const [posts, setPosts] = useState([]);
    const [cPage, setCPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    // 게시글 데이터 불러오기 함수
    const fetchPosts = async (page: number) => {
        try {
            const response = await axios.get(`${API_URL}&cPage=${page}`);
            setPosts(response.data.ar);
            setTotalPage(response.data.totalPage);  // 백엔드에서 전체 페이지 수 반환한다고 가정
        } catch (error) {
            console.error("게시판 데이터 불러오기 오류:", error);
        }
    };

    // 첫 렌더링 시 실행
    useEffect(() => {
        fetchPosts(cPage);
    }, [cPage]);

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <h2>게시판</h2>
            <Divider />
            <BoardTable posts={posts} />
            <CustomPagination cPage={cPage} totalPage={totalPage} onPageChange={setCPage} />
            <Button variant="contained" color="primary" sx={{ float: "right", marginTop: "10px" }}>글쓰기</Button>
        </div>
    );
}
