import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

export default function Write() {
    return(
        <div style={{ width: "80%", margin: "auto" }}>
            <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableBody>
                    <TableRow>
                        <TableCell>제목</TableCell>
                        <TableCell>
                            <input type="text" name="subject"/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>
                            <input type="text" name="writer"/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>내용</TableCell>
                        <TableCell>
                            <textarea name="content" rows={7} cols={50}/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Button variant="contained" color="primary">
                                글쓰기
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
}