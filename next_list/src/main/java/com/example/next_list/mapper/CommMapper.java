package com.example.next_list.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.next_list.vo.CommVO;

@Mapper
public interface CommMapper {

    List<CommVO> commList(String b_idx);
}
