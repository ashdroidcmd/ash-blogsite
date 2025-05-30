import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="bg-zinc-900 border-b border-b-gray-700 shadow-sm fixed w-full z-50 font-[Roboto]">
                <div className="mx-auto max-w-7xl navbar">

                    <div className="navbar-start flex flex-row items-center">
                        <Link to="/" className="btn btn-ghost py-8 px-6 text-4xl font-[Montserrat]">
                            <img src="/logo.png" alt="Logo" className="w-14 h-14"/>
                        Blog
                        </Link>
                    </div>

                    {/* <div className="navbar-end">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                        </ul>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar