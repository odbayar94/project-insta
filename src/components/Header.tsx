import {
	AiOutlineHome,
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineProfile,
	AiOutlineLogout,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { IconContext } from "react-icons";

export const Header = () => {
	const history = useHistory();

	const logout = () => {
		sessionStorage.removeItem("user");
		history.push("/signin");
	};

	return (
		<nav className="page-header">
			<h2>Instagram</h2>
			<BiSearch
				style={{ position: "absolute", left: "40%" }}
				size="0.9em"
				color="#8e8e8e"
			/>
			<input type="text" id="search" placeholder="Search" />
			<IconContext.Provider value={{ className: "header-icons" }}>
				<div className="icons">
					<Link to="/feed" className="page-link">
						<AiOutlineHome />
					</Link>
					<RiMessengerLine />
					<Link to="/discover" className="page-link">
						<AiOutlineCompass />
					</Link>
					<AiOutlineHeart />
					<Link to="/profile" className="page-link">
						<AiOutlineProfile />
					</Link>
					<AiOutlineLogout onClick={logout} className="page-link" />
				</div>
			</IconContext.Provider>
		</nav>
	);
};
