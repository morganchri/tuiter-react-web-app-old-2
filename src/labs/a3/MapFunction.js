function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    return(
        <div>
            <h1>Map</h1>
            squares = {squares}<br/>
            cubes = {cubes}
        </div>
    )
}

export default MapFunction