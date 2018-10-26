import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {

    state = {
        beginYear:"",
        endYear:"",
        searchTerm:"",
        articles: []
    }


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

    
    getArticles = () => {
        let beginString = "&begin_date=" + this.state.beginYear +"0101";
        let endString = "&end_date=" + this.state.endYear +"1231";
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.searchTerm}&api-key=4e41f175bec44a67bbd3dc3f818e88ec${beginString}${endString}`)
        .than(res =>{
            console.log(res.data)
        })
      }

    render() {
        return (
            <div>
                <div className="SearchForm">
                    <form>
                        <div className="form-group">
                            <label Htmlfor="exampleFormControlInput1">Topic</label>
                            <input type="text" className="form-control" name="searchTerm" onChange ={this.handleInputChange} id="exampleFormControlInput1" placeholder="Enter a new topic.." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Start Year</label>
                            <input type="text" className="form-control" name="beginYear"  onChange = {this.handleInputChange} id="exampleFormControlInput1" placeholder="Enter A start year..." />
                        </div>
                        <div className="form-group">
                            <label Htmlfor="exampleFormControlInput1">End Year</label>
                            <input type="text" className="form-control" name="endYear" onChange = {this.handleInputChange} id="exampleFormControlInput1" placeholder="Enter an end year..." />
                        </div>
                        <button type="button" onClick = {this.getArticle} className="btn btn-primary">Search</button>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="results-table">
                    <table className="table">
                        <thead className="thead-dark">
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
                                <td><button type="button" className="btn btn-primary">Save</button>
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