import React from "react";

const Banner = ({ movie }) => {
  return (
    <div className="banner">
      <h1>{movie.title || "대표 영화 제목"}</h1>
      {/* 추가적인 Banner 내용 */}
    </div>
  );
};

export default Banner;
