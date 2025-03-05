'use client';
import axios from "axios";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ItemList from "@/component/itemList";
import { Divider } from "@mui/material";

export default function Home() {
  const api_url = "/api/v1/products.json?brand=maybelline";
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  async function callApi() {
    try {
      const res = await axios.get(api_url);
      console.log(res.data); 
      setList(res.data);
    } catch (error) {
      console.error("API 요청 실패:", error);
    } finally {
      setLoading(false);
    }
  }

  // 의존성 배열 '[]' 추가 -> 첫 렌더링 시 한 번만 실행
  useEffect(() => {
    callApi();
  }, []); // 빈 배열을 추가하여 무한 실행 방지

  // 로딩 중일 때 메시지 표시
  if (loading) return <p style={{ textAlign: "center", marginTop: "20px" }}>로딩 중...</p>;

  return (
    <div className={styles.page} style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh" // 화면 높이 100% 유지
        }}>
      <div style={{width: '80%', margin: 'auto', paddingTop: '20px'}}>
        <h2>베스트 상품</h2>
        <Divider/> {/* 구분선 */}
        <ItemList list={list.slice(0, 9)}/> {/* 0,1,2,3,4,5,6,7,8 */}
      </div>
      <div style={{width: '80%', margin: 'auto', paddingTop: '20px'}}>
        <h2>신상품</h2>
        <Divider/> {/* 구분선 */}
        <ItemList list={list.slice(9, 17)}/>
      </div>
    </div>
  );
}
