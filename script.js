// ==================== DADOS DOS CASOS DE ESTUDO ====================
const casosDeEstudo = {
    1: {
        titulo: "Fazenda Rio Verde - Mato Grosso",
        regiao: "Mato Grosso - Brasil Central",
        culturas: ["Soja", "Milho", "Algodão"],
        area: "2.500 hectares",
        producao: "Soja: 65 sacos/hectare (45% acima da média nacional)",
        historia: `
            <h3>A Transformação da Fazenda Rio Verde</h3>
            <p>A Fazenda Rio Verde, localizada em Primavera do Leste - MT, é um exemplo notável de como aumentar significativamente a produtividade sem expandir áreas de desmatamento. Com 2.500 hectares, a propriedade passou de um modelo convencional para um sistema integrado de produção sustentável.</p>
            
            <h3>Principais Resultados</h3>
            <ul>
                <li><strong>Produtividade:</strong> Aumento de 40% na produtividade de soja (passou de 46 para 65 sacos/hectare)</li>
                <li><strong>Preservação:</strong> Mantém 500 hectares de mata nativa intacta</li>
                <li><strong>Rentabilidade:</strong> Aumento de 60% na margem de lucro</li>
                <li><strong>Solo:</strong> Índice de matéria orgânica aumentou de 2,5% para 4,2%</li>
            </ul>
            
            <h3>Técnicas Implementadas</h3>
            <ul>
                <li><strong>Plantio Direto:</strong> Sistema de plantio direto há 15 anos</li>
                <li><strong>Rotação de Culturas:</strong> Ciclo anual: Soja → Milho → Milho safrinha</li>
                <li><strong>Uso de Drones:</strong> Monitoramento de pragas e doenças com redução de 35% no uso de defensivos</li>
                <li><strong>Conservação de Solo:</strong> Manejo integrado com cobertura permanente</li>
            </ul>
            
            <h3>Impacto Social</h3>
            <p>A fazenda emprega 35 funcionários durante todo o ano, oferecendo capacitação contínua em agricultura de precisão. A comunidade local se beneficia do desenvolvendo econômico e da preservação dos recursos hídricos da região.</p>
        `
    },

    2: {
        titulo: "Fazenda Cerrado Vivo - Goiás",
        regiao: "Goiás - Centro-Oeste",
        culturas: ["Pecuária", "Soja", "Regeneração Ambiental"],
        area: "1.800 hectares",
        producao: "Rebanho: 5.000 cabeças com ganho de peso 15% maior",
        historia: `
            <h3>Recuperação Ambiental com Produção Mantida</h3>
            <p>A Fazenda Cerrado Vivo demonstra um modelo revolucionário: recuperar 500 hectares de cerrado degradado enquanto mantém e até aumenta a produção de gado. Com um rebanho de 5.000 cabeças, a fazenda integra pecuária regenerativa com restauração florestal.</p>
            
            <h3>Números Impressionantes</h3>
            <ul>
                <li><strong>Restauração:</strong> 500 hectares de cerrado em recuperação há 8 anos</li>
                <li><strong>Biodiversidade:</strong> Retorno de 47 espécies de aves que haviam desaparecido</li>
                <li><strong>Produtividade Animal:</strong> Ganho de peso 15% acima da média regional</li>
                <li><strong>Captura de Carbono:</strong> Estimada em 250 mil toneladas de CO₂ em 20 anos</li>
            </ul>
            
            <h3>Inovações Aplicadas</h3>
            <ul>
                <li><strong>Pastejo Rotativo:</strong> Sistema de 32 piquetes com 45 dias de descanso</li>
                <li><strong>Árvores Estratégicas:</strong> Plantio de 50 mil árvores nativas para sombreamento</li>
                <li><strong>Água Regenerada:</strong> 4 lagos artificiais alimentam a biodiversidade local</li>
                <li><strong>Suplementação Natural:</strong> Redução de 40% em custos com ração</li>
            </ul>
            
            <h3>Reconhecimento</h3>
            <p>A Fazenda Cerrado Vivo foi finalista do Prêmio "Produtor do Futuro" da EMBRAPA e serve como modelo de educação ambiental, recebendo visitações de estudantes e pesquisadores.</p>
        `
    },

    3: {
        titulo: "Fazenda Mata Atlântica - São Paulo",
        regiao: "Vale do Ribeira - São Paulo",
        culturas: ["Cacau", "Floresta Nativa", "Biodiversidade"],
        area: "800 hectares",
        producao: "Cacau: 1.200 kg/hectare em sistema agroflorestal",
        historia: `
            <h3>Cacau Sob a Sombra da Floresta</h3>
            <p>Em uma região de Mata Atlântica severamente degradada, a Fazenda Mata Atlântica desenvolveu um modelo agroflorestal que produz cacau de qualidade enquanto regenera a floresta nativa. Com 800 hectares, a propriedade é um oásis de biodiversidade no Vale do Ribeira.</p>
            
            <h3>Resultados Ecológicos</h3>
            <ul>
                <li><strong>Floresta Restaurada:</strong> 600 hectares em regeneração contínua há 12 anos</li>
                <li><strong>Espécies Nativas:</strong> Mais de 200 espécies de árvores plantadas</li>
                <li><strong>Fauna:</strong> Retorno de onças-pintadas e jaguatiricas</li>
                <li><strong>Hidrologia:</strong> Aumento de 60% na vazão das nascentes</li>
            </ul>
            
            <h3>Modelo Agroflorestal</h3>
            <ul>
                <li><strong>Cacau em Foco:</strong> 150 hectares com 1.200 pés/hectare</li>
                <li><strong>Sombreamento:</strong> Seringa, açaí e outras árvores de valor comercial</li>
                <li><strong>Certificação:</strong> Cacau certificado como "Florestal" com prêmio de 40%</li>
                <li><strong>Diversificação:</strong> Coleta de frutas silvestres com indígenas locais</li>
            </ul>
            
            <h3>Impacto Comunitário</h3>
            <p>Emprega 45 pessoas permanentemente, sendo 80% da comunidade local. Oferece educação ambiental para 500 estudantes/ano e trabalha em parceria com universidades em pesquisa de biodiversidade.</p>
        `
    },

    4: {
        titulo: "Fazenda Agroquímica Zero - Paraná",
        regiao: "Região de Maringá - Paraná",
        culturas: ["Frutas Orgânicas", "Legumes", "Grãos"],
        area: "600 hectares",
        producao: "Receita: 3x superior à agricultura convencional vizinha",
        historia: `
            <h3>Do Convencional ao Orgânico Regenerativo</h3>
            <p>A Fazenda Agroquímica Zero iniciou como uma propriedade convencional altamente dependente de químicos. Após 15 anos de transição, tornou-se um modelo de agricultura regenerativa, provando que é possível triplicar a renda eliminando agrotóxicos.</p>
            
            <h3>Transformação Financeira</h3>
            <ul>
                <li><strong>Receita Bruta:</strong> Triplicou em relação ao sistema anterior</li>
                <li><strong>Custos:</strong> Redução de 60% em insumos químicos</li>
                <li><strong>Lucro Líquido:</strong> Aumento de 280% em margem</li>
                <li><strong>Certificação:</strong> Produtor certificado com selo de produto premium</li>
            </ul>
            
            <h3>Práticas Regenerativas</h3>
            <ul>
                <li><strong>Compostagem:</strong> 100% dos resíduos são compostados na propriedade</li>
                <li><strong>Biodiversidade:</strong> 30% da área em matas e bosques</li>
                <li><strong>Culturas Perenes:</strong> 100 hectares com frutas (maçã, pera, mirtilo)</li>
                <li><strong>Alimento Vivo:</strong> Horta de 50 hectares com 45 culturas diferentes</li>
            </ul>
            
            <h3>Educação e Inovação</h3>
            <p>Funciona como escola prática de agricultura orgânica, recebendo 20 estagiários/ano. Desenvolveu biotecnologia própria para controle de pragas usando microrganismos locais.</p>
        `
    },

    5: {
        titulo: "Fazenda Café Sustentável - Minas Gerais",
        regiao: "Região de Araxá - Minas Gerais",
        culturas: ["Café", "Árvores Nativas", "Biodiversidade"],
        area: "450 hectares",
        producao: "Café: 50 sacos/hectare com prêmio de 25% no preço",
        historia: `
            <h3>Café Sob Floresta Nativa</h3>
            <p>Na região do cerrado mineiro, a Fazenda Café Sustentável revolucionou o cultivo de café através de um sistema agroflorestal com árvores nativas. A produção mantém-se alta enquanto o ecossistema se regenera completamente.</p>
            
            <h3>Qualidade e Produtividade</h3>
            <ul>
                <li><strong>Produção:</strong> 50 sacos por hectare (média regional: 35)</li>
                <li><strong>Qualidade:</strong> Pontuação de 87-90 pontos (café especial)</li>
                <li><strong>Prêmio:</strong> Recebe 25% de prêmio no preço por qualidade</li>
                <li><strong>Estabilidade:</strong> Redução de 40% na variabilidade de colheita entre anos</li>
            </ul>
            
            <h3>Sistema Agroflorestal</h3>
            <ul>
                <li><strong>Sombreamento:</strong> 40% da área sob árvores de mediana altura</li>
                <li><strong>Espécies Arbóreas:</strong> Cedro, mogno, jacarandá e frutíferas</li>
                <li><strong>Biodiversidade:</strong> 150 espécies de pássaros documentadas</li>
                <li><strong>Microclima:</strong> Temperatura 2-3°C mais fresca que monocultura</li>
            </ul>
            
            <h3>Retorno Financeiro</h3>
            <p>Além do café, colheita de madeira a cada 25 anos gera renda adicional. Estima-se que em 2040 a receita de madeira será 40% da receita total da propriedade.</p>
        `
    },

    6: {
        titulo: "Fazenda Girassol Digital - Bahia",
        regiao: "Região de Barreiras - Bahia",
        culturas: ["Algodão", "Soja", "Milho"],
        area: "3.200 hectares",
        producao: "Redução de 35% em insumos com aumento de 20% na produtividade",
        historia: `
            <h3>Agricultura 4.0 para Sustentabilidade</h3>
            <p>A Fazenda Girassol Digital prova que tecnologia de ponta aliada à sustentabilidade ambiental não é futuro, é presente. Com drones, sensores e inteligência artificial, a propriedade reduziu drasticamente o uso de insumos mantendo altas produtividades.</p>
            
            <h3>Números da Revolução Digital</h3>
            <ul>
                <li><strong>Insumos:</strong> Redução de 35% em defensivos e fertilizantes</li>
                <li><strong>Produtividade:</strong> Aumento de 20% em relação à linha de base</li>
                <li><strong>Água:</strong> Economia de 40% no uso de irrigação</li>
                <li><strong>ROI Tecnologia:</strong> Retorno em 2.5 anos</li>
            </ul>
            
            <h3>Tecnologias Implementadas</h3>
            <ul>
                <li><strong>Drones Multiespectrais:</strong> Monitoramento 2x por semana para pragas e estresse hídrico</li>
                <li><strong>Sensores de Solo:</strong> 150 pontos monitorando umidade e nutrientes em tempo real</li>
                <li><strong>IA de Previsão:</strong> Algoritmo próprio prevê pragas com 94% de acurácia</li>
                <li><strong>Aplicação Variável:</strong> Pulverizadores com precisão de metro quadrado</li>
            </ul>
            
            <h3>Sustentabilidade Ambiental</h3>
            <p>A redução significativa de químicos e água preserva as matas ciliares da região. A propriedade funciona como centro de pesquisa, em parceria com universidades federais para desenvolvimento de novas tecnologias sustentáveis.</p>
        `
    }
};

