import React from "react";
import Banner from "./Banner"; // 같은 폴더에 Banner.js가 있다고 가정
import MovieRow from "./MovieRow"; // 같은 폴더에 MovieRow.js가 있다고 가정
import "src/style/home.css"; // 스타일 파일 경로 수정

const HomeMain = () => {
  const featuredMovie = {}; // 대표 영화 데이터 예시
  const popularMoviesUrl = "src/image/poster.jpg"; // 인기 영화 URL 예시
  const newReleasesUrl = "src/image/poster.jpg"; // 최신 영화 URL 예시
  const actionMoviesUrl = "src/image/poster.jpg";
  return (
    <div className="home">
      <Banner movie={featuredMovie} />
      <MovieRow title="인기 영화" fetchUrl={popularMoviesUrl} />
      <MovieRow title="최신 영화" fetchUrl={newReleasesUrl} />
      <MovieRow title="액션 영화" fetchUrl={actionMoviesUrl} />
    </div>
  );
};

export default HomeMain;
