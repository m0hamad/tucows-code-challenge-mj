import { Tbody, Td, Tr } from "@chakra-ui/react";
import { ModalDataModel, ProductItemModel } from "../../models/product";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { isMobile } from "../../utils/utils";

/**
 *
 * @param productData Product information
 * @param handleRowClick Click handler function that open modal with selected data
 * @returns component
 */
const ProductsRows = ({
	productData,
	handleRowClick,
}: {
	productData: ProductItemModel[];
	handleRowClick(name: ModalDataModel): void;
}) => {
	const { windowWidth } = useContext(AppContext);

	return (
		<Tbody>
			{productData.map(
				({ id, quantity, name, total, serial }: ProductItemModel) => (
					<Tr
						key={id}
						className='product-row'
						onClick={() => handleRowClick({ name })}
					>
						{!isMobile(windowWidth) && (
							<Td textAlign='left' className='td' w='10%'>
								{id}
							</Td>
						)}
						{!isMobile(windowWidth) && (
							<Td
								style={{ textAlign: "center" }}
								className='td'
								w='15%'
								isNumeric
							>
								{quantity}
							</Td>
						)}
						<Td className='td' w='55%'>
							{name}
							<br />
							<div className='product-name-secondary'>
								{serial}
								{isMobile(windowWidth) && ` - Qty: ${quantity}`}
							</div>
						</Td>
						{!isMobile(windowWidth) && (
							<Td align='right' className='bordered-cell td' w='20%' isNumeric>
								${total}
							</Td>
						)}
					</Tr>
				)
			)}
		</Tbody>
	);
};

export default ProductsRows;
