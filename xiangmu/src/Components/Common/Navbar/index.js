import React from "react";
import "./index.css";
import {
	NavLink
} from "react-router-dom";

class Navbar extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return <nav>
			<img src="http://image.bitautoimg.com/taoche/2018_m_usedcar/taoche_logo.svg"/>
			<input type="text" name="fname" placeholder="搜索品牌或车型"/>
			<span>大连
				<NavLink to="datail"><i className="iconfont icon-moreunfold"></i></NavLink>
			</span>
			<i className="iconfont icon-category" onClick={()=>{
				this.props.event()
			}}></i>
		</nav>
	}
}
export default Navbar