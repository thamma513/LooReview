 class MapArray extends Component{
    render(){
    const apple = [1,2,2,3,4,5,6]
    
    const { apple } = this.props;

    const placesList   = apple.map(apple => {
        console.log(apple)
        // return(
        //     <li>{"array object"."array object"}</li>
        // )
    })

    return(
        <ul>
        {placesList} 
        </ul>
    );
} 
}

export default MapArray;