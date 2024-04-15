function NavBar({ currentPage, handlePageChange }) {

    return (
        <div className="nav nav-tabs">
            <h2>Austin Anderson</h2>
            <ul className="nav-item">
                <li>
                    <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className = {currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    > About Me!</a>
                </li>
                <li className="nav-item">
                    <a
                    href="#work"
                    onClick={() => handlePageChange('Work')}
                    className = {currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    > My Work!</a>
                </li>
                <li className="nav-item">
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className = {currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    > Contact Me!</a>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;