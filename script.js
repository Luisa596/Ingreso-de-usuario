class Usuario {
    constructor()
    {
        var email = '';
        var pass = '';
    }
    obtener()
    {
        var email = document.getElementById('email').value;
        var pass = document.getElementById('pass').value;
        this.p(email, pass);
        
    }
    p = function(email, pass)
    {
        if(email && pass)
        {
            alert("Bienvenido " + email);
        }else{
            alert("Credencial no válida");
        }
    }
}
var user = new Usuario();