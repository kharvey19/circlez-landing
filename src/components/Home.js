import home from '../static/home.PNG'
import lift from '../static/lift.PNG'


const Home = () => {
    return (
    <div className="bg-black">
    <p className="text-white text-6xl inter font-bold pt-44 "> A <span className='text-indigo-400'> hub </span> for motivation.</p>
      <div className="grid grid-cols-2 ">
        <div className="ml-40 pt-20 col-span-1 mb-36">
            <p className=" text-white text-left mt-36 text-4xl font-bold">A social media app startup harnessing the power of positive peer pressure to help young adults track and achieve goals.</p>
            <p className=" text-zinc-500 text-left text-2xl mt-5">Join our first 100 user list to get premium access to Circlez when it launches.</p>
            <div>
                <button className="hover:cursor-pointer mt-10 border-2 rounded-md p-3 pl-10 pr-10 bg-blue-400 text-white border-blue-400 hover:bg-black hover:text-blue-400 font-bold inter">Get on the Mailing List</button>
            </div>
        </div>
        <div className="pt-20 flex justify-center col-span-1">
        <div className='mt-10 mr-5 '>
        <img src={home} alt='' className="h" />
        </div>
        <div className='mt-20 mr-5 '>
        <img src={lift} alt='' className="h" />
        </div>
       </div>

      </div>
      {/* <p className="text-white text-3xl inter font-bold pb-40"> Teamwork makes the dream work</p> */}
      </div>
    );
  }
  
  export default Home;
  