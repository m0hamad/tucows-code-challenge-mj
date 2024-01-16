import { useContext } from "react";
import {
	Button,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import AppContext from "../../context/AppContext";
import "./search-bar.css";

const SearchBar = () => {
	const { handleSearch, handleClearSearch, inputValue, onChangeInputValue } =
		useContext(AppContext);

	return (
		<div className='searchbar-container'>
			<InputGroup size='lg'>
				<InputLeftElement>
					<SearchIcon />
				</InputLeftElement>
				<Input
					placeholder='Search'
					value={inputValue}
					onChange={(e) => onChangeInputValue(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSearch(inputValue)}
				/>
				{inputValue && (
					<InputRightElement cursor='pointer' onClick={handleClearSearch}>
						<CloseIcon />
					</InputRightElement>
				)}
			</InputGroup>
			<Button
				size='lg'
				className='search-btn'
				onClick={() => handleSearch(inputValue)}
			>
				Search
			</Button>
		</div>
	);
};

export default SearchBar;
