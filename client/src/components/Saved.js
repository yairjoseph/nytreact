import React, { Component } from "react";
import { Link } from "react-router-dom";

class Saved extends Component {

    // axios.get("/api/articles")
    //         .then(res => {
    //             this.setState({articles:res.data.response.docs})

    //         })
    render() {
        return (

            <div className="results-table">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">URL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Title</td>
                            <td>Date</td>
                            <td>URL</td>
                            <td><button type="button" class="btn btn-primary">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Saved;