import NavBar from "./NavBar";

const About = () => {
  return (
    <div>
          {/* <NavBar /> */}
        <div className="bg-black">
        <div className="md:grid grid-cols-2 pb-20 b bt">
        <div className="md:ml-20 pt-20 ">
          <h1 className="text-5xl mb-6 font-bold text-white text-center md:text-left md:inter">Our Mission</h1>
          <p className="text-md mb-6 text-white md:inter text-left text-zinc-500 ml-10 mr-10 md:ml-0">
            Circlez is a mobile app that is <span className="text-indigo-400 font-bold"> revolutionizing the productivity space.</span> Our app allows users to join  
            virtual circles with their friends, family, and peers based on shared interests. Within these 
            passionate, active groups, users have the ability to <span className="text-indigo-400 font-bold">set and track goals</span> and <span className=""> work together</span> to   
            achieve them. Our unique goal tracker, leaderboards, reminders, nudges, and other powerful 
            features combine to create an <span className="text-indigo-400 font-bold"> unrivaled tool for personal and group development.</span> 
          </p>
        </div>
        <div className="md:mr-20 pt-20 ">
          <h1 className="text-5xl mb-6 font-bold text-white text-center md:text-right md:inter">Founders' Story</h1>
          <p className="text-md text-white md:text-right md:inter text-zinc-500 ml-10 mr-10 md:mr-0">
          Sydney and Aiden have been best friends since early middle school. From being tennis teammates, to graduating
          top of their class, to getting admissions to all Ivy League schools and West Point, 
          they decided to build a product that reflected the <span className="text-indigo-400 font-bold">accountability and motivation</span> they had with one another.
          </p>

        </div>

        </div>

    </div>

    </div>

  );
}

export default About;
