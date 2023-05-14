import { BrowserRouter, Route, Routes } from "react-router-dom";

import { publicRoutes } from "./Routes";
import LoggedLayout from "./layout/loggedLayout/LoggedLayout";
import PublicLayout from "./layout/publicLayout/PublicLayout";
function App() {
	/*
		localstore.getitem("userData") 
		 => if (true)=> LoggedLayout fetch("localhost:8088/user?id= ...")=> reder userId .... 
		else => publicLayout
		
	*/
	
	return (
		<BrowserRouter>
			<div className="xl:w-3/4 mx-auto">
			{/* Localstore.getitem(userData) ? */}
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
					{/* : */}
				<Routes>
					{/* 
					- mơ app localstore.getitem("userData")
					 => if (true)=> LoggedLayout fetch("localhost:8088/user?id= ...")=> reder userId .... 
					else => publicLayout
					- khi login bắn lên localstore 1 biến để lưu userData
					
					
					
					*/}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
