import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";
import App from "../App";
import Card from "../Components/Card";
import Home from "../Components/Home";
import Film from "../Components/Film";
import Maiche from "../Components/maiche";
import Zhihuan from "../Components/zhihuan";
import Datail from "../Components/datail";
import Gujia from "../Components/gujia";
import Xiangqing from "../Components/xiangqing";

import React from "react";

const router=(
		<Router>
			
			<App>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/film" component={Film}/>
					<Route path="/card" component={Card}/>
					<Route path="/maiche" component={Maiche}/>
					<Route path="/zhihuan" component={Zhihuan}/>
					<Route path="/datail" component={Datail}/>
					<Route path="/gujia" component={Gujia}/>
					<Route path="/xiangqing/:id" exact xomponent={Xiangqing}/>
				</Switch>
			</App>

		</Router>

	)

export default router;