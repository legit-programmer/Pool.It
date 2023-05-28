const Loading = () => {
    return (
        <div className="container d-flex justify-center items-center h-full">
            <div className="spinner-grow text-primary my-[25%]" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
