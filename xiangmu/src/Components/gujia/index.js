import React from "react";
import "./index.css";

class Gujia extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>
			<ul className="gujia">
				<li>
					车型名称
					<span>请选择<i className="iconfont icon-more"></i></span>
				</li>
				<li>首次上牌时间<span>请选择<i className="iconfont icon-more"></i></span></li>
				<li>表显里程<span>请输入  万公里</span></li>
				<li>所在地<span>请选择<i className="iconfont icon-more"></i></span></li>
				<li>手机号<span>请输入手机号</span></li>
			</ul>
			<div id="kaishi"><a href="#">开始</a></div>
		</div>
	}
}

export default Gujia