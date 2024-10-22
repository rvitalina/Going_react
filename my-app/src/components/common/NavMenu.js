import {Link} from 'react-router-dom';

export default function NavMenu() {
    return(
        <div className="menu">
            <nav className="nav-menu">
                <ul>
                    <li><Link to={"/"}>home</Link></li>
                    <li><Link to={"/cheap-flights"}>cheap flights</Link></li>
                    <li><Link to={"/about"}>about</Link></li>
                    <li><a href="#how-it-works" className="second-section-href" data-i18="63"></a></li>
                    <li className="logout hidden"><a data-i18="96">log out</a></li>
                    {/* <li className="log-in"><a href="./../html/log-in.html" data-i18="3">log in</a></li>
                    <li className="sign-up"><a href="./../html/sign-up.html" data-i18="4">sign up</a></li> */}
                </ul>
                <div className="icons-container">
                    <svg id="theme-switcher" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.9999 8.68997V3.99997H15.3099L11.9999 0.689972L8.68994 3.99997H3.99994V8.68997L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.68997ZM11.9999 18C11.1099 18 10.2599 17.8 9.49994 17.45C11.5599 16.5 12.9999 14.42 12.9999 12C12.9999 9.57997 11.5599 7.49997 9.49994 6.54997C10.2599 6.19997 11.1099 5.99997 11.9999 5.99997C15.3099 5.99997 17.9999 8.68997 17.9999 12C17.9999 15.31 15.3099 18 11.9999 18Z" fill="var(--color-font-white)"/>
                    </svg>
                    <select name="select-lang" id="language-switcher" onchange="changeLanguage()">
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </nav>
        
            <svg className="close-menu-btn" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 38 38" fill="none">
                <g clip-path="url(#clip0_389_938)">
                    <path d="M38 0H0V38H38V0Z" fill="var(--color-font-green)" fill-opacity="0.01"/>
                    <path d="M19.0001 34.8334C27.7446 34.8334 34.8334 27.7446 34.8334 19.0001C34.8334 10.2556 27.7446 3.16675 19.0001 3.16675C10.2556 3.16675 3.16675 10.2556 3.16675 19.0001C3.16675 27.7446 10.2556 34.8334 19.0001 34.8334Z" stroke="var(--color-font-green)" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M23.4784 14.5217L14.5217 23.4784" stroke="var(--color-font-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-font-green)"/>
                    <path d="M14.5217 14.5217L23.4784 23.4784" stroke="var(--color-font-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="var(--color-font-green)"/>
                </g>
                <defs>
                    <clipPath id="clip0_389_938">
                        <rect width="38" height="38" fill="var(--color-font)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}