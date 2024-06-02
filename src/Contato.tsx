import { goTo, sendMail } from "./function";


const Contato = () => {
  return (
    <footer id="contato" className="contato">
        <div className="container">
            <h1>Contato</h1>
                 <ul>
            <li onClick={()=> goTo('https://github.com/DiegoRamos36')}>
                <h4>Github</h4>
                <p>DiegoRamos36</p>
            </li>
            <li onClick={()=> {
                sendMail('diegoframos36@gmail.com')
            }}>
                <h4>Email</h4>
                <p>diegoframos36@gmail.com</p>
            </li>
            <li onClick={()=>goTo('https://wa.me/5521981734706')}>
                <h4>Telefone</h4>
                <p>(21) 98173-4706</p>
            </li>
            <li onClick={()=> goTo('https://www.linkedin.com/in/diego-ramos36/')}>
                <h4>LinkedIn</h4>
                <p>DiegoRamos36</p>
            </li>
                 
                 </ul>
        </div>
    </footer>
  );
};

export default Contato;
