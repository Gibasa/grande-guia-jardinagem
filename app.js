function pesquisar() {
    // Obtém a categoria selecionada pelo usuário
    let categoria = document.getElementById("categoria").value;

    // Obtém o nome da planta digitado pelo usuário (caso haja)
    let pesquisaPlanta = document.getElementById("pesquisaPlanta").value.toLowerCase();

    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Função auxiliar para verificar se o nome da planta corresponde ao termo de busca
    function plantaCorresponde(planta) {
        return planta.titulo.toLowerCase().includes(pesquisaPlanta);
    }

    // Verifica qual categoria foi selecionada
    if (categoria === "comestiveis" || categoria === "ambos") {
        for (let planta of dados.Comestiveis) {
            // Exibe apenas plantas que correspondem ao termo de busca ou, se nenhum termo for fornecido, todas as plantas
            if (plantaCorresponde(planta) || !pesquisaPlanta) {
                resultados += `
                    <div class="item-resultado">
                        <h2>${planta.titulo}</h2>
                        <p><strong>Nome Científico:</strong> ${planta.nomeCientifico}</p>
                        <p><strong>Descrição:</strong> ${planta.descricao}</p>
                        <p><strong>Cultivo:</strong></p>
                        <ul>
                            <li><strong>Regagem:</strong> ${planta.cultivo.regagem}</li>
                            <li><strong>Luminosidade:</strong> ${planta.cultivo.luminosidade}</li>
                            <li><strong>Solo:</strong> ${planta.cultivo.solo}</li>
                            <li><strong>Adubação:</strong> ${planta.cultivo.adubacao}</li>
                            <li><strong>Poda:</strong> ${planta.cultivo.poda}</li>
                        </ul>
                        <p><strong>Benefícios:</strong></p>
                        <ul>
                            <li><strong>Saúde:</strong> ${planta.beneficios.saude}</li>
                            <li><strong>Culinária:</strong> ${planta.beneficios.culinaria}</li>
                        </ul>
                    </div>
                    <hr>
                `;
            }
        }
    }

    if (categoria === "ornamentais" || categoria === "ambos") {
        for (let planta of dados.Ornamental) {
            if (plantaCorresponde(planta) || !pesquisaPlanta) {
                resultados += `
                    <div class="item-resultado">
                        <h2>${planta.titulo}</h2>
                        <p><strong>Nome Científico:</strong> ${planta.nomeCientifico}</p>
                        <p><strong>Descrição:</strong> ${planta.descricao}</p>
                        <p><strong>Cultivo:</strong></p>
                        <ul>
                            <li><strong>Regagem:</strong> ${planta.cultivo.regagem}</li>
                            <li><strong>Luminosidade:</strong> ${planta.cultivo.luminosidade}</li>
                            <li><strong>Solo:</strong> ${planta.cultivo.solo}</li>
                            <li><strong>Adubação:</strong> ${planta.cultivo.adubacao}</li>
                            <li><strong>Poda:</strong> ${planta.cultivo.poda}</li>
                        </ul>
                        <p><strong>Outros Benefícios:</strong> ${planta.beneficios.outros}</p>
                    </div>
                    <hr>
                `;
            }
        }
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados || `<p>Nenhuma planta encontrada.</p>`;
}
