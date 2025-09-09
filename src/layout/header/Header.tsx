/**
 * @Project: learn-react
 * @Author CHUNAM
 * @Date 9/9/2025
 * @Time 11:18 AM
 */
import {NavLink} from "react-router-dom";
import "./header.scss";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__left">
                    <NavLink to={"/"} className="logo">
                        LOGO
                    </NavLink>
                </div>
                <div className="header__right">
                    <nav className="menu">
                        <NavLink to="/about" className="menu__item">
                            Về chúng tôi
                        </NavLink>
                        <NavLink to="/career" className="menu__item">
                            Tuyển dụng
                        </NavLink>
                        <NavLink to="/news" className="menu__item">
                            Tin tức
                        </NavLink>
                        <NavLink to="/contact" className="menu__item">
                            Liên hệ
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
