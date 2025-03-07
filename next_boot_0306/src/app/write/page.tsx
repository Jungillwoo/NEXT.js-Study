'use client';

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React, { useState } from "react";

export default function Write() {

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

        //console.log(name+":"+value);
    }

    //function saveData() {
    const saveData = () => {

    }

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