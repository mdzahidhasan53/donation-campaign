import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full mt-32">
            <div className="">
            <h3 className="text-3xl font-semibold text-orange-500 text-center">Ooops!!</h3>
            <h4 className="text-3xl font-semibold text-orange-700 py-3">Page not found! Please go Home..</h4>
            <Link className="flex  justify-center" to = "/"> <button className="btn btn-warning text-center text-white normal-case">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;