import React from 'react';
import HomeMain from '../component/homemain';

const Home = () => {
  return (
    <div>
      <HomeMain
        featuredMovie={{ title: '추천 영화' }}
        popularMoviesUrl="/api/popular-movies"
        newReleasesUrl="/api/new-releases"
        actionMoviesUrl="/api/action-movies"
      />
    </div>
  );
};

export default Home;
