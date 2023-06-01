const Home = () => {
    return (
        <>
            <div
                className="bg m-0 p-0 absolute left-0  w-full"
                style={{
                    backgroundImage:
                        'url("https://i.ibb.co/hYPfQLd/gradient.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                }}
            >
                <div className="container">
                    <div className=" main d-flex font-modern justify-center  my-[10%]">
                        <div className="left w-[50%]">
                            <h1 className=" font-semibold text-white text-8xl drop-shadow-2xl">
                                List your product with{" "}
                                <span className="font-bold text-[#204C45] animate-pulse">
                                    {" "}
                                    zero hassle, for free
                                </span>
                                .
                            </h1>
                            <div className="list d-flex my-5">
                                <p className="text-white text-2xl font-medium">
                                    No registrations.
                                    <br />
                                    <span className=" underline text-[#204C45]">
                                        {" "}
                                        Just grab your link and share!
                                    </span>
                                </p>
                                <a className=" mx-14 w-28 text-center drop-shadow-2xl" href="/add">
                                    <button className=" d-flex justify-center items-center w-full h-full btn btn-outline-success drop-shadow-2xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* <div className="right w-[50%]"><img className=" rounded-3xl w-full" src="https://img.freepik.com/free-vector/add-cart-concept-illustration_114360-1435.jpg?w=360&t=st=1685277641~exp=1685278241~hmac=152117ce6ec312fb83b64ca17bbccc7495797f7a3fbfe74113b330c919c18184" alt="" /></div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
