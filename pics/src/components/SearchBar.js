import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
                </div>
            </form>
        </div>
        );
    }
}

//for single line of codes we write as
// <input type="text" onChange={(event) => console.log(event.target.value)} />

export default SearchBar;