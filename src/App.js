import './App.css';

const App = () => {
  return (
    <div>

      <p>Se o usuario não existe: retorna um novo usuário</p>
      <p>Se o usuario já existe: retorna erro "Full authentication is required to access this resource"</p>
      <button onClick={() => {
        fetch("https://codenation-central-de-erros-ca.herokuapp.com/users", {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": "{\"name\":\"dan\",\"email\":\"dan@dan.com\",\"password\":\"dan@dan.com\"}"
        })
          .then(response => response.json()).then(response => console.log(response))
          .catch(err => console.error(err));
      }}>Criar Usuário</button>
      
      <p>Se o usuario não existe: retorna null</p>
      <p>Se o usuario já existe: retorna o usuário</p>
      <button onClick={() => {
        fetch("https://codenation-central-de-erros-ca.herokuapp.com/users/dan@dan.com", {
          "method": "GET",
          "headers": {},
        })
          .then(response => response.json()).then(response => console.log(response))
          .catch(err => console.error(err));
      }}>Procurar Usuário</button>

      <p>Só retorna tristeza. Sempre da erro e nunca retorna o token</p>
      <button onClick={() => {
        fetch("https://codenation-central-de-erros-ca.herokuapp.com/users/dan@dan.com", {
          "method": "POST",
          "headers": {
            "cookie": "JSESSIONID=C9B7A1B84ADA934E29CF92BDAABCB179",
            "Content-Type": "multipart/form-data; boundary=---011000010111000001101001",
            "Authorization": "Basic Y29kZW5hdGlvbjoxMjM="
          }
        })
          .then(response => response.json()).then(response => console.log(response))
          .catch(err => console.error(err));
      }}>Pegar Token</button>
      <p>-------------------------------------</p>
      <p>para gerar o token pelo Oauth2 é necessario enviar o usuário&senha(codenation/123) da aplicação web pelo Basic+ usuario&senha de quem quer usar a API (dan@dan.com)</p>
    </div>)
}

export default App;
