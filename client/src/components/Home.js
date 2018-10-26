import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {

    getArticles = (searchTerm, beginDate, endDate) => {
        let beginString = "&begin_date=" + beginDate +"0101";
        let endString = "&end_date=" + endDate +"1231";
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=4e41f175bec44a67bbd3dc3f818e88ec${beginString}${endString}`);
      }

    render() {
        return (
            <div>
                <div className="SearchForm">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Topic</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter a new topic.." />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Start Year</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter A start year..." />
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">End Year</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter an end year..." />
                        </div>
                        <button type="button" class="btn btn-primary">Search</button>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
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
            </div>
        )
    }
}

export default Home;