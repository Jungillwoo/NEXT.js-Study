'use client';

import { Card, CardContent, Divider } from "@mui/material";
import axios from "axios";
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
        <div>
            <header>
                <h2>편집하기</h2>
            </header>
            <Divider/>
            <Card style={{ width: '500px', margin: '20px auto'}}>
                <CardContent>
                    {post ? (  // post가 null이 아닐 때만 렌더링
                        <>
                            <form action="/board/edit" method="post">
                                <input type="text" name="subject" defaultValue={post?.subject}/>
                                <input type="text" name="writer" defaultValue={post?.writer} disabled/>
                                <textarea name="content" defaultValue={post.content}></textarea>
                                <input type="hidden" name="b_idx" defaultValue={post?.b_idx}/>
                                <button type="submit">수정</button>
                            </form>
                        </>
                    ) : (
                        <p>게시글을 불러오는 중...</p>  // post가 null일 때 메시지 표시
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
