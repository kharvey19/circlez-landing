import home from '../static/home.PNG'
import lift from '../static/lift.PNG'


const Home = () => {
    return (
    <main className="bg-black w-screen">
    <p className="text-white text-6xl md:inter font-bold pt-44 text-center "> A <span className='text-indigo-400'> hub </span> for motivation.</p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
        <div className=" mr-10 lg:mr-0 lg:ml-40 lg:pt-20 col-span-1 mb-20 lg:mb-36 pt-16">
            <p className="ml-12 text-white text-center lg:text-left lg:mt-32 text-3xl md:text-4xl font-bold">A social media app startup harnessing the power of positive peer pressure to help young adults track and achieve goals.</p>
            <p className="ml-12 text-zinc-500 text-center lg:text-left text-2xl mt-5">Join our first 100 user list to get premium access to Circlez when it launches.</p>
            <div className='ml-12 flex justify-center'>
                <button className="hover:cursor-pointer mt-10 border-2 rounded-md p-3 pl-10 pr-10 bg-blue-400 text-white border-blue-400 hover:bg-black hover:text-blue-400 font-bold md:inter">Get on the Mailing List</button>
            </div>
        </div>
        <div className="lg:pt-10 md:pb-12 lg:pb-0 flex justify-center flex-col md:flex-row items-center md:col-span-1">
        <div className='md:-mt-10 md:mr-5 mb-10 '>
        <img src={home} alt='' className="h" />
        </div>
        <div className='md:mt-20 mb-10 md:mr-5 '>
        <img src={lift} alt='' className="h" />
        </div>
       </div>

      </div>
      {/* <p className="text-white text-3xl inter font-bold pb-40"> Teamwork makes the dream work</p> */}
      </main>
    );
  }
  
  export default Home;
  