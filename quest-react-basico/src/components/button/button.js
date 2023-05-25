
const Button = (props) => {
    const mensagem = () => {
        alert(`A label desse botão é ${props.label}`)
    }
    return <button onClick={mensagem} className="estilo">{props.label}</button>
}





export default Button