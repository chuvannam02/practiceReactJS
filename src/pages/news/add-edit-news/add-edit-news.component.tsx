import React from "react";
import { useParams } from "react-router-dom";

const AddEditNewsComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h3>Chi tiết tin tức #{id}</h3>
      <p>Đây là nội dung bài viết số {id}.</p>
    </div>
  );
};

export default AddEditNewsComponent;
