function NavBar({ currentPage, handlePageChange }) {

    return (
        <div className="navbar">
            <h2 className="title">Austin Anderson</h2>
            <ul className="navBtns">
                <li>
                    <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className = 'button is-info is-responsive is-small'
                    > About Me!</a>
                </li>
                <li className="">
                    <a
                    href="#work"
                    onClick={() => handlePageChange('Work')}
                    className = 'button is-success is-responsive is-small'
                    > My Work!</a>
                </li>
                <li className="">
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className = 'button is-link is-responsive is-small'
                    > Contact Me!</a>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;