import React from "react";
import News from "./News";
import { Route, Routes } from "react-router-dom";
import AddEditNewsComponent from "./add-edit-news/add-edit-news.component";

const NewsModule: React.FC = () => {
  return (
    <Routes>
      {/* /news → hiển thị danh sách */}
      <Route index element={<News />} />

      {/* /news/:id → hiển thị chi tiết bài viết */}
      <Route path=":id" element={<AddEditNewsComponent />} />
    </Routes>
  );
};

export default NewsModule;
