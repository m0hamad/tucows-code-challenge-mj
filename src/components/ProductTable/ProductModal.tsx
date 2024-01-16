import {
	Button,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { ModalDataModel } from "../../models/product";
import { isMobile } from "../../utils/utils";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import laptop from "../../assets/images/laptop.png";

/**
 *
 * @param onClose function that handles closing the model
 * @param isOpen Whether the modal is open
 * @param data the product data to display in modal
 * @component
 */
const ProductModal = ({
	onClose,
	isOpen,
	data,
}: {
	onClose(): void;
	isOpen: boolean;
	data: ModalDataModel;
}) => {
	const { windowWidth } = useContext(AppContext);

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size={isMobile(windowWidth) ? "full" : "5xl"}
			isCentered
		>
			<ModalOverlay />
			<ModalContent p='40px'>
				<ModalHeader className='modal-header'>{data.name}</ModalHeader>
				<ModalCloseButton />
				<ModalBody className='modal-content-body'>
					<Image src={laptop} alt='Laptop Image' />
					<div>
						<b>Key Features</b>
						<br />
						<br />
						• 2.6 GHz Intel Core i7 6-Core (9th Gen)
						<br />
						• 16GB of 2666 MHz DDR4 RAM | 8TB SSD
						<br />
						• 16" 3072 × 1920 Retina Display
						<br />
						• AMD Radeon Pro 5600M GPU (8GB HBM2)
						<br />
						<br />
						The Apple 16" MacBook Pro features a 16" Retina Display, a Magic
						Keyboard with a redesigned scissor mechanism, a six-speaker
						high-fidelity sound system, and an advanced thermal design. This
						MacBook Pro also features an AMD Radeon Pro 5600M graphics card, a
						7nm mobile discrete GPU designed for pro users. With 8GB of HBM2
					</div>
				</ModalBody>
				<ModalFooter>
					<Button
						width={isMobile(windowWidth) ? "full" : ""}
						className='modal-cancel-button'
						onClick={onClose}
					>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ProductModal;
