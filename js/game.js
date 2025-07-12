// =================================================================================
//  CONECTARE - GAME HUB JAVASCRIPT FILE (GX Corner equivalent)
//  Author: Gemini
//  Description: Client-side logic for the Game Hub functionality, including
//               displaying news, free games, upcoming releases, popular streams,
//               and playable online games via iframe.
// =================================================================================

const GXCorner = {
    // Dados simulados para a Central de Jogos
    data: {
        news: [
            {
                id: 'news1',
                title: 'Novo RPG Cyberpunk Lançado!',
                snippet: 'Um mundo distópico e cheio de neon te espera neste novo RPG de mundo aberto. Prepare-se para horas de exploração e combates intensos.',
                image: 'https://images.unsplash.com/photo-1542820352-730604104445?q=80&w=800&auto=format&fit=crop',
                link: 'https://fictional-news.com/cyberpunk-rpg',
                date: '10 de Julho de 2025'
            },
            {
                id: 'news2',
                title: 'Atualização Gigante para "Planetas Perdidos" Chega!',
                snippet: 'Explore novas galáxias, enfrente inimigos inéditos e descubra segredos antigos na maior atualização de Planetas Perdidos até agora.',
                image: 'https://images.unsplash.com/photo-1593339790156-9b62a02b2d82?q=80&w=800&auto=format&fit=crop',
                link: 'https://fictional-news.com/planetas-perdidos-update',
                date: '8 de Julho de 2025'
            },
            {
                id: 'news3',
                title: 'Indie Game "Sonhos Pixelados" Vence Prêmio!',
                snippet: 'Com gráficos retrô e uma história emocionante, este pequeno jogo independente conquistou corações e o prêmio de Jogo do Ano Indie.',
                image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=800&auto=format&fit=crop',
                link: 'https://fictional-news.com/sonhos-pixelados-premio',
                date: '5 de Julho de 2025'
            },
            {
                id: 'news4',
                title: 'Anunciado Novo Console da Próxima Geração!',
                snippet: 'Detalhes e especificações do aguardado "Quantum X" foram revelados, prometendo gráficos ultrarrealistas e tempos de carregamento instantâneos.',
                image: 'https://images.unsplash.com/photo-1627856005703-90d5690b2986?q=80&w=800&auto=format&fit=crop',
                link: 'https://fictional-news.com/quantum-x-reveal',
                date: '3 de Julho de 2025'
            }
        ],
        freeGames: [
            {
                id: 'free1',
                title: 'Aventura Cósmica 2',
                platform: 'PC',
                description: 'Resgate sua cópia grátis deste aclamado jogo de plataforma 2D com elementos de exploração espacial. Disponível por tempo limitado!',
                image: 'https://images.unsplash.com/photo-1542158399-885435b64234?q=80&w=800&auto=format&fit=crop',
                status: 'available' // 'available' ou 'claimed'
            },
            {
                id: 'free2',
                title: 'Corrida Urbana Extrema',
                platform: 'PC, Console',
                description: 'Sinta a adrenalina em alta velocidade neste jogo de corrida com gráficos de tirar o fôlego. Grátis para resgatar esta semana!',
                image: 'https://images.unsplash.com/photo-1587302912301-33c0b9a43b4f?q=80&w=800&auto=format&fit=crop',
                status: 'available'
            },
            {
                id: 'free3',
                title: 'Mistério da Mansão Assombrada',
                platform: 'PC',
                description: 'Desvende os segredos de uma mansão abandonada neste jogo de terror psicológico. Resgate agora e jogue no escuro!',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
                status: 'available'
            }
        ],
        upcomingGames: [
            {
                id: 'upcoming1',
                title: 'Crônicas do Dragão: Ascensão',
                releaseDate: '15 de Agosto de 2025',
                platform: 'PC, PS5, Xbox Series X',
                image: 'https://images.unsplash.com/photo-1598814492321-6157a97a48a8?q=80&w=800&auto=format&fit=crop'
            },
            {
                id: 'upcoming2',
                title: 'Simulador de Vida 2026',
                releaseDate: '20 de Setembro de 2025',
                platform: 'PC',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
            },
            {
                id: 'upcoming3',
                title: 'A Queda de Neo-Londres',
                releaseDate: '10 de Outubro de 2025',
                platform: 'PC, PS5',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
            }
        ],
        streams: [
            {
                id: 'stream1',
                streamer: 'GamerGaláxia',
                game: 'Planetas Perdidos',
                viewers: '1.2K',
                thumbnail: 'https://images.unsplash.com/photo-1617994392185-92183044c0b5?q=80&w=800&auto=format&fit=crop',
                isLive: true
            },
            {
                id: 'stream2',
                streamer: 'MestreDosPixels',
                game: 'Sonhos Pixelados',
                viewers: '850',
                thumbnail: 'https://images.unsplash.com/photo-1599409353149-2d1b14f7a93c?q=80&w=800&auto=format&fit=crop',
                isLive: true
            },
            {
                id: 'stream3',
                streamer: 'RainhaDoFPS',
                game: 'Zona de Batalha',
                viewers: '2.5K',
                thumbnail: 'https://images.unsplash.com/photo-1593339790156-9b62a02b2d82?q=80&w=800&auto=format&fit=crop',
                isLive: false // Exemplo de stream offline
            },
            {
                id: 'stream4',
                streamer: 'OVelhoGamer',
                game: 'Retrô Mania',
                viewers: '300',
                thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=800&auto=format&fit=crop',
                isLive: true
            }
        ],
        // Dados para Jogos Online - Seleção de jogos mais "passa tempo" e viciantes
        onlineGames: [
            {
                id: 'dino-game',
                title: 'Jogo do Dinossauro',
                description: 'Corra e pule sobre os cactos neste clássico jogo offline do Chrome!',
                image: 'https://placehold.co/280x180/333333/FFFFFF?text=Dino+Game', // Imagem placeholder para o jogo do Dino
                // ATENÇÃO: Esta URL é um exemplo. É CRÍTICO testar se ela permite embedding.
                // Recomenda-se buscar por uma versão embeddable ou hospedar você mesmo.
                gameUrl: 'https://chromedino.com/'
            },
            {
                id: 'flappy-bird',
                title: 'Flappy Bird',
                description: 'Toque para voar e desvie dos canos neste jogo viciante de um toque. Qual a sua maior pontuação?',
                image: 'https://placehold.co/280x180/87CEEB/000000?text=Flappy+Bird', // Imagem placeholder para Flappy Bird
                // ATENÇÃO: Esta URL é um exemplo. É CRÍTICO testar se ela permite embedding.
                // Recomenda-se buscar por "open source HTML5 Flappy Bird game" para hospedar você mesmo.
                gameUrl: 'https://flappybird.io/' // URL de um clone de Flappy Bird (pode não permitir embedding)
            }
        ]
    },

    init() {
        // Verifica se estamos na página correta antes de inicializar
        if (!document.querySelector('.content-game')) return;

        this.cacheDOMElements();
        this.addEventListeners();
        this.loadClaimedGames(); // Carrega o status dos jogos resgatados
        this.renderContent('noticias'); // Renderiza a aba de notícias por padrão
    },

    cacheDOMElements() {
        this.tabLinks = document.querySelectorAll('.game-content-tabs .tab-link');
        this.tabPanes = document.querySelectorAll('.game-content-tabs .tab-pane');
        this.newsGrid = document.getElementById('news-grid');
        this.freeGamesGrid = document.getElementById('free-games-grid');
        this.upcomingGamesGrid = document.getElementById('upcoming-games-grid');
        this.streamsGrid = document.getElementById('streams-grid');
        this.onlineGamesGrid = document.getElementById('online-games-grid'); // NOVO: Grid para jogos online
        this.gameSearchInput = document.getElementById('game-search-input');

        // Elementos do Modal de Jogo
        this.gamePlayModal = document.getElementById('game-play-modal');
        this.gameModalTitle = document.getElementById('game-modal-title');
        this.gameIframe = document.getElementById('game-iframe');
        this.gameModalCloseBtn = document.getElementById('game-modal-close-btn');
    },

    addEventListeners() {
        this.tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const tabId = e.target.dataset.tab;
                this.activateTab(tabId);
            });
        });

        // Delegação de eventos para botões de "Resgatar" e "Jogar Agora"
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('claim-game-btn')) {
                const gameId = e.target.dataset.gameId;
                this.claimGame(gameId, e.target);
            }
            if (e.target.classList.contains('play-online-game-btn')) { // NOVO: Listener para jogar online
                const gameId = e.target.dataset.gameId;
                this.openGameModal(gameId);
            }
        });

        // Listener para fechar o modal de jogo
        if (this.gameModalCloseBtn) {
            this.gameModalCloseBtn.addEventListener('click', () => this.closeGameModal());
        }
        // Fechar modal clicando fora (no overlay)
        if (this.gamePlayModal) {
            this.gamePlayModal.addEventListener('click', (e) => {
                if (e.target === this.gamePlayModal) {
                    this.closeGameModal();
                }
            });
        }


        // Event listener para a busca
        if (this.gameSearchInput) {
            this.gameSearchInput.addEventListener('input', (e) => this.filterContent(e.target.value));
        }
    },

    activateTab(tabId) {
        // Remove 'active' de todas as abas e painéis
        this.tabLinks.forEach(link => link.classList.remove('active'));
        this.tabPanes.forEach(pane => pane.classList.remove('active'));

        // Adiciona 'active' à aba e painel clicados
        document.querySelector(`.tab-link[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');

        // Renderiza o conteúdo da aba ativa
        this.renderContent(tabId);
    },

    renderContent(tabId) {
        // Limpa o conteúdo anterior de todas as grids antes de renderizar
        this.newsGrid.innerHTML = '';
        this.freeGamesGrid.innerHTML = '';
        this.upcomingGamesGrid.innerHTML = '';
        this.streamsGrid.innerHTML = '';
        this.onlineGamesGrid.innerHTML = ''; // NOVO: Limpa a grid de jogos online

        switch (tabId) {
            case 'noticias':
                this.data.news.forEach(item => {
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>${item.snippet}</p>
                                <div class="game-card-actions">
                                    <a href="${item.link}" target="_blank" class="btn-primary" style="width: 100%;">Ler Mais <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    `;
                    this.newsGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'gratis':
                this.data.freeGames.forEach(item => {
                    const isClaimed = this.getClaimStatus(item.id);
                    const buttonClass = isClaimed ? 'btn-secondary claimed' : 'btn-primary';
                    const buttonText = isClaimed ? 'Resgatado <i class="fa-solid fa-check"></i>' : 'Resgatar <i class="fa-solid fa-download"></i>';
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                <div class="game-card-actions">
                                    <button class="${buttonClass} claim-game-btn" data-game-id="${item.id}" ${isClaimed ? 'disabled' : ''}>
                                        ${buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    this.freeGamesGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'lancamentos':
                this.data.upcomingGames.forEach(item => {
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>Plataformas: ${item.platform}</p>
                                <p>Lançamento: <strong>${item.releaseDate}</strong></p>
                                <div class="game-card-actions">
                                    <button class="btn-secondary" disabled>Em Breve <i class="fa-solid fa-calendar-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    `;
                    this.upcomingGamesGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'streams':
                this.data.streams.forEach(item => {
                    const liveBadge = item.isLive ? '<span class="stream-live-badge">AO VIVO</span>' : '';
                    const viewersInfo = item.isLive ? `<div class="stream-viewer-count"><i class="fa-solid fa-eye"></i> ${item.viewers}</div>` : '';
                    const card = `
                        <div class="stream-card">
                            <div style="position: relative;">
                                <img src="${item.thumbnail}" alt="Stream de ${item.streamer}" class="stream-thumbnail">
                                ${liveBadge}
                            </div>
                            <div class="stream-info">
                                <h3>${item.streamer}</h3>
                                <p>Jogando: ${item.game}</p>
                                ${viewersInfo}
                                <div class="game-card-actions" style="margin-top: 15px;">
                                    <a href="#" class="btn-primary" style="width: 100%;">${item.isLive ? 'Assistir Agora' : 'Ver Canal'} <i class="fa-solid fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    `;
                    this.streamsGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'jogos-online': // NOVO: Renderiza jogos online
                this.data.onlineGames.forEach(item => {
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                <div class="game-card-actions">
                                    <button class="btn-primary play-online-game-btn" data-game-id="${item.id}">
                                        Jogar Agora <i class="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    this.onlineGamesGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
        }
    },

    // Funções para simular o resgate de jogos grátis
    loadClaimedGames() {
        const claimedGames = JSON.parse(localStorage.getItem('claimedGames')) || [];
        this.claimedGames = new Set(claimedGames); // Usar um Set para busca rápida
    },

    saveClaimedGames() {
        localStorage.setItem('claimedGames', JSON.stringify(Array.from(this.claimedGames)));
    },

    getClaimStatus(gameId) {
        return this.claimedGames.has(gameId);
    },

    claimGame(gameId, buttonElement) {
        if (!this.getClaimStatus(gameId)) {
            this.claimedGames.add(gameId);
            this.saveClaimedGames();

            buttonElement.classList.remove('btn-primary');
            buttonElement.classList.add('btn-secondary', 'claimed');
            buttonElement.innerHTML = 'Resgatado <i class="fa-solid fa-check"></i>';
            buttonElement.disabled = true;

            // Opcional: Adicionar uma notificação ou mensagem de sucesso simulada
            console.log(`Jogo ${gameId} resgatado com sucesso!`);
        }
    },

    // NOVO: Funções para o Modal de Jogo
    openGameModal(gameId) {
        const game = this.data.onlineGames.find(g => g.id === gameId);
        if (game) {
            this.gameModalTitle.textContent = game.title;
            this.gameIframe.src = game.gameUrl;
            this.gamePlayModal.classList.remove('hidden');
            // Opcional: Adicionar classe para desabilitar scroll do body
            document.body.style.overflow = 'hidden';
        }
    },

    closeGameModal() {
        this.gamePlayModal.classList.add('hidden');
        this.gameIframe.src = ''; // Limpa o src para parar o jogo/áudio
        document.body.style.overflow = ''; // Restaura o scroll do body
    },

    // Função de busca (simples, filtra pelo título)
    filterContent(query) {
        const lowerCaseQuery = query.toLowerCase();
        const currentTabId = document.querySelector('.game-content-tabs .tab-link.active').dataset.tab;
        let filteredData = [];

        // Limpa todas as grids antes de filtrar
        this.newsGrid.innerHTML = '';
        this.freeGamesGrid.innerHTML = '';
        this.upcomingGamesGrid.innerHTML = '';
        this.streamsGrid.innerHTML = '';
        this.onlineGamesGrid.innerHTML = '';

        switch (currentTabId) {
            case 'noticias':
                filteredData = this.data.news.filter(item => item.title.toLowerCase().includes(lowerCaseQuery) || item.snippet.toLowerCase().includes(lowerCaseQuery));
                filteredData.forEach(item => {
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>${item.snippet}</p>
                                <div class="game-card-actions">
                                    <a href="${item.link}" target="_blank" class="btn-primary" style="width: 100%;">Ler Mais <i class="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    `;
                    this.newsGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'gratis':
                filteredData = this.data.freeGames.filter(item => item.title.toLowerCase().includes(lowerCaseQuery) || item.description.toLowerCase().includes(lowerCaseQuery));
                filteredData.forEach(item => {
                    const isClaimed = this.getClaimStatus(item.id);
                    const buttonClass = isClaimed ? 'btn-secondary claimed' : 'btn-primary';
                    const buttonText = isClaimed ? 'Resgatado <i class="fa-solid fa-check"></i>' : 'Resgatar <i class="fa-solid fa-download"></i>';
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                <div class="game-card-actions">
                                    <button class="${buttonClass} claim-game-btn" data-game-id="${item.id}" ${isClaimed ? 'disabled' : ''}>
                                        ${buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    this.freeGamesGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'lancamentos':
                filteredData = this.data.upcomingGames.filter(item => item.title.toLowerCase().includes(lowerCaseQuery) || item.platform.toLowerCase().includes(lowerCaseQuery));
                filteredData.forEach(item => {
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>Plataformas: ${item.platform}</p>
                                <p>Lançamento: <strong>${item.releaseDate}</strong></p>
                                <div class="game-card-actions">
                                    <button class="btn-secondary" disabled>Em Breve <i class="fa-solid fa-calendar-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    `;
                    this.upcomingGamesGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'streams':
                filteredData = this.data.streams.filter(item => item.streamer.toLowerCase().includes(lowerCaseQuery) || item.game.toLowerCase().includes(lowerCaseQuery));
                filteredData.forEach(item => {
                    const liveBadge = item.isLive ? '<span class="stream-live-badge">AO VIVO</span>' : '';
                    const viewersInfo = item.isLive ? `<div class="stream-viewer-count"><i class="fa-solid fa-eye"></i> ${item.viewers}</div>` : '';
                    const card = `
                        <div class="stream-card">
                            <div style="position: relative;">
                                <img src="${item.thumbnail}" alt="Stream de ${item.streamer}" class="stream-thumbnail">
                                ${liveBadge}
                            </div>
                            <div class="stream-info">
                                <h3>${item.streamer}</h3>
                                <p>Jogando: ${item.game}</p>
                                ${viewersInfo}
                                <div class="game-card-actions" style="margin-top: 15px;">
                                    <a href="#" class="btn-primary" style="width: 100%;">${item.isLive ? 'Assistir Agora' : 'Ver Canal'} <i class="fa-solid fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    `;
                    this.streamsGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
            case 'jogos-online': // NOVO: Filtra e renderiza jogos online
                filteredData = this.data.onlineGames.filter(item => item.title.toLowerCase().includes(lowerCaseQuery) || item.description.toLowerCase().includes(lowerCaseQuery));
                filteredData.forEach(item => {
                    const card = `
                        <div class="game-card">
                            <img src="${item.image}" alt="${item.title}" class="game-card-image">
                            <div class="game-card-content">
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                                <div class="game-card-actions">
                                    <button class="btn-primary play-online-game-btn" data-game-id="${item.id}">
                                        Jogar Agora <i class="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                    this.onlineGamesGrid.insertAdjacentHTML('beforeend', card);
                });
                break;
        }
    }
};
