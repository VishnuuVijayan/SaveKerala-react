import React, {
    Component
} from 'react'
import Axios from 'axios';

export default class EditAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collector_list: [],
            district: "",
            id: ""
        }
    }

    onChangeDistrict(e) {
        this.setState({
            district: e.target.value
        })
    }

    componentDidMount() {
        Axios.get("http://localhost:5000/collector-list/").then(res => {
            const data = res.data
            this.setState({
                collector_list: data
            })
            this.setState({
                district: data[0].district
            })
        })
    }

    onSubmit(e) {
        e.preventDefault();

    }
    render() {
        return ( <
            div style = {
                {
                    backgroundColor: "#fff",
                    height: 700
                }
            } >
            <
            h1 >
            hello <
            /h1> <
            /div>
        )
    }
}