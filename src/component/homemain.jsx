import React from "react";
import "../style/homemain.css";
import poster from "../image/poster.jpeg"; // 이미지 파일 경로

const HomeMain = () => {
  // Mock 데이터: API를 대신해 로컬 데이터를 사용
  const movies = [
    { id: 1, title: "인기 영화 1" },
    { id: 2, title: "인기 영화 2" },
    { id: 3, title: "인기 영화 3" },
    { id: 4, title: "최신 영화 1" },
    { id: 5, title: "최신 영화 2" },
    { id: 6, title: "액션 영화 1" },
  ];

  return (
    <div className="home">
      {/* 배너 섹션 */}
      <div className="banner">
        <h1>추천 영화</h1>
      </div>

      {/* 영화 목록 섹션 */}
      <div className="movie-row">
        <h2>인기 영화</h2>
        <div className="movies">
          {movies.slice(0, 3).map((movie) => (
            <div key={movie.id} className="movie">
              <img src={poster} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="movie-row">
        <h2>최신 영화</h2>
        <div className="movies">
          {movies.slice(3, 5).map((movie) => (
            <div key={movie.id} className="movie">
              <img src={poster} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="movie-row">
        <h2>액션 영화</h2>
        <div className="movies">
          {movies.slice(5).map((movie) => (
            <div key={movie.id} className="movie">
              <img src={poster} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
