import { useContext } from "react";
import { Th, Thead, Tr } from "@chakra-ui/react";
import AppContext from "../../context/AppContext";
import { isMobile } from "../../utils/utils";

/**
 * @component
 */
const HeaderRows = () => {
	const { windowWidth } = useContext(AppContext);
	return (
		<Thead>
			<Tr>
				{!isMobile(windowWidth) && (
					<>
						<Th textAlign='left' className='th' w='10%'>
							ID
						</Th>
						<Th textAlign='center' className='th' w='15%'>
							Quantity
						</Th>
					</>
				)}
				<Th textAlign='center' className='th' w='55%'>
					Product Name
				</Th>
				{!isMobile(windowWidth) && (
					<Th textAlign='right' className='th bordered-cell' w='20%'>
						Prices
					</Th>
				)}
			</Tr>
		</Thead>
	);
};

export default HeaderRows;
