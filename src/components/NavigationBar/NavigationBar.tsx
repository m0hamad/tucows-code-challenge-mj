import { useContext } from "react";
import { Button, IconButton, Image } from "@chakra-ui/react";
import { isMobile, isTablet } from "../../utils/utils";
import AppContext from "../../context/AppContext";
import "./navigation-bar.css";

// Images
import settingsIcon from "../../assets/images/settings.svg";
import userIcon from "../../assets/images/user.svg";
import notificationsIcon from "../../assets/images/notifications.svg";
import logoIcon from "../../assets/images/storm-icon.svg";
import logoText from "../../assets/images/storm-text.svg";
import menuIcon from "../../assets/images/menu.svg";
import SearchBar from "../SearchBar/SearchBar";

const NavigationBar = () => {
	const { windowWidth } = useContext(AppContext);

	return (
		<>
			<div className='navigation-bar-container'>
				<div className='logo-container'>
					<Image src={logoIcon} alt='Storm Icon Logo' />
					<Image src={logoText} alt='Storm Text Logo' />
				</div>
				<div className='buttons-container'>
					{!isTablet(windowWidth) && <SearchBar />}
					{!isMobile(windowWidth) ? (
						<>
							<IconButton
								ml={5}
								className='icon-btn'
								aria-label='Settings'
								icon={<img src={settingsIcon} alt='Settings Icon' />}
							/>
							<IconButton
								className='icon-btn'
								aria-label='Notifications'
								icon={<img src={notificationsIcon} alt='Notifications Icon' />}
							/>
							<Button
								className='icon-btn'
								leftIcon={<img src={userIcon} alt='User Icon' />}
							>
								Adriana Arias
							</Button>
						</>
					) : (
						<IconButton
							className='icon-btn'
							aria-label='Menu'
							icon={<img src={menuIcon} alt='Menu Icon' />}
						/>
					)}
				</div>
			</div>
			{isTablet(windowWidth) && <SearchBar />}
		</>
	);
};

export default NavigationBar;
