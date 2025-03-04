
export default function BbsTr({ index, subject, name, writeDate, hit }) {

    return(
        <tr>
            <td>{index}</td>
            <td>{subject}</td>
            <td>{name}</td>
            <td>{writeDate}</td>
            <td>{hit}</td>
        </tr>
    );
}