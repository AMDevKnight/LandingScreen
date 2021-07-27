import './App.css';
import Banner1 from './components/banners/Banner1';
import Banner2 from './components/banners/Banner2';
import Banner3 from './components/banners/Banner3';
import Navbar from './components/Navbar';
import leftImage from './assets/i-phone-body.png';
import rightImage from './assets/img-1.png';
import rightImage2 from './assets/3rdImage.png';
import Video from './components/Video';
import grid1 from './assets/rectangle-copy.png';
import grid2 from './assets/rectangle-copy-2.png';
import grid3 from './assets/rectangle-copy-3.png';
import grid4 from './assets/rectangle-copy-4.png';
import video from './assets/Sea.mp4'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner1 heading={"Travel the world & meet new friends."} text={"Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding."} formButton={"I want to join"} leftImage={leftImage} />
      <Banner2 />
      <Banner1 list={[["Find your trip partner", "With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly."], ["Plan trip with easy steps", "With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly."]]} heading={"Making trip is fun. Travel with friends."} text={"Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding."} rightImage={rightImage} />
      <Banner3 heading={"See the world & spend less always."} text={"Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding."} gridImage={[[grid2, grid1], [grid3, grid4]]} />
      <Banner1 heading={"Improving your travel experience."} text={"Create custom landing pages with Omega that convert more visitors than any website. With lots of unique blocks, you can easily build a page without coding."} Button={"Get this app"} rightImage={rightImage2} />
      <Video video={video} />
      <Footer />
    </div>
  );
}

export default App;
