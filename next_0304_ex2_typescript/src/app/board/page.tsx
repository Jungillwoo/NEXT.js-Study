import BbsTr from "@/component/BbsTr";

// useState 사용하여 동적 처리
const ar = [
    {subject:"NextJS공부", name:"파머", writeDate:"2025-03-04", hit:"123"},
    {subject:"React공부", name:"제임스", writeDate:"2025-03-02", hit:"3"},
    {subject:"프론트공부", name:"엔소", writeDate:"2025-03-01", hit:"33"},
];

function Board() {

    return(
        <div>
            <h1 className="title">게시판</h1>
            <hr/>
            <table className="t1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 컴포넌트 활용 */}
                    {ar.map( (item, index) => (
                        <BbsTr key = {index} index={index+1} subject={item.subject} name={item.name} 
                            writeDate={item.writeDate} hit={item.hit}/>
                    ) )}
                </tbody>
            </table>
        </div>
    );
}
export default Board;