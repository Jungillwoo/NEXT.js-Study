'use client';
import axios from "axios";
import { useEffect, useState } from "react";

interface NoticeItem {
    subject: string;
    write_date: string;
}


export default function Notice() {

    // let ar = [
    //     {title: "NextJS 어려워요", content: "공부하기 귀찮아요", write_date: "2025-03-04"},
    //     {title: "Spring 어려워요", content: "공부가 너무 재밌어요", write_date: "2025-03-02"},
    //     {title: "SpringBoot 어려워요", content: "공부하고 싶어요", write_date: "2025-03-03"}
    // ];

    const [ar, setAr] = useState<NoticeItem[]>([]);
    
    function setData() {
        axios.get<{ ar: NoticeItem[] }>(`/notice/list`).then((res) => {
            //console.log(res);
            setAr(res.data.ar);
        });
    }

    //페이지가 열릴 때 한번 호출해라
    useEffect(() => {
        setData();
    });

    return(
        <div>
            <h1 className="title">공지사항</h1>
            <hr/>
            <div className="list-bg">
                {ar.map( (item, index) => (
                    <div className="list-item" key={index}>
                        <h4>{item.subject}</h4>
                        <p>{item.write_date}</p>
                    </div>
                ) )}
            </div>
        </div>
    );
}
