import ProductTable from "./components/ProductTable/ProductTable";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "./context/AppContext";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<ChakraProvider>
				<QueryClientProvider client={queryClient}>
					<AppProvider>
						<div className='layout-container'>
							<NavigationBar />
							<ProductTable />
						</div>
					</AppProvider>
				</QueryClientProvider>
			</ChakraProvider>
		</>
	);
}

export default App;
