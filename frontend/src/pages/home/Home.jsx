import Header from '../../components/header/Header';
import HomeSearch from '../../components/home-search/HomeSearch';

import './home.css';

function Home() {
  return (
    <>
      <Header />
      <section className='section-home'>
        <h2>Discover your City</h2>
        <p>Discover fun new cities below</p>
      </section>
      <HomeSearch />
    </>
  );
}

export default Home;
