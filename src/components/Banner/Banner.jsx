

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/k0ybRyL/Banner-bg.png)' }}>
            <div className="hero-overlay bg-white bg-opacity-90"></div>
            <div className="hero-content text-center text-[#0B0B0B]">
                <div>
                    <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                    <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button className="btn bg-[#FF444A] text-white normal-case">Search</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;