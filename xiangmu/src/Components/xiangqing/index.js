import React from "react";
import "./index.css";
import axios from "axios"

class Xiangqing extends React.Component{
	constructor(props){
		super(props);
		this.state={
			filminfo:null
		}
	}
	render(){
		return <div id="xiangqing">
			{
				this.state.filminfo?
				<div>
					rrrr
				</div>
				:null
			}
		</div>
	}	componentDidMount(){
		axios.get(`/ajax/index/getinterestcar.ashx?callback=jsonpCallback&from=index&cid=${this.props.match.params.id}
&page=2&size=20&_s_time=1522719601292&_s_count=12&_s_key=akGoFOcIDzNW0LQzsiNKYBGvUI5KIseL12vbLnG&_=1522719601293`).then(res=>{
		console.log(res.data)
			this.setState({
				filminfo:res.data.data.film
			})


			// function actionCreator(){
			// 	return
			// }

			// store.dispatch(actionCreator());
			//
			console.log(res.data.data.film.name)
			this.props.kerwinchangetitle(res.data.data.film.name);
		})
	}
}

export default Xiangqing;