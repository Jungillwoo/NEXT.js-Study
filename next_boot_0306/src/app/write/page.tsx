'use client';

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Write() {

    const router = useRouter();

    const API_URL = "/board/add";

    const cPage = useSearchParams.get("cPage") || "1"; // 기본값 1

    // 서버로 보낼 파라미터 값들을 
    const [vo, setVo] = useState({
        subject: "",
        writer: "",
        content: ""
    });

    function changeVo(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target; // -> const name = event.target.name;
                                              //    const value = event.target.value; 와 같은 의미
        
        setVo(prevVo => ({
            ...prevVo, // 기존 객체의 모든 속성을 복사
            [name]: value // 변경된 필드만 새로운 값으로 업데이트
        }));

        // 위 내용을 한줄로 한다면
        //setVo({...vo, [event.target.name]:event.target.value})

        //console.log(name+":"+value);
    }

    //function saveData() {
    // const saveData = () => {
    //     //console.log(vo);
    //     axios.post(API_URL, 
    //         {subject: vo.subject, writer: vo.writer, content: vo.content, bname: "BBS"}
    //     ).then((json) => {
    //         // 저장 성공 시 서버가 cnt변수에 1을 넣어서 보낸다.
    //         if(json.data.cnt == 1) {
    //             router.push("/list");
    //         }
    //     })
    // }

    const saveData = async () => {
        try {
            const response = await axios.post(API_URL, {
                subject: vo.subject,
                writer: vo.writer,
                content: vo.content,
                bname: "BBS"
            });

            // 서버 응답을 안전하게 확인
            if (response.data?.cnt === 1) {
                router.push(`/list?cPage=${cPage}`);
            } else {
                console.error("데이터 저장 실패", response.data);
            }
        } catch (error) {
            console.error("에러 발생:", error);
        }
    };

    return(
        <div style={{ width: "80%", margin: "auto" }}>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell>제목</TableCell>
                            <TableCell>
                                <input type="text" name="subject"
                                    value={vo.subject} onChange={changeVo}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>글쓴이</TableCell>
                            <TableCell>
                                <input type="text" name="writer"
                                    value={vo.writer} onChange={changeVo}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>내용</TableCell>
                            <TableCell>
                                <textarea name="content" rows={7} cols={50}
                                    value={vo.content} onChange={changeVo}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Button variant="contained" color="primary"
                                    onClick={saveData}>
                                    글쓰기
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}