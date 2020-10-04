import React from "react";

export default function PageNotFound(props) {
  return (
    <div>
      <p>Không tìm thấy trang: {props.location.pathname}</p>
    </div>
  );
}
