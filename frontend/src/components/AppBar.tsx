import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar = ()=>{
    return (
        <div className="border-b border-slate-300 flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex flex-col justify-center">
                Medium Blog
            </Link>
            <div className="flex mt-2.5">
                <Link to={'/publish'}>
                    <button type="button" className="text-white  mr-4 cursor-pointer bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add blog</button>
                </Link>
                <div className="flex flex-col justify-center pb-2">
                    <Avatar size="big" name="Aman"/>
                </div>

            </div>
        </div>
    )
}