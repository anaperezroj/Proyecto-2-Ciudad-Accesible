import Header from '../../components/header/Header';
import HomeSearch from '../../components/home-search/HomeSearch';
import Block from '../../components/shared/block/Block';
import Footer from '../../components/footer/Footer';

import './home.css';

function Home() {
  return (
    <div className='home'>
      <Header />
      <section className='section-home'>
        <h2>Discover your City</h2>
        <p>Discover fun new cities below</p>
      </section>
      <HomeSearch />
      <Block />
      <Footer />
    </div>
  );
}

export default Home;
