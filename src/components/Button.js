const Button = ({color,text}) => {
    return ( 
    <input type="submit" value={text} style={{backgroundColor:color}}/>
    );
}
 
export default Button;