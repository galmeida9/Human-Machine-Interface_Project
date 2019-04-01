var newsStories = {
    "mocambique": {
        title: "501 mortos em Moçambique",
        text: "O número de feridos manteve-se em 1.523, mas o total de pessoas afetadas subiu para 843.723. O grupo de pessoas afetadas inclui todas aquelas que perderam as casas, precisam de alimentos ou de algum tipo de assistência, explicaram as autoridades. O total de desalojados em centros de acolhimento mantém-se em 140.784, assim como o número de famílias beneficiárias de assistência humanitária: 29.098. Os outros dados publicados pelo Instituto Nacional de Gestão de Calamidades (INGC) que hoje sofreram alterações foram o total de salas de aula afetadas, que subiu para 3.318, com 150.854 alunos prejudicados, e o número de casas totalmente destruídas que ascende 56.095 (com outras 28.129 parcialmente danificadas), sendo que a maioria são habitações de construção precária. Centenas de milhares de pessoas necessitam de ajuda nos três países afetados: Moçambique, Zimbabué e Maláui. Até hoje, estão contabilizados 746 mortos nos três países, segundo as autoridades locais e a ONU.",
    }, 
    "futebol": {
        title:"Felizmente a Federação Portuguesa de Futebol teve o bom-senso que a RTP não teve",
        text: "António Costa diz que o Governo está a analisar os esclarecimentos da RTP sobre o acordo que fez com a Federação Portuguesa de Futebol e que, entretanto, caiu. Depois dessa análise, serão tomadas medidas.",
    },
    "lanche": {
        title: "Lanches das crianças do pré-escolar vão ter fruta e legumes",
        text: "A distribuição de fruta e legumes nos lanches dos alunos do 1.º ciclo vai ser alargada ao pré-escolar, anunciou a responsável pelo programa da Direção-Geral da Saúde (DGS), que reconhece que a iniciativa tem ficado aquém do esperado.",
    },
    "brexit": {
        title: "Brexit: o que os 400 mil portugueses têm de fazer para permanecer no Reino Unido?",
        text: "Depois de o Parlamento britânico ter rejeitado pela terceira vez o acordo de saída da UE, o Brexit fica agora agendado para o dia 12 de abril. Mas como fica a situação dos 400 mil portugueses que vivem no Reino Unido da Grã-Bretanha (que abrange Inglaterra, Escócia e País de Gales) e Irlanda do Norte? Os portugueses que não tenham a cidadania britânica têm de fazer registo num status específico, baseado nos anos que já passaram a viver naquele país, ou seja: Recorrem ao settled status – estatuto de residência permanente –, se moram há cinco anos ou mais no Reino Unido; Registam-se ao pre-settled status – estatuto de residência temporária –, para quem mora há menos de cinco anos. Clique aqui para fazer o registo.",
    },
    "bebe": {
        title: "Como se mantém vivo um bebé na barriga de uma mulher em morte cerebral",
        text: "Ao fim de menos de 32 semanas de gestação, no total, Salvador teve de ser retirado do ventre da mãe mais cedo do que se esperava. Os médicos já não estavam a conseguir sustentar, através das máquina, a respiração de Catarina Sequeira, diagnosticada com morte cerebral em dezembro. O oxigénio não estava a chegar à criança, que corria já mais riscos dentro da barriga da mãe do que se viesse ao mundo condenado a passar os primeiros tempos de vida na incubadora. A última palavra foi, como é sempre, dos obstetras. Injetaram uma hormona esteroide chamada corticosteroide que amadureceu à pressa os pulmões, intestinos e sistema nervoso central do feto. Prepararam Catarina para a cesariana. E, durante a madrugada, às 04h23, nasceu Salvador, o segundo bebé milagre português, gerado dentro de uma mãe clinicamente morta. Tinha 1.700 gramas, 40 centímetros. E outra batalha para enfrentar. Outra, porque a primeira de todas começou quando Salvador ainda só pesava 240 gramas e tinha o tamanho de uma maçã. A mãe, uma mulher de 26 anos, teve um ataque de asma que lhe desligou a atividade cerebral para sempre. Não há volta a dar. O coração bate, os intestinos e os rins ainda funcionam, mas nem o cérebro nem o tronco cerebral respondem a qualquer estímulo. Catarina está morta, clinicamente, desde 20 de dezembro. Mas continuou ligada às máquinas até esta quinta-feira, para dar vida ao filho. Durante estas 13 semanas, foi numa “incubadora humana”, adjetivou a avó da criança.",
    }
}

function showNews(News) {
    el.scrollLeft = 0;
    el.scrollTop = 0;
    currentpage = "newsStories";
    document.getElementsByClassName("news")[0].style.display = "none";
    document.getElementsByClassName("newsStory")[0].style.display = "block";
    document.querySelectorAll(".newsPart").forEach(function(element) {
        element.innerHTML = newsStories[News][element.id];
    });
}

function showLocal() {
    document.getElementsByClassName("local")[0].style.display = "block";
    document.getElementsByClassName("local")[1].style.display = "block";
    document.getElementsByClassName("politics")[0].style.display = "none";
    document.getElementsByClassName("sport")[0].style.display = "none";
    document.getElementsByClassName("science")[0].style.display = "none";
    document.getElementById("filterpopup").style.display = "none";
}

function showPolitics() {
    document.getElementsByClassName("politics")[0].style.display = "block";
    document.getElementsByClassName("local")[0].style.display = "none";
    document.getElementsByClassName("local")[1].style.display = "none";
    document.getElementsByClassName("sport")[0].style.display = "none";
    document.getElementsByClassName("science")[0].style.display = "none";
    document.getElementById("filterpopup").style.display = "none";
}

function showScience() {
    document.getElementsByClassName("science")[0].style.display = "block";
    document.getElementsByClassName("politics")[0].style.display = "none";
    document.getElementsByClassName("sport")[0].style.display = "none";
    document.getElementsByClassName("local")[0].style.display = "none";
    document.getElementsByClassName("local")[1].style.display = "none";
    document.getElementById("filterpopup").style.display = "none";
}

function showSports() {
    document.getElementsByClassName("sport")[0].style.display = "block";
    document.getElementsByClassName("politics")[0].style.display = "none";
    document.getElementsByClassName("local")[0].style.display = "none";
    document.getElementsByClassName("local")[1].style.display = "none";
    document.getElementsByClassName("science")[0].style.display = "none";
    document.getElementById("filterpopup").style.display = "none";
}

function showAll() {
    document.getElementsByClassName("local")[0].style.display = "block";
    document.getElementsByClassName("local")[1].style.display = "block";
    document.getElementsByClassName("politics")[0].style.display = "block";
    document.getElementsByClassName("sport")[0].style.display = "block";
    document.getElementsByClassName("science")[0].style.display = "block";
    document.getElementById("filterpopup").style.display = "none";
}