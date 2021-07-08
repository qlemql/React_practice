import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

function Upload(props) {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };
  return (
    <>
      <input ref={fileInput} onChange={selectFile} type="file" />
    </>
  );
}

export default Upload;
