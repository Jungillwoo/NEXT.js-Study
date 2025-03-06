'use client';

import { Button, Card, CardContent, Divider } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

// 게시글 데이터 타입(객체)
interface Post {
    b_idx: string;
    subject: string;
    writer: string;
    content: string;
    write_date: string;
}

// params 의 타입 정의
interface PageProps {
    params: {idx: string};
}

export default function Page( {params}:PageProps ) {
    const { idx } = params;  
    const API_URL = `/board/getBbs?b_idx=${idx}`;
    
    const [post, setPost] = useState<Post | null>(null);  // 게시글 데이터를 저장할 상태
                                                          // null: 초기값을 null로 설정 → 데이터가 아직 로드되지 않았음을 의미
                                                          // Post | null → post는 초기에는 null이지만, 이후 API 응답을 받으면 Post 타입이 됨.

    // 게시글 데이터를 불러오는 함수
    const fetchPost = async () => {
        try {
            const response = await axios.get(API_URL);
            console.log("게시글 데이터:", response.data);
            
            if (response.data && response.data.vo) {
                setPost(response.data.vo);
            } else {
                console.warn("게시글 데이터가 없습니다.");
                setPost(null);
            }
        } catch (error) {
            console.error("게시글 불러오기 오류:", error);
            setPost(null);
        }
    };

    // useEffect에서 fetchPost 호출
    useEffect(() => {
        if (!idx) return;
        fetchPost();
    }, [idx]);

    return (
        <Card style={{ width: '500px', margin: '20px auto'}}>
            <CardContent>
            {post ? (  // post가 null이 아닐 때만 렌더링
                    <>
                        <h3>제목: {post.subject}</h3>
                        <p>글쓴이: {post.writer}, <span className="list-item-p">{post.write_date}</span></p>
                        <p>내용: <br/></p>
                        <div id="content">{post.content}</div>
                        <Divider/>
                        <Button variant="contained" color="error">뒤로</Button> &nbsp;
                        <Link href={`/edit/${post.b_idx}`}>
                            <Button variant="contained" color="error">편집</Button> &nbsp;
                        </Link>
                        <Button variant="contained" color="error">삭제</Button> &nbsp;
                    </>
                ) : (
                    <p>게시글을 불러오는 중...</p>  // post가 null일 때 메시지 표시
                )}
            </CardContent>
        </Card>
    );
}
