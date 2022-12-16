const Box = ({backgroundColor, width, height}) => {
    return (
        <div>
            <div style={{
                'backgroundColor':`${backgroundColor}`, 
                'height':`${height}em`, 
                'width':`${width}em`}}>
                <button>X</button>
            </div>
        </div>
    )
}
export default Box;