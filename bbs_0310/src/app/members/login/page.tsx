"use client"

import { useState } from "react";
import styles from "../../page.module.css";
import { useRouter } from "next/router";
import axios from "axios";

export default function Page() {

    const API_URL = "/api/v1/members/login";
    const [member, setMember] = useState({});
    const router = useRouter();

    function signIn() {
        axios.post(API_URL, JSON.stringify(member), {
            withCredentials: true, // 이거 없으면 쿠키가 안 들어온다.
            headers: {
                "Content-Type":"application/json"
            }
        }).then((res) => {
            if(res.status == 200)
                router.push("/");
        });
    };

    const handleSubmit = function(event) {
        const username = event.target.mid.value;
        const password = event.target.mpwd.value;
    }

    return(
        <main className={styles.main}>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
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