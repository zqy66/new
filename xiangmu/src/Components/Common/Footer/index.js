import React from "react";
import "./index.css";

class Footer extends React.Component{
	constructor(props){
			super(props);

	}
	render(){
		return <div>
					<div className="div">
						<ul>
							<li>
								<i className="iconfont icon-viewgallery"></i>
								<p>首页</p>
							</li>
							<li>
							<i className="iconfont icon-good"></i>
								<p>买车</p>
							</li>
							<li>
							<i className="iconfont icon-process"></i>
								<p>卖车</p>
							</li>
							<li>
							<i className="iconfont icon-search"></i>
								<p>估价</p>
							</li>
							<li>
							<i className="iconfont icon-account"></i>
								<p>我的</p>
							</li>
						</ul>
					</div>
					
		</div>
	}
}

export default Footer