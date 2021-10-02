import {
	AiOutlineHome,
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineProfile,
	AiOutlineLogout,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { Link} from "react-router-dom";
import { IconContext } from "react-icons";

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { logOut } from "../redux/user/userActions"

export const Header = () => {
	useAppSelector(state => state.userReducer); 
    const dispatch = useAppDispatch();

	const logOutFunction = () => {	
		dispatch(logOut() as any);
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
					<AiOutlineLogout onClick={logOutFunction} className="page-link" />
				</div>
			</IconContext.Provider>
		</nav>
	);
};
