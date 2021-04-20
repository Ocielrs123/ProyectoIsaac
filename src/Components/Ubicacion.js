import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';


class Ubicacion extends Component{
    render(){

        const respuesta_google=(respuesta)=>{
            console.log(respuesta);
          }

        return(
    <div className="App">
      <GoogleLogin
    clientId="41007219087-uo99sa16h95i0uf45g558qrvjpnkcsm1.apps.googleusercontent.com"
    buttonText="Ingresar"
    onSuccess={respuesta_google}
    onFailure={respuesta_google}
    cookiePolicy={'single_host_origin'}
     />
    </div>
        )
    }
}
export default Ubicacion;

