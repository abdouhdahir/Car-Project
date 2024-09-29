import Marque from '../components/homepage/Marque'
import Allvehicule from '../components/homepage/Allvehicule'
import Blog from '../components/homepage/Blog'
import Statistic from '../components/homepage/Statistic'
import Finance from '../components/homepage/Finance'
import Popular from '../components/homepage/Popular'
import Shop from '../components/homepage/Shop'
import Reviews from '../components/homepage/Reviews'
import Post from '../components/homepage/Post'
import Banner from '../components/homepage/Banner'
import Footer from "../layout/Footer";
import Header from "../layout/Header";

const HomePage = () => {
  return (
    <div className='relative'>
        <Header/>
        <Marque/>
        <Allvehicule/>
        <Blog/>
        <Statistic/>
        <Finance/>
        <Popular/>
        <Shop/>
        <Reviews/>
        <Post/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default HomePage
