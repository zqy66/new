import React from "react";
import "./index.css";
import axios from "axios";
import ReactSwipe from "react-swipe";

class Home extends React.Component{
	constructor(props){
			super(props);
			this.state = {
				looplist:[]
			}

	}
	render(){
		return <div>
	
			 <ReactSwipe className="carousel" swipeOptions={{
			 	auto: 2000,continuous: true}} key={this.state.looplist.length}>
               {
               	this.state.looplist.map(item=>
               		<img src={item.imageUrl} key={item.id}/>
               	)
               }
            </ReactSwipe>
            <ul class="home_ul">
         		<li>
	         		<a href="">
		         		<img src="http://img5.taoche.cn/99/0318000fe4.png" alt=""/>
		         		<span>二手车</span>
	         		</a>
         		</li>
         		<li><a href=""><img src="http://img5.taoche.cn/99/0318000fe5.png" alt=""/><span>快速卖车</span></a></li>
         		<li><a href=""><img src="http://img5.taoche.cn/99/0318000fe6.png" alt=""/><span>估价</span></a></li>
         		<li><a href=""><img src="http://img5.taoche.cn/99/0318000fe5.png" alt=""/><span>置换</span></a></li>
         		<li><a href=""><img src="http://img5.taoche.cn/99/0318000fe4.png" alt=""/><span>开走吧</span></a></li>
         	</ul>	

		</div>
	}
	componentDidMount(){
	axios.get("/v4/api/billboard/home?__t=1522287000275").then(res=>{
			this.setState({
				looplist:res.data.data.billboards
			})
		})
	}
}

export default Home