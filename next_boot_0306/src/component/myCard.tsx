import { Card, CardContent } from "@mui/material";
import Link from "next/link";

// 게시글 타입 정의
interface Post {
    b_idx: string;
    subject: string;
    write_date: string;
}

interface MyCardAr {
    ar: Post[];
}

export default function MyCard({ar} : MyCardAr) {
    return(
        <Card style={{ width: '500px', margin: '20px auto' }}>
            <CardContent>
                {ar.map( (item, index) => (
                    <Link key={index} href={`/card/${item.b_idx}`}>
                        <div className="list-item">
                        <h4 className="list-item-h4">{item.subject}</h4>
                        <p className="list-item-p">{item.write_date}</p>
                    </div>
                    </Link>
                ) )}    
            </CardContent> 
        </Card>
    );
}