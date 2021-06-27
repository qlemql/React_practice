// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

const BucketList = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle
            key={index}
            onClick={() => {
              props.history.push("/detail/" + index);
            }}
          >
            {list}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default BucketList;
