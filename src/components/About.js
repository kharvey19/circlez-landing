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
          <h1 className="text-5xl mb-6 font-bold text-white text-center md:text-right md:inter">Our Why</h1>
          <p className="text-md text-white md:text-right md:inter text-zinc-500 ml-10 mr-10 md:mr-0">
            Throughout high school, <span className="text-indigo-400 font-bold"> Sydney </span> and <span className="text-indigo-400 font-bold"> Aiden </span>  were blessed with the opportunity to receive help and encouragement from a close-knit friend group and loving parents. This propelled them to graduate at the top of their class and receive several scholarships to pursue higher education. However, they realize that not everyone has the same circumstances. The environment in which we grow up and interact with on a daily basis is crucial to personal development. <span className="text-indigo-400 font-bold"> They aim to create a stimulating environment where people can build support systems or enhance their existing ones. </span> This initiative aims to reduce barriers to achievement and growth - in classrooms, in athletics, and most importantly, in life.
          </p>

        </div>

        </div>

    </div>

    </div>

  );
}

export default About;
