package com.example.next_list.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.next_list.mapper.CommMapper;
import com.example.next_list.vo.CommVO;

@Service
public class CommService {

    @Autowired
    private CommMapper commMapper;

    public List<CommVO> commList(String b_idx) {
        return commMapper.commList(b_idx);
    }
}
