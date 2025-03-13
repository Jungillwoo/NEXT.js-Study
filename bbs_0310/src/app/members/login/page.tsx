"use client"

import { useState } from "react";
import styles from "../../page.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import TokenStore from "@/app/store/TokenStore";

interface Member {
    mid?: string;
    mpwd?: string;
}

export default function Page() {

    const API_URL = "/api/v1/members/login";
    const [member, setMember] = useState<Member>({});

    const {accessToken, setToken} = TokenStore();

    const router = useRouter();

    function signIn() {
        axios.post(API_URL, JSON.stringify(member), {
            withCredentials: true, // 이거 없으면 쿠키가 안 들어온다.
            headers: {
                "Content-Type":"application/json"
            }
        }).then((res) => {
            if(res.status == 200) {
                if(res.data.message == "success") {
                    setToken(res.data.data.accessToken);
                    router.push("/");
                } else {
                    alert("로그인 실패");
                }
            }   
        });
    };

    // const signIn = async () => {
    //     try {
    //         // API 요청
    //         const res = await axios.post(
    //             API_URL, 
    //             member, // JSON.stringify 필요 없음 (axios가 자동 처리)
    //             {
    //                 withCredentials: true, // 쿠키 포함 (fetch의 credentials: "include"와 동일)
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 }
    //             }
    //         );

    //         console.log("로그인 응답:", res.data)

    //         if (res.status === 200) {
    //             // router.push("/");
    //             // router.refresh();
    //         }
    //     } catch (error) {
    //         console.error("로그인 실패:", error);

    //         // axios의 에러 형식에 맞게 메시지 처리
    //         if (axios.isAxiosError(error)) {
    //             alert(error.response?.data?.message || "로그인에 실패했습니다.");
    //         } else {
    //             alert("예상치 못한 오류가 발생했습니다.");
    //         }
    //     } 
    // };

    

    // const handleSubmit = function(e) {
    //     const username = e.target.mid.value;
    //     const password = e.target.mpwd.value;
    // };

    const handleChange = function(e : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setMember({...member, [name]: value});
    };

    return(
        <main className={styles.main}>
            <h1>로그인</h1>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="username">사용자 이름</label>
                            </td>
                            <td>
                                <input type="text" id="username" name="mid" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password">비밀번호</label>
                            </td>
                            <td>
                                <input type="password" id="password" name="mpwd" onChange={handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2} className={styles.txtCenter}>
                                <button type="button" onClick={signIn}>로그인</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </main>
    );
}