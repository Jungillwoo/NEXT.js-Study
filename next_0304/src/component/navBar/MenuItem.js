import Link from "next/link";

function MenuItem() {
    const link_item = [
        {title:"Home", path:"/"},
        {title:"Content", path:"/content"},
        {title:"Blog", path:"/blog"},
        {title:"About", path:"/about"}
    ];

    return(
        <>
            {link_item.map( (item) => ( // 화살표 함수는 { return } 이 생략된 상태
                <span key={item.title}>
                    <Link href={item.path}>
                        {item.title}
                    </Link>
                    &nbsp;&nbsp;&nbsp;
                </span>
            ) )}
        </>
    );
}
export default MenuItem;