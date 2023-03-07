function pesquisarCep(){
    // para chamar um DOM usar 'document'
    var cep = document.querySelector("#cep").value
    
    // como fazer uma requisição de API 
    fetch(`https://viacep.com.br/ws/${cep}/json/` )
    // fetch("https://viacep.com.br/ws/"+ cep + "/json/" )

    .then(response => response.json())
    .then(response => {
        // para preencher as informações 
        document.querySelector('#listagem')
        .insertAdjacentHTML('beforeEnd',`
        
<tr>
    <td>${response.cep}</td> 
    <td>${response.logradouro}</td>
    <td>${response.complemento}</td>
    <td>${response.bairro}</td>
    <td>${response.localidade}</td>
    <td>${response.uf}</td>
</tr>
        
        
        `)

    })
    
}