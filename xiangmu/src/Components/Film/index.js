import React from "react";
import "./index.css";
import Xuanche from "./xuanche";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';
class Film extends React.Component{
	constructor(props){
			super(props);
			this.state={
				arrlist:[],
				isMore:true,
			}

	}
	render(){
		return <div>
			<div id="box1">
				<ul>
					<li>
						<img src="http://img5.taoche.cn/99/0318000feg.png"/>
						<p>快速卖车</p>
					</li>
					<li>
						<img src="http://img5.taoche.cn/99/0318000feh.png"/>
						<p>车辆估价</p>
					</li>
					<li>
						<img src="http://img5.taoche.cn/99/0318000bke.png"/>
						<p>置换买车</p>
					</li>
					<li>
						<img src="http://img5.taoche.cn/99/0318000bkd.png"/>
						<p>车源收藏</p>
					</li>
				</ul>
			</div>
			<ul className="ulqqq">
				<li>足迹:</li>
				<li><span>奥迪200</span></li>
				<li><span>大众</span></li>
				<li><span>suv</span></li>
				<li><span>淘车认证</span></li>
			</ul>
			<Xuanche/>
			<div id="box2"><a href="#">查看更多></a></div>
			<div id="box3">
				<b>放心保障二手车</b>
				<span><a href="#">查看全部></a></span>
			</div>
			<ul className="tupian">
				<li><a href=""><img src="//image.bitautoimg.com/taoche/2018_m_usedcar/taocheRZ.png"/></a></li>
				<li><a href=""><img src="//image.bitautoimg.com/taoche/2018_m_usedcar/pinpaiRZ.png"/></a></li>
			</ul>
			<InfiniteScroll
			    pageStart={0}
			    initialLoad={false}
			    loadMore={this.loadMore.bind(this)}
			    hasMore={this.state.isMore}
			    threshold={10}
			    loader={<div className="loader" key={0}>Loading ...</div>}
			>
			<ul className="like">
				{
					this.state.arrlist.map(item=>
						<li>
							<dl>
								<dt><img src={item.PicLink}/></dt>
								<dd>
									<p>{item.CarTitle}</p>
									<p><span>{item.BuyCarDateText}</span><span>{item.DrivingMileageText}</span><span>{item.CarCityName}</span></p>
									<b>{item.LoanFirstPayText}</b>
								</dd>
							</dl>
							
						</li>
						)
				}
			</ul>
			</InfiniteScroll>

			<div id="footerdiv"></div>
		</div>
	}
	loadMore(){
		this.current++;
		if(this.current>this.total){
			this.setState({
				isMore:false
			})
			return ;
		}

		axios.get(`/ajax/index/getinterestcar.ashx?callback=jsonpCallback&from=index&cid=1708&page=${this.current}&size=20&_s_time=1522719601292&_s_count=12&_s_key=akGoFOcIDzNW0LQzsiNKYBGvUI5KIseL12vbLnG&_=1522719601293`).then(res=>{
			var a = res.data.substr(res.data.indexOf('['));
			var b = JSON.parse(a.substr(0,a.indexOf(']')+1));
			this.setState({
				arrlist:[...this.state.arrlist,...b]
			})
		})
		
	}
	componentDidMount(){
	axios.get("/ajax/index/getinterestcar.ashx?callback=jsonpCallback&from=index&cid=1708&page=2&size=20&_s_time=1522719601292&_s_count=12&_s_key=akGoFOcIDzNW0LQzsiNKYBGvUI5KIseL12vbLnG&_=1522719601293").then(res=>{
		var a = res.data.substr(res.data.indexOf('['));
		var b = JSON.parse(a.substr(0,a.indexOf(']')+1));
		console.log(b)
			this.setState({
				arrlist:b,
			})
		})
	}
}

export default Film