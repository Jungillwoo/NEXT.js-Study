import { Pagination } from "@mui/material";

// 페이지네이션 Props 타입 정의
interface PaginationProps {
    cPage: number;
    totalPage: number;
    onPageChange: (page: number) => void;
}

export default function CustomPagination({ cPage, totalPage, onPageChange }: PaginationProps) {
    return (
        <Pagination
            count={totalPage} 
            page={cPage} 
            onChange={(_, page) => onPageChange(page)}
            color="primary"
            shape="rounded"
            sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        />
    );
}
