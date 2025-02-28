import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Button, IconButton, Stack } from '@mui/material';

export default function Ex3() {
  return (
    <Stack>
      {/* 첫 번째 버튼 그룹 */}
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">Google</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      {/* 두 번째 버튼 그룹 */}
      <Stack spacing={2} direction="row" mt={5}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
      </Stack>

      {/* 세 번째 버튼 그룹 (아이콘 포함) */}
      <Stack spacing={2} direction="row" mt={5}>
        <Button variant="contained" color="primary" size="small" startIcon={<SendIcon />}>Small</Button>
        <Button variant="contained" color="secondary" size="medium" endIcon={<EmojiEmotionsIcon/> }
            //disableRipple 클릭시 효과 삭제
            onClick={() => {
                alert("Smile~!");
            }}>Medium</Button>
        <Button variant="contained" color="error" size="large">Large</Button>
        <IconButton color='error'>
            <EmojiEmotionsIcon/>
        </IconButton>
      </Stack>
    </Stack>
  );
}
