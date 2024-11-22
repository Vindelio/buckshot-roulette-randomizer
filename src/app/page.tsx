
import Header from './components/Header'
import Footer from './components/Footer'
import JammerReplica from './components/Randomizer/Jammer-replica';

const Home = () => {  
  return (
  <div className='h-screen flex flex-col'> 
  <Header />
  <div className='flex-1 flex justify-center'>
    <JammerReplica />
  </div>
  <Footer className="float-end" />
  </div>
  );
}

export default Home;