// ==================== FUNÇÕES DO MODAL ====================
function abrirCaso(numeroCaso) {
    const modal = document.getElementById('casoModal');
    const casoDetalhe = document.getElementById('casoDetalhe');
    const caso = casosDeEstudo[numeroCaso];
    
    if (caso) {
        casoDetalhe.innerHTML = `
            <div class="caso-detalhes">
                <h2>${caso.titulo}</h2>
                <p><strong>Região:</strong> ${caso.regiao}</p>
                <p><strong>Área Total:</strong> ${caso.area}</p>
                <p><strong>Culturas/Atividades:</strong> ${caso.culturas.join(', ')}</p>
                <p><strong>Produção Principal:</strong> ${caso.producao}</p>
                ${caso.historia}
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function fecharCaso() {
    const modal = document.getElementById('casoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('casoModal');
    if (event.target == modal) {
        fecharCaso();
    }
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharCaso();
    }
});

// ==================== ANIMAÇÕES AO SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar cards de casos
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.caso-card');
    cards.forEach(card => {
        observer.observe(card);
    });

    // Animar progress bars
    const progressFills = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.parentElement.parentElement.querySelector('.progress-label span:last-child').textContent;
            }
        });
    }, { threshold: 0.5 });

    progressFills.forEach(fill => {
        progressObserver.observe(fill);
    });
});

// ==================== SMOOTH SCROLL PARA LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== FEEDBACK VISUAL ====================
console.log('✅ Agro Forte - Futuro Sustentável');
console.log('Carregando histórias de fazendas brasileiras inovadoras...');
