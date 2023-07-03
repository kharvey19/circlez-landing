const OpenBlog = (props) => {
    const title = props.title;
    const message = props.message;
    const first = props.first;
    const last = props.last;
    const setOpen = props.setOpen;
    const openPost = props.openPost;
    return (
        <div className="bg-white  p-10 rounded-lg w-2/3 mt-10 mb-20">
            <div className="flex justify-start flex-col" style={{ whiteSpace: 'pre-line' }}>
                <p className="text-zinc-500 mb-3"> {first} {last}</p>
                <h1 className='text-black text-3xl font-bold text-left'> {title} </h1>
                
                <p className='text-black mt-3 mb-10' style={{ whiteSpace: 'pre-line' }}> {message} </p>
                <button className=' mt-3 hover:cursor-pointer text-white hover:bg-blue-500 p-3 pl-5 pr-5 bg-blue-400 rounded-lg text-sm font-bold ' onClick={()=> {setOpen(false); openPost(null, null, null, null)}}> Close </button>
            </div>
        </div>

    );
};

export default OpenBlog;