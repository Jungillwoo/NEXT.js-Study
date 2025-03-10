
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
            <td>{title}</td> {/* 🔹 title → subject로 변경 */}
            <td>{writer}</td>
            <td>{write_date}</td>
            <td>{hit}</td>
        </tr>
    );
}
