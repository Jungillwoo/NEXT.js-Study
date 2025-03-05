import { Button } from "@mui/material";
import styles from "./css/item.module.css";

interface ItemProps {
    item: {
        id?: string;
        image_link?: string;
        name?: string;
        description?: string;
        price?: number;
        updated_at?: string;
        category?: string;
        product_type?: string;
        product_link?: string;
    };
}

export default function Item({ item }: ItemProps) {
    // 구조 분해 할당 (item 객체에서 필요한 속성만 추출)
    const {
        id,
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link, // 변수명 오타 수정
    } = item;

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <img src={image_link} alt={name} />
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{name}</strong>
                    <strong className={styles.num_price}>{price ? `${price}$` : "가격 미정"}</strong>
                    <span className={styles.txt_info}>
                        {category ? `${category}/` : ""} {product_type}
                    </span>
                    <Button variant="contained" color="error">
                        구매하기
                    </Button>
                </div>
            </div>
            <div className={styles.disWrap}>
                <h3>Description</h3>
                <div style={{ paddingBottom: 20, fontSize: 17 }}>
                    {description}
                </div>
            </div>
        </>
    );
}
