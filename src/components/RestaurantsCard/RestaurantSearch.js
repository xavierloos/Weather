import React from 'react';
import './Restaurants.css';
import Location from '../WeatherCard/Location'




class RestaurantSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // term: '',
            location: ''
            // sortBy: 'best_match'
        };
        // this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        // this.sortByOptions = {
        //     'Best Match': 'best_match',
        //     'Highest Rated': 'rating',
        //     'Most Reviewed': 'review_count'

        // }
    }
    // getSortByClass(sortByOption) {
    //     if (this.state.sortBy === sortByOption) {
    //         return 'active';
    //     }
    //     return '';

    // }
    // handleSortByChange(sortByOption) {
    //     this.setState({
    //         sortBy: sortByOption
    //     });
    // }
    // handleTermChange(event) {
    //     this.setState({
    //         term: event.target.value
    //     });
    // }
    handleLocationChange(event) {
        this.setState({
            location: event.target.value
            // location: Location
        });
    }
    handleSearch(event) {
        this.props.searchYelp(
            // this.state.term,
            this.state.location,
            // this.state.sortBy
        );
        event.preventDefault()
    }
    // renderSortByOptions() {
    //     return Object.keys(this.sortByOptions).map(sortByOption => {
    //         let sortByOptionValue = this.sortByOptions[sortByOption];
    //         return (<li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
    //             {sortByOption}
    //         </li>);
    //     });
    // }
    render() {
        return (
            <div className="RestaurantSearch">
                {/* <div className="RestaurantSearch-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div> */}
                <div className="RestaurantSearch-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="RestaurantSearch-submit">
                    <a onClick={this.handleSearch} >Let's Go</a>
                </div>
            </div>
        );
    }
}
export default RestaurantSearch;