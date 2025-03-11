'use client';

import Link from "next/link";
import { useState } from "react";
import styles from "../../page.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function Page() {

    const API_URL = "/api/v1/bbs";

    const router = useRouter();

    // 서버로 보낼 파라미터 값들을 
    const [bbs, setBbs] = useState({
        title: "",
        writer: "",
        content: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

        const { name, value } = event.target; // -> const name = event.target.name;
                                              //    const value = event.target.value; 와 같은 의미
        
        // setBbs(prevBbs => ({
        //     ...prevBbs, // 기존 객체의 모든 속성을 복사
        //     [name]: value // 변경된 필드만 새로운 값으로 업데이트
        // }));

        // 위 내용을 한줄로 한다면
        setBbs({...bbs, [name]:value});

        //console.log(name+":"+value);
    }

    function sendBbs() {
        axios.post(API_URL, JSON.stringify(bbs), { // bbs 객체 자체가 JSON으로 변환되어 전달
            headers:{
                "Content-Type":"application/json" // 서버에서 JSON 받는 것을 인식
            }
        }).then((res) => {
            if(res.status == 200){
                router.push("/bbs");
            }
            // console.log(res);
        }) 
    };

    return(
        <main className={styles.main}>
            <h1>글쓰기</h1>
            <hr/>
            <table className="t1">
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>
                            <input type="text" id="title" name="title"
                                onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td>
                            <input type="text" id="writer" name="writer"
                                onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>
                            <textarea cols={40} rows={5} id="content" name="content"
                                onChange={handleChange}/>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <Link href="/bbs">
                            <button type="button">뒤로</button>
                            </Link>
                        </td>
                        <td>
                            <button type="button" onClick={sendBbs}>저장</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </main>
    );
}