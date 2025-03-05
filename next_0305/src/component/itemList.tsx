import { Grid2 } from "@mui/material";
import styles from "./css/itemList.module.css";
import Link from "next/link";

export default function ItemList({list}) { // 중괄호 하면 list를 한번에 받음
                                           // ({list}) 가 아닌 (list) 로 받을 경우 한번에 받는다.
                                           //  list.list 를 해야 list로 한번에 받은 값 중 list를 찾아낸다. 
    return(
        <div>
            <Grid2 container>
                {list.map( (item) => (
                    <Grid2 item size={{xs:3}} key={item.id}>
                        <Link href="/views/[id]" as={'/views/'+item.id}>
                            <div className={styles.wrap}>
                                <img className={styles.img_item} src={item.image_link} alt={item.name}/>
                                <div className={styles.title_item}><strong>{item.name}</strong></div>
                                <span className={styles.txt_info}>{item.category} &nbsp; {item.product_type}</span>
                                <div className={styles.num_price}><strong>{item.price}$</strong></div>
                            </div>
                        </Link>
                    </Grid2>
                ) )}
            </Grid2>
        </div>
    );
}