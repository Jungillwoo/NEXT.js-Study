"use client";

import { useState } from "react";
import { TextField, Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {

    const router = useRouter();

    // 로그인 입력값 관리
    const [vo, setVo] = useState({
        m_id: "",
        m_pw: ""
    })

    const [error, setError] = useState("");

    // 입력 필드 값 변경 핸들러
    function changeVo(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setVo(prevVo => ({
            ...prevVo,
            [name]: value
        }));
    }

    // 로그인 요청 함수
    const login = async () => {
        try {
            const response = await axios.post("/member/reqLogin", vo);

            if (response.data?.status === "0") {
                alert("로그인 성공!");
                router.push("/");  // 로그인 후 홈으로 이동 (또는 원하는 경로)
            } else {
                setError(response.data?.message || "로그인 실패");
            }
        } catch (error) {
            console.error("로그인 중 오류 발생:", error);
            setError("서버와의 연결이 원활하지 않습니다.");
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
            <Card sx={{ width: 360, boxShadow: 3, padding: 2 }}>
                <CardHeader 
                    title={<Typography variant="h5" align="center">로그인</Typography>} 
                />
                <CardContent>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <TextField 
                            label="이메일"
                            name="m_id"
                            variant="outlined"
                            fullWidth
                            value={vo.m_id}
                            onChange={changeVo}
                        />
                        <TextField 
                            label="비밀번호"
                            type="password"
                            name="m_pw"
                            variant="outlined"
                            fullWidth
                            value={vo.m_pw}
                            onChange={changeVo}
                        />
                        <Button variant="contained" color="primary" fullWidth onClick={login}>로그인</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
