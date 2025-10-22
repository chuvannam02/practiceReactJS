import React, { useEffect, useState } from "react";
import { axiosWithAbort } from "../../_utilities/auth/axiosWithAbort";
import { Link } from "react-router-dom";
import { newsService } from "./News.service";
import { INews } from "./News.model";

const News: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchINews = async () => {
    setLoading(true);
    try {
      const data = await newsService.getAll(100);
      setNews(data);
    } catch (err: any) {
      else console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // cleanup khi unmount
    return () => {
      axiosWithAbort.abortAll();
    };
  }, []);

  return (
    <>
      <div className="news">
        <h3>News</h3>
        <button onClick={fetchINews} disabled={loading}>
          {loading ? "Đang tải..." : "Tải tin tức"}
        </button>

        {news.map((n) => (
          // <p key={n.id}>{n.title}</p>
          <li key={n.id}>
            <Link to={String(n.id)}>{n.title}</Link>
          </li>
        ))}
      </div>
      <div className="card"></div>
    </>
  );
};

export default News;
