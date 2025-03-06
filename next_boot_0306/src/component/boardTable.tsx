'use client';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Link from "next/link";

// 게시글 타입 정의
interface Post {
    b_idx: number;
    subject: string;
    writer: string;
    write_date: string;
    hit: number;
}

// 컴포넌트 Props 타입 정의
interface BoardTableProps {
    posts: Post[];
}

export default function BoardTable({ posts }: BoardTableProps) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">번호</TableCell>
                        <TableCell align="center">제목</TableCell>
                        <TableCell align="center">글쓴이</TableCell>
                        <TableCell align="center">날짜</TableCell>
                        <TableCell align="center">조회수</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post) => (
                        <TableRow key={post.b_idx}>
                            <TableCell align="center">{post.b_idx}</TableCell>
                            <TableCell align="center">
                                <Link href={`/board/${post.b_idx}`} style={{ textDecoration: "none", color: "black" }}>
                                    {post.subject}
                                </Link>
                            </TableCell>
                            <TableCell align="center">{post.writer}</TableCell>
                            <TableCell align="center">{post.write_date}</TableCell>
                            <TableCell align="center">{post.hit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
