import NavBar from "./NavBar";
import goals from "../static/goals.png";
const Work = () => {
    return ( 
        <div>
            <div className="bg-black min-h-screen text-white grid grid-cols-4 b">
                
                <h1 className="text-5xl text-center py-10 col-span-4 inter font-bold mt-32" >Our Work</h1>
                    <div className="col-span-2 mb-20" >
                        <img src={goals} alt='' className="ml-44 w-9/12 mt-8" />
                    </div>
                    
                    <div className="pr-44 pl-44 col-span-2">
                        <div className="rounded-lg mb-10 ">
                            <p className="text-2xl pt-8 mb-2 inter text-left font-bold"> Academics. </p>
                            <p className="text-sm pr-5 inter text-left text-zinc-400"> We hope to boost classroom productivity and by working hand-in-hand with teachers and educators. The teacher can focus on establishing relationships with students and educating, while we focus on motivating and creating a positive goal-oriented mindset.</p>
                        </div>
                        <div className="rounded-lg mb-10 text-left"> 
                            <p className="text-2xl pt-8 mb-2 inter font-bold text-blue-400"> Athletics. </p>
                            <p className="text-sm pr-5  inter text-zinc-400"> Student-athletes, bodybuilders, gym rats: Circlez is the app for you. We have tons of features coming soon which will allow you to track workout time, challenge your friends, and break personal and group records.</p>
                        </div>
                        <div className="text-left rounded-lg mb-10">
                            <p className="text-2xl pt-8 mb-2 inter font-bold text-white"> Organizations. </p>
                            <p className="text-sm pr-5 pb-8 inter text-zinc-400"> We partner with organizations such as non-profits, businesses, and gyms in order to provide their customers access to goal-tracking software. This helps create a positive environment and elevates the organization's mission. </p>
                        </div>
                    </div>
            </div>
        </div>
    );
}
 
export default Work;