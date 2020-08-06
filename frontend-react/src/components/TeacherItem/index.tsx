import React from 'react';
import wppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function TeacherItem(){
  return (
    
    <article className="teacher-item">
    <header>
        <img src="https://pbs.twimg.com/profile_images/1215280159588261888/pzneJg0D_400x400.jpg" alt="Vince"/>
        <div>
            <strong>Vince</strong>
            <span>Quimica</span>
        </div>
    </header>
    <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br/><br/>
        Lorem ipsum fusce eros velit imperdiet felis, odio in vel lectus litora class molestie, lobortis dapibus eget fermentum feugiat. ligula nullam habitasse hac mollis primis himenaeos tempus hac ligula phasellus est faucibus felis primis, sagittis ante feugiat justo sollicitudin tempus nisl cubilia ultrices pretium facilisis fusce nostra.

    </p>
    <footer>
        <p>
            Preço/hora
            <strong>R$ 20,00</strong>

        </p>
        <button type="button">
            <img src={wppIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
    </footer>

</article>
  )
}


export default TeacherItem;