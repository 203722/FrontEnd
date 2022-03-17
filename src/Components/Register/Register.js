import axios from "axios";
import './Register.css';
import { useNavigate, Link } from "react-router-dom";

function App() {

const navigate = useNavigate();

const requestOptions = {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
    },
  };

const handleClick = () => {
  navigate('/Login');
};

const consume_Register = () => {

  var postData = {
    first_name: document.getElementById('first_name').value,
    last_name: document.getElementById('last_name').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    password2: document.getElementById('password2').value,
  }

  axios
  .post("http://localhost:8000/api/v1/register/createUser/",postData, requestOptions)
   .then(response => {
    console.log(response.data);
    alert("Registro exitoso")
    handleClick();
    })
  .catch((error) => {
    console.log(error.response.data)
    alert("Error \n\n" + error.response.data);
  });
  
};

const validate_Register = () => {
  var usernameVal = document.getElementById('username').value;
  var passwordVal = document.getElementById('password').value;
  var fNameVal = document.getElementById('first_name').value;
  var lNameVal = document.getElementById('last_name').value;
  var emailVal = document.getElementById('email').value;
  var password2Val = document.getElementById('password2').value;

  if(usernameVal === '' || passwordVal === '' || fNameVal === '' || lNameVal === '' || emailVal === '' || password2Val === ''){
    alert('Rellene todos los campos')
    
  }else{
    consume_Register();
  }
}

  return (
    <div className="register-form">
      <header className="App-header">
          <h1 class="label_2">Register</h1>

          <div class="field">
          <label class="label">Nombre de Usuario</label>
          <div class="control">
          <input type="text" id="username" placeholder="Username" required/>
          </div>
        </div>
        
        <div class="field">
          <label class="label">Nombre(s)</label>
          <div class="control">
          <input type="text" id="first_name" placeholder="nombre" required/>
          </div>
        </div>

        <div class="field">
          <label class="label">Apellido(s)</label>
          <div class="control">
          <input type="text" id="last_name" placeholder="apellido" required/>
          </div>
        </div>

        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
          <input type="email" id="email" placeholder="correo" required/>
          </div>
        </div>

          <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
          <input type="password" id="password" placeholder="contraseña" required/>
          </div>
        </div>

        <div class="field">
          <label class="label">Confirmar</label>
          <div class="control">
          <input type="password" id="password2" placeholder="confirmar contraseña" required/>
          </div>
        </div>

          <button id="form-btn" onClick={validate_Register}>Crear cuenta</button>
          <Link to="/Login" className="create-account">Ya tienes una cuenta?</Link>
      </header>
    </div>
  );
}

export default App;