import { BrowserRouter, Route, Routes } from "react-router-dom";

import { publicRoutes } from "./Routes";
import LoggedLayout from "./layout/loggedLayout/LoggedLayout";
import PublicLayout from "./layout/publicLayout/PublicLayout";
function App() {
	return (
		<BrowserRouter>
			<div className="xl:w-3/4 mx-auto">
				<Routes>
					{publicRoutes.map((route, index) => {
						const Layout =
							route.layout === null ? LoggedLayout : PublicLayout;
						const Page = route.component;
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Page />
									</Layout>
								}
							/>
						);
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
