import { createContext, ReactElement, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const AppContext = createContext({
	windowWidth: 0,
	windowHeight: 0,
	searchQuery: "",
	handleSearch: (newValue: string) => {
		newValue;
	},
	inputValue: "",
	handleClearSearch: () => {},
	onChangeInputValue: (newValue: string) => {
		newValue;
	},
});

type ChildrenType = { children?: ReactElement | ReactElement[] };

/**
 *
 * @param {*} children
 * @returns App Context Wrapper that can be accessed anywhere in-app and helps centralize
 * app-wide functions and prevents prop-drilling
 */
export const AppProvider = ({ children }: ChildrenType) => {
	const { windowWidth, windowHeight } = useWindowSize();
	const [searchQuery, setSearchQuery] = useState("");
	const [inputValue, setInputValue] = useState("");

	/**
	 * @param newQuery new search query to filter table
	 */
	const handleSearch = (newQuery: string) => setSearchQuery(newQuery);

	/**
	 * Handles clearing search query and input text
	 */
	const handleClearSearch = () => {
		setInputValue("");
		handleSearch("");
	};

	/**
	 * Change input value in the search bar
	 * @param newInputValue new input value in the search bar
	 */
	const onChangeInputValue = (newInputValue: string) => {
		setInputValue(newInputValue);
	};

	return (
		<AppContext.Provider
			value={{
				windowWidth,
				windowHeight,
				searchQuery,
				handleSearch,
				inputValue,
				handleClearSearch,
				onChangeInputValue,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
