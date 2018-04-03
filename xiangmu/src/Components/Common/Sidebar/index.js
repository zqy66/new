import React from "react";
import "./index.css";
import {
	NavLink
} from "react-router-dom";

class Sidebar extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return <div>
			{
				this.props.show?
				<ul  className="ul" onClick={()=>{
					this.props.event()
				}}>
					<li><NavLink to="/home">首页</NavLink></li>
					<li><NavLink to="/film">二手车</NavLink></li>
					<li><NavLink to="/card">新车</NavLink></li>
					<li><NavLink to="/maiche">卖车</NavLink></li>
					<li><NavLink to="/zhihuan">置换</NavLink></li>

				</ul>
				:null
			}
				
		</div>
	}
}

export default Sidebar;