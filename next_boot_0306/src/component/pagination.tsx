import { Pagination } from "@mui/material";

// 페이지네이션 Props 타입 정의
interface PaginationProps {
    cPage: number;
    totalPage: number;
    onPageChange: (page: number) => void; // 페이지 변경 이벤트 함수
}

export default function CustomPagination({ cPage, totalPage, onPageChange }: PaginationProps) {
    return (
        <Pagination
            count={totalPage} // 전체 페이지 수
            page={cPage} // 현재 페이지 수
            onChange={(_, page) => onPageChange(page)} // 페이지 변경 시 실행
            color="primary"
            shape="rounded"
            sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        />
    );
}
