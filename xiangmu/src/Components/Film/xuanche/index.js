import React from "react";
import "./index.css";
import axios from "axios"

class Xuanche extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				looplist:[],
				looplist1:["5万以下","5-10万","10-10万","15-20万","20万以上","SUV","中型车 ","紧凑型","小型车","MPV","1年内","2年内","3年内","3-5年","5-8年","准新车","练手车","淘车认证","纯电动车","品牌认证"]
			}
	}

	render(){
		return <div >
				<h3>快速选车</h3>
				<ul className="xuancheUl">
					{
						this.state.looplist.map(item=>
							<li key={item.id}><a href="#">{item.bs_Name}</a></li>
							)
					}
					<li><a href="">更多</a></li>
				</ul>
				<ul className="xuancheUl1">
					{
						this.state.looplist1.map(item=>
								<li><a href="#">{item}</a></li>
							)
					}
				</ul>
		</div>
	}
	componentDidMount(){
	axios.get("/ajax/brand/gethotbrandmaster.ashx?fprom=1&t=Mon%20Apr%2002%202018%2009:25:40%20GMT+0800%20(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&callback=jQuery18209793492907546695_1522632340358").then(res=>{
		var a = res.data.substr(res.data.indexOf('['));
		var b = JSON.parse(a.substr(0,a.indexOf(']')+1));
			this.setState({
				looplist:b,
			})
		})
	}
}

export default Xuanche;