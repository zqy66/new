import React from "react";
import "./index.css";
import axios from "axios";
class Datail extends React.Component{
	constructor(props){
		super(props);
		this.state={
			list1:[],
		}
	}
	render(){
		return <div>
				<div id="box1">
					<ul>
						{
							this.state.list1.map(item=>
								<li>{item.Name}</li>
								)
						}
					</ul>
				</div>
		</div>
	}
	componentDidMount(){
	axios.get("/ajax/city/getprovinceandotherdata.ashx?callback=jQuery18207695226516797111_1522804795423&_=1522804795455").then(res=>{
		var a = res.data.substr(res.data.indexOf('['));
		var b = JSON.parse(a.substr(0,a.indexOf(']')+1));
		console.log(b)
			this.setState({
				list1:b
			})
		})
	}
}
export default Datail