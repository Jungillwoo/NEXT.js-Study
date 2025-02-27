import { Button, Typography, Box } from "@mui/material";
import React from "react";

function Content() {
    return (
        <Box sx={{ padding: 3 }}>
            {/* 섹션 컨테이너 */}
            <Box sx={{ padding: 3, borderRadius: 2 }}>
                {[
                    {
                        title: "여행의 즐거움",
                        text: "여행은 새로운 경험을 선사한다. 낯선 곳에서 새로운 사람들을 만나며 세상을 넓게 바라볼 수 있다. 바쁜 일상에서 벗어나 여유를 찾을 수도 있다. 때로는 계획 없이 떠나는 것이 더 큰 즐거움을 준다. 예상치 못한 순간들이 여행을 더욱 특별하게 만든다. 돌아올 때는 가방 속뿐만 아니라 마음속에도 추억이 가득 차 있다."
                    },
                    {
                        title: "커피 한 잔의 여유",
                        text: "아침에 마시는 커피 한 잔은 하루를 시작하는 좋은 습관이다. 따뜻한 커피 한 모금이 몸을 깨우고 정신을 맑게 해준다. 카페에 앉아 창밖을 바라보며 생각을 정리하는 시간도 소중하다. 어떤 사람에게는 공부할 때나 일을 할 때 꼭 필요한 동반자다. 다양한 원두와 추출 방식이 있어 취향에 따라 즐길 수도 있다. 무엇보다 커피는 혼자일 때도, 누군가와 함께할 때도 좋은 순간을 만들어준다."
                    },
                    {
                        title: "비 오는 날의 감성",
                        text: "비가 내리는 날은 유난히 감성이 풍부해진다. 창문을 두드리는 빗소리를 들으며 따뜻한 차를 마시면 마음이 차분해진다. 거리에는 우산을 쓴 사람들이 분주하게 움직인다. 길거리에 반사된 네온사인은 빗방울에 반짝이며 더 아름답게 보인다. 책을 읽거나 음악을 들으며 하루를 보내기에 좋은 날이다. 때로는 빗속을 걸으며 생각을 정리하는 것도 나쁘지 않다."
                    },
                    {
                        title: "아침 운동의 힘",
                        text: "아침에 운동을 하면 하루가 훨씬 활기차다. 상쾌한 공기를 마시며 가볍게 달리면 기분도 좋아진다. 몸을 움직이면 피로가 풀리고 집중력도 높아진다. 규칙적으로 운동하는 습관은 건강을 유지하는 데 필수적이다. 운동 후에는 상쾌한 기분으로 하루를 시작할 수 있다. 꾸준한 운동이 작은 변화들을 만들어낸다."
                    },
                    {
                        title: "책 읽기의 즐거움",
                        text: "책은 우리에게 새로운 세계를 보여준다. 한 권의 책이 생각을 바꾸고 삶의 방향을 정해주기도 한다. 조용한 공간에서 책을 읽으며 몰입하는 순간은 특별하다. 다양한 장르의 책을 접하면 시야가 넓어지고 사고가 깊어진다. 책을 읽는 것은 혼자만의 시간이지만, 동시에 많은 사람과 대화하는 경험이기도 하다. 무엇보다 독서는 스스로를 성장시키는 좋은 습관이다."
                    }
                ].map((item, index) => (
                    <Box key={index} sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1565c0" }}>
                            {index + 1}. {item.title}
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                            {item.text}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* 버튼 정렬 */}
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
                <Button variant="contained" sx={{ marginRight: 2 }}>BUTTON1</Button>
                <Button variant="contained" sx={{ marginRight: 2 }}>BUTTON2</Button>
                <Button variant="contained">BUTTON3</Button>
            </Box>
        </Box>
    );
}

export default Content;
