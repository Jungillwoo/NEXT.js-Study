import React, { useState } from "react";
import styles from '../css/ex6.module.css';
import data from '../data/data.json';
import Ex6_table from "./Ex6_table";

function Ex6() {
    let myFont = { fontSize: "30px", color: "#fff" };
    const [id, setId] = useState(1);
    function updateId(e) {
        setId(e.target.value);
    }
    return(
        <div>
            <ul className={styles.m_list}>
                {
                    data.subject.map(
                        sub => (
                            <li key={sub.id} onClick={updateId} value={sub.id} style={myFont}>{sub.title}</li>
                        )
                    )
                }
            </ul>
            <Ex6_table idx={id}/>
        </div>
    );
}
export default Ex6;