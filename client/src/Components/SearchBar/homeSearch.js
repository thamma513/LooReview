import React, { Component } from 'react';
import {Collapsible, CollapsibleItem, Row, Input, Col, Button} from 'react-materialize';
import 'whatwg-fetch';

class Search extends Component {

    constructor(){
        super();
        this.state = {
            searchTerms: '',
            searchResponse: {}
        };

        this.onTextboxChangeSearch = this.onTextboxChangeSearch.bind(this);
        

        this.searchLoos = this.searchLoos.bind(this);
    }

    searchLoos() {
        // Grab state
        const { searchTerms } = this.state;
        
        console.log(searchTerms);
        // Get request to backend
        fetch('/search/location?input=' + searchTerms, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            searchTerms: searchTerms,
          }),
        }).then(res => {
            console.log('Response: ', res);
          });
    }

    onTextboxChangeSearch(event) {
        this.setState({
            searchTerms: event.target.value,
        });
    }

    render(){

        const {
            searchTerms
          } = this.state;

        return(
                <Row className='clearfix'>
                    <Col offset='s2' s={8}>                                            
                        <Input type="text" ref="location" placeholder="Enter a Location or Point of Interest" value={searchTerms} onChange={this.onTextboxChangeSearch} s={12} />
                        <Button style={{  background: '#80deea' }} type="submit" waves="purple" onClick={this.searchLoos} >Search</Button>                                            
                    </Col>
                    <Collapsible>
                        <CollapsibleItem>
                            <
                </Row>
        );
    }

}