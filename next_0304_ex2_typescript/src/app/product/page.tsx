'use client';

import { useState } from "react";

function Product() {

    const [ar, setAr] = useState([
        {fname:"딸기", fprice:"20000", fimage:"/images/fruit0.png"},
        {fname:"바나나", fprice:"13000", fimage:"/images/fruit2.png"},
        {fname:"샤인머스켓", fprice:"43000", fimage:"/images/fruit1.png"}
    ]);

    const [cnt, setCnt] = useState([0, 0, 0]); // 각 과일의 수량들만 저장한 배열

    // 수량 증가 함수
    const increaseCount = (index) => {
        // 방법1
        setCnt((prevCnt) =>
            prevCnt.map((c, i) => (i === index ? c + 1 : c))
        );

        // 방법2
        // let copy_cnt = [...cnt]; // 기존의 cnt배열의 내용을 복사
        // copy_cnt[index]++; // + 버튼을 누를 때마다 1증가
        // setCnt(copy_cnt); // useState변경
    };

    // 수량 감소 함수
    const decreaseCount = (index) => {
        setCnt((prevCnt) =>
            prevCnt.map((c, i) => (i === index && c > 0 ? c - 1 : c))
        );
    };

    return(
        <div>
            <h1 className="title">제품들</h1>
            <hr/>
            {ar.map( (vo, index) => (
                <p className="box" key={vo.fname}>
                    <header>
                        <h4>{vo.fname}</h4><p className="right">{vo.fprice}원</p>
                        <p className="imageBox">
                            <img className="fruit_img" src={`/images/fruit${index}.png`}/>
                        </p>
                    </header>
                    <p className="bottom">
                        <button type="button" className="btn" onClick={() => decreaseCount(index)}> - </button>
                        <span className="cnt"> 수량: {cnt[index]} </span>
                        <button type="button" className="btn" onClick={() => increaseCount(index)}> + </button>
                    </p>
                </p>
            ) )}
        </div>
    );
}
export default Product;