import React from "react";
import { Button } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";

function Upload(props) {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(fileInput.current.files[0]);
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));
  };
  return (
    <>
      <input
        ref={fileInput}
        onChange={selectFile}
        type="file"
        disabled={is_uploading}
      />
      <Button _onClick={uploadFB}>업로드하기</Button>
    </>
  );
}

export default Upload;
