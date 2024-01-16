import { Table, TableContainer } from "@chakra-ui/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { ModalDataModel, ProductItemModel } from "../../models/product";
import "./product-table.css";
import ProductsRows from "./ProductsRows";
import HeaderRows from "./HeaderRows";
import AppContext from "../../context/AppContext";
import ProductModal from "./ProductModal";

const modalDataDefaultValue: ModalDataModel = { name: "" };

/**
 * @component
 */
const ProductTable = () => {
	const { searchQuery } = useContext(AppContext);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState(modalDataDefaultValue);

	/**
	 *
	 * @returns fetched data
	 */
	const fetchProducts = async () => {
		// Perform your data fetching here (e.g., API call)
		const response = await fetch("http://localhost:3000/products");
		const data = await response.json();
		return data;
	};

	// useQuery hook to handle fetching data and handling errors
	const {
		data: productData,
		isLoading,
		error,
	} = useQuery("myData", fetchProducts);

	// Calls fetchProducts function on initialization
	useEffect(() => {
		fetchProducts();
	}, []);

	// A memoized function that handles filtering table based on search value
	const filteredEmployees = useMemo(() => {
		return productData
			? productData[0]?.filter((product: ProductItemModel) =>
					product?.name?.toLowerCase().includes(searchQuery.toLowerCase())
			  )
			: [];
	}, [productData, searchQuery]);

	const handleRowClick = (data: ModalDataModel) => {
		setIsModalOpen(true);
		setModalData(data);
	};

	const onModalClose = () => {
		setModalData(modalDataDefaultValue);
		setIsModalOpen(false);
	};

	return isLoading ? (
		<div>Loading...</div>
	) : error ? (
		<div>Error displaying products, refresh to try again.</div>
	) : (
		<div className='table-component-container'>
			<div className='products-list-num'>
				<div className='products-header'>Products</div>
				<div className='qty-header'>
					{filteredEmployees.length} or {productData[0].length} results
				</div>
			</div>
			<TableContainer className='table-container'>
				<Table w='100%'>
					<HeaderRows />
					<ProductsRows
						productData={filteredEmployees}
						handleRowClick={handleRowClick}
					/>
				</Table>
			</TableContainer>
			<ProductModal
				onClose={onModalClose}
				isOpen={isModalOpen}
				data={modalData}
			/>
		</div>
	);
};

export default ProductTable;
