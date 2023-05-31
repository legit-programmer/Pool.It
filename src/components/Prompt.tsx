interface props {
    text: string;
}

const Prompt = ({ text }: props) => {
    return (
        <div
            id="prompt"
            className="prompt-main d-flex w-full items-center justify-center top-[45%] left-0 absolute "
        >
            <div className="content  w-[35%] rounded-lg p-4 drop-shadow-2xl bg-white">
                <p className=" text-red-400">{text}</p>
                <button
                    className="btn btn-outline-secondary float-right"
                    onClick={() => {
                        const elements = document.querySelector(
                            "#prompt"
                        ) as HTMLElement;
                        elements.style.visibility = "hidden";
                    }}
                >
                    Understood
                </button>
            </div>
        </div>
    );
};

export default Prompt;
