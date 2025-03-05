'use client';
import Item from "@/component/item";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page({
    params,
  }: {
    params: { id: string }
  }) {
    const { id } = params
    // const idx = (await params).id;
    // const id = useParams();

    const api_url = `/api/v1/products/${id}.json`; // 문자열 안에 변수를 넣고 싶으면 백틱 사용
    const [vo, setVo] = useState({}); // 비어있는 json 객체가 들어가려면 {} 로 선언

    // async 를 사용
    async function setData() {
        try {
          const res = await axios.get(api_url);
          setVo(res.data);
        } catch (error) {
          console.error("API 요청 실패:", error);
        }
    }

    //   function setData() {
    //     axios.get(api_url)
    //         .then((res) => {
    //             setVo(res.data); // API 응답을 받은 후 데이터 업데이트
    //         })
    //         .catch((error) => {
    //             console.error("API 요청 실패:", error);
    //         });
    //    }
    

    useEffect(() => {
        setData();
    }, [id]); // id가 변경될 때마다 실행

    //데이터가 없을 경우 로딩 표시
    if (!vo.image_link) {
        return <p>로딩 중...</p>;
    }

    return (
        <div>
            <Item item={vo}/>
        </div>
    );
        
  }
