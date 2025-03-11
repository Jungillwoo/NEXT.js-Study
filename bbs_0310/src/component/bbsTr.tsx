import Link from "next/link";

interface BbsTrProps {
    b_idx: number;
    title: string;
    writer: string;
    write_date: string;
    hit: number;
}

export default function BbsTr({ b_idx, title, writer, write_date, hit }: BbsTrProps) {
    return (
        <tr>
            <td>{b_idx}</td>
            <td>
                <Link href={`/bbs/${b_idx}`}>{title}</Link>
            </td>
            <td>{writer}</td>
            <td>{write_date}</td>
            <td>{hit}</td>
        </tr>
    );
}
