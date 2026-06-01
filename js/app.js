// ===== APPLE ACADEMY STUDY HUB — FULL SYSTEM =====

// --- Topics ---
const TOPICS = {
    'c-basics': { name: 'Base em C', topics: ['Variáveis e tipos de dados (int, float, char, double)','Entrada e saída (printf, scanf)','Estruturas condicionais (if, else, switch)','Estruturas de repetição (for, while, do-while)','Funções (com retorno, sem retorno, passagem por valor)','Strings e manipulação (strlen, strcpy, strcmp, strcat)'] },
    'pointers': { name: 'Vetores, Matrizes e Ponteiros', topics: ['Vetores (declaração, inicialização, percorrer)','Matrizes (declaração, percorrer, operações)','Ponteiros (declaração, operador & e *, aritmética)','Ponteiro para ponteiro','Relação entre ponteiros e vetores','Alocação dinâmica (malloc, calloc, realloc, free)','Passagem por referência com ponteiros'] },
    'sorting': { name: 'Ordenação e Busca', topics: ['Busca Linear','Busca Binária','Bubble Sort','Selection Sort','Insertion Sort','Quick Sort','Complexidade de algoritmos (Big O)'] },
    'data-structures': { name: 'Estrutura de Dados', topics: ['Lista encadeada simples','Lista duplamente encadeada','Pilha (Stack) — conceito e implementação','Fila (Queue) — conceito e implementação','Árvore binária — inserção e busca','Percursos em árvore (in-order, pre-order, post-order)','Grafo — conceito e representação','Tabela Hash — conceito e colisões'] },
    'oop': { name: 'POO — Conceitos', topics: ['O que é Programação Orientada a Objetos','Abstração — conceito e exemplos','Encapsulamento — getters, setters, modificadores de acesso','Herança — classe pai e filha, reuso','Polimorfismo — sobrecarga vs sobrescrita','Classes e Objetos — instanciação','Interfaces e Classes Abstratas'] },
    'logic': { name: 'Lógica Matemática', topics: ['Proposições e valores lógicos','Conectivos lógicos (E, OU, NÃO, SE...ENTÃO, SE E SOMENTE SE)','Tabela Verdade — construção passo a passo','Negação de proposições compostas (Leis de De Morgan)','Tautologia, contradição e contingência','Lógica de predicados (quantificadores ∀ e ∃)','Questões estilo concurso — macetes e dicas'] }
};

// --- XP & Levels ---
const LEVELS = [
    { level: 1, xp: 0, title: 'Recruta' },
    { level: 2, xp: 100, title: 'Aprendiz' },
    { level: 3, xp: 250, title: 'Estudante' },
    { level: 4, xp: 500, title: 'Praticante' },
    { level: 5, xp: 800, title: 'Competente' },
    { level: 6, xp: 1200, title: 'Avançado' },
    { level: 7, xp: 1700, title: 'Expert' },
    { level: 8, xp: 2400, title: 'Mestre' },
    { level: 9, xp: 3200, title: 'Guru' },
    { level: 10, xp: 4200, title: 'Lenda da Academy' },
    { level: 11, xp: 5500, title: 'Aprovado Certo' },
    { level: 12, xp: 7000, title: 'Imparável' }
];

// --- Achievements ---
const ACHIEVEMENTS = [
    { id: 'first_lesson', icon: '📖', name: 'Primeira Aula', desc: 'Complete sua primeira aula', condition: s => s.lessonsCompleted >= 1 },
    { id: 'first_quiz', icon: '🧠', name: 'Primeiro Quiz', desc: 'Complete seu primeiro quiz', condition: s => s.quizzes >= 1 },
    { id: 'first_code', icon: '💻', name: 'Primeiro Código', desc: 'Resolva seu primeiro desafio', condition: s => s.challenges >= 1 },
    { id: 'streak_3', icon: '🔥', name: 'Fogo Aceso', desc: '3 dias seguidos estudando', condition: s => s.streak >= 3 },
    { id: 'streak_7', icon: '🌋', name: 'Vulcão', desc: '7 dias seguidos estudando', condition: s => s.streak >= 7 },
    { id: 'streak_30', icon: '☀️', name: 'Imparável', desc: '30 dias seguidos', condition: s => s.streak >= 30 },
    { id: 'quiz_10', icon: '🏅', name: 'Maratonista', desc: 'Complete 10 quizzes', condition: s => s.quizzes >= 10 },
    { id: 'quiz_perfect', icon: '💯', name: 'Perfeição', desc: '100% num quiz de 10+ questões', condition: s => s.perfectQuiz },
    { id: 'code_5', icon: '⚡', name: 'Coder', desc: 'Resolva 5 desafios', condition: s => s.challenges >= 5 },
    { id: 'code_20', icon: '🚀', name: 'Dev Raiz', desc: 'Resolva 20 desafios', condition: s => s.challenges >= 20 },
    { id: 'level_5', icon: '⭐', name: 'Competente', desc: 'Alcance nível 5', condition: s => s.level >= 5 },
    { id: 'level_10', icon: '👑', name: 'Lenda', desc: 'Alcance nível 10', condition: s => s.level >= 10 },
    { id: 'all_modules', icon: '🎓', name: 'Completo', desc: 'Estude todos os 6 módulos', condition: s => s.modulesStudied >= 6 },
    { id: 'exam_pass', icon: '🏆', name: 'Aprovado!', desc: 'Passe no simulado (70%+)', condition: s => s.examPassed },
    { id: 'exam_90', icon: '🌟', name: 'Excelência', desc: '90%+ no simulado', condition: s => s.examAced },
    { id: 'pomo_5', icon: '🍅', name: 'Focado', desc: 'Complete 5 pomodoros', condition: s => s.pomodorosCompleted >= 5 },
    { id: 'review_10', icon: '🔄', name: 'Memória de Elefante', desc: 'Complete 10 revisões', condition: s => s.reviewsCompleted >= 10 },
    { id: 'xp_1000', icon: '💎', name: 'Mil XP', desc: 'Acumule 1000 XP', condition: s => s.totalXp >= 1000 },
];

// --- Model Fallback ---
const MODEL_FALLBACK = ['gemini-2.5-flash','gemma-4-28b-it','gemma-4-31b-it','gemini-2.5-flash-lite','gemini-2.0-flash-lite','gemini-2.0-flash','gemini-1.5-flash'];

// --- State ---
const defaultStats = { streak:0, quizzes:0, challenges:0, correct:0, total:0, lastDate:'', totalXp:0, level:1, lessonsCompleted:0, perfectQuiz:false, examPassed:false, examAced:false, modulesStudied:0, pomodorosCompleted:0, reviewsCompleted:0, pomoCyclesToday:0, pomoTotalMin:0, unlockedAch:[] };
let state = {
    apiKey: localStorage.getItem('gemini_api_key') || '',
    model: localStorage.getItem('gemini_model') || 'gemini-2.5-flash',
    progress: JSON.parse(localStorage.getItem('academy_progress') || '{}'),
    stats: { ...defaultStats, ...JSON.parse(localStorage.getItem('academy_stats') || '{}') },
    studiedTopics: JSON.parse(localStorage.getItem('academy_studied') || '{}'),
    weaknesses: JSON.parse(localStorage.getItem('academy_weak') || '{}'),
    reviewQueue: JSON.parse(localStorage.getItem('academy_review') || '[]'),
    missions: JSON.parse(localStorage.getItem('academy_missions') || 'null'),
    currentQuiz: null, currentFlashcards: null, currentFlashIndex: 0, currentChallenge: null, currentExam: null
};

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    if (!state.apiKey) document.getElementById('api-modal').classList.remove('hidden');
    else document.getElementById('api-modal').classList.add('hidden');
    updateStreak(); generateDailyMissions(); renderAll();
    setupNavigation(); setupApiModal(); setupSettings(); setupLearnPage();
    setupQuizPage(); setupCodePage(); setupFlashcardsPage(); setupChatPage();
    setupMobile(); setupExamPage(); setupPomodoroPage(); setupVideosPage();
});

// ===== CURATED VIDEOS (from Apple Academy repo + ex-students) =====
const CURATED_VIDEOS = [
    // Fase 1 — Base em C
    { id: 'PLOXIs3c4k2TeQOyb-uQwHkKkpT1zPTWm6', title: 'Playlist Completa de C — Eduardo Casavella', module: 'c-basics', type: 'playlist' },
    { id: 'PLa75BYTPDNKZWYypgOFEsX3H2Mg-SzuLW', title: 'C de Aluno para Aluno', module: 'c-basics', type: 'playlist' },
    { id: 'yrWIlIVZHB0', title: 'Linguagem C do Zero — Programe Seu Futuro', module: 'c-basics', type: 'video' },
    { id: 'niTmi2OiCto', title: 'Funções em C (parte 1)', module: 'c-basics', type: 'video' },
    { id: 'jd9PABbIvbA', title: 'Funções em C (parte 2)', module: 'c-basics', type: 'video' },
    // Fase 2 — Ponteiros
    { id: '2ybLD6_2gKM', title: 'Ponteiros em C — Explicação Completa', module: 'pointers', type: 'video' },
    { id: 'w276EE-i8vI', title: 'Ponteiros em C — Detalhado', module: 'pointers', type: 'video' },
    { id: 'D5QvQmes198', title: 'Ponteiros — Prática', module: 'pointers', type: 'video' },
    { id: '4yVCGgEE9bc', title: 'Vetores em C — Explicação', module: 'pointers', type: 'video' },
    { id: '5fSf9xSJK7c', title: 'Vetores em C — Prática', module: 'pointers', type: 'video' },
    { id: 'YyWMN_0g3BQ', title: 'Memory Management e C — Fabio Akita (GOAT)', module: 'pointers', type: 'video' },
    // Fase 4 — Estrutura de Dados
    { id: 'PLqJK4Oyr5WSjQ584hwqaHJYDpDcYqS-HK', title: 'Estrutura de Dados — Playlist Completa', module: 'data-structures', type: 'playlist' },
    { id: 'Czcc5EUR_yQ', title: 'Estrutura de Dados em C — Série', module: 'data-structures', type: 'video' },
    { id: '7fwPj13AJOg', title: 'Árvore Binária em C — Kauã Miguel (ex-Academy)', module: 'data-structures', type: 'video' },
    // Fase 6 — Lógica
    { id: 'PltqUuwR9ec', title: 'Lógica Matemática — Playlist Completa', module: 'logic', type: 'video' },
    { id: 'tiARjzPh2pI', title: 'Lógica para Concursos — Macetes', module: 'logic', type: 'video' },
];

// ===== GEMINI API =====
const SYSTEM_INSTRUCTION = `Você é um tutor especializado em preparação para a prova da Apple Developer Academy (IFCE/UCB).
A prova cobra: Programação em C (variáveis, condicionais, loops, funções, vetores, matrizes, ponteiros, ponteiro para ponteiro, structs, alocação dinâmica), Estrutura de Dados (lista encadeada, pilha, fila, árvore binária, grafo, tabela hash), POO (apenas conceitos: abstração, encapsulamento, herança, polimorfismo), e Lógica Matemática (tabela verdade, proposições, De Morgan, predicados).
REGRAS: Responda em pt-BR. Linguagem clara e direta. Código sempre em C (exceto POO: pseudocódigo/Java). Exemplos práticos. Perguntas no estilo da prova. Inclua #include e main() completos. Use analogias do dia a dia. Sugira exercício ao final.`;

async function callGeminiSingle(prompt, si, model) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${state.apiKey}`;
    const body = { contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.7, topP: 0.9, maxOutputTokens: 4096 } };
    if (si) body.systemInstruction = { parts: [{ text: si }] };
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!res.ok) {
        const err = await res.json(); const msg = err.error?.message || 'Erro';
        const retry = res.status === 429 || res.status === 503 || msg.toLowerCase().includes('quota') || msg.toLowerCase().includes('overloaded') || msg.toLowerCase().includes('high demand');
        if (retry) throw { retry: true, model, message: msg };
        throw { retry: false, message: msg };
    }
    return (await res.json()).candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function callGemini(prompt, si) {
    if (!state.apiKey) { document.getElementById('api-modal').classList.remove('hidden'); throw new Error('API key não configurada'); }
    const chosen = state.model || 'gemini-2.5-flash';
    const list = [chosen, ...MODEL_FALLBACK.filter(m => m !== chosen)];
    const tried = [];
    for (const m of list) {
        try {
            const r = await callGeminiSingle(prompt, si, m);
            if (m !== chosen) { state.model = m; localStorage.setItem('gemini_model', m); const s = document.getElementById('settings-model'); if(s) s.value = m; }
            return r;
        } catch (e) { if (e.retry) { tried.push(m); continue; } throw new Error(e.message); }
    }
    throw new Error(`Todos os modelos sem cota (${tried.join(', ')}). Tente mais tarde.`);
}

// ===== XP SYSTEM =====
function addXp(amount, reason) {
    state.stats.totalXp += amount;
    const oldLevel = state.stats.level;
    state.stats.level = calcLevel(state.stats.totalXp);
    saveStats();
    // Popup
    const popup = document.getElementById('xp-popup');
    document.getElementById('xp-amount').textContent = amount;
    popup.classList.remove('hidden');
    popup.style.animation = 'none'; popup.offsetHeight; popup.style.animation = '';
    setTimeout(() => popup.classList.add('hidden'), 1600);
    // Level up
    if (state.stats.level > oldLevel) {
        setTimeout(() => {
            const lv = LEVELS.find(l => l.level === state.stats.level) || LEVELS[LEVELS.length-1];
            document.getElementById('levelup-number').textContent = state.stats.level;
            document.getElementById('levelup-title').textContent = lv.title;
            document.getElementById('levelup-modal').classList.remove('hidden');
            fireConfetti();
        }, 500);
    }
    renderXp(); checkAchievements();
}

function calcLevel(xp) {
    let lv = 1;
    for (const l of LEVELS) { if (xp >= l.xp) lv = l.level; }
    return lv;
}

function getLevelInfo(level) { return LEVELS.find(l => l.level === level) || LEVELS[LEVELS.length-1]; }
function getNextLevelXp(level) { const next = LEVELS.find(l => l.level === level + 1); return next ? next.xp : LEVELS[LEVELS.length-1].xp + 1000; }

function renderXp() {
    const lv = getLevelInfo(state.stats.level);
    const nextXp = getNextLevelXp(state.stats.level);
    const currentLvXp = lv.xp;
    const pct = Math.min(100, ((state.stats.totalXp - currentLvXp) / (nextXp - currentLvXp)) * 100);
    ['dash-level','sidebar-level','mobile-level'].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=state.stats.level; });
    const dt = document.getElementById('dash-title'); if(dt) dt.textContent = lv.title;
    const dx = document.getElementById('dash-xp'); if(dx) dx.textContent = state.stats.totalXp;
    const dn = document.getElementById('dash-xp-next'); if(dn) dn.textContent = nextXp;
    const sx = document.getElementById('sidebar-xp'); if(sx) sx.textContent = state.stats.totalXp;
    ['dash-xp-bar','sidebar-xp-bar'].forEach(id => { const el=document.getElementById(id); if(el) el.style.width = pct+'%'; });
}

// ===== CONFETTI =====
function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const pieces = Array.from({length: 80}, () => ({
        x: Math.random()*canvas.width, y: -20, r: Math.random()*6+4,
        color: ['#8b6914','#b8860b','#d4a017','#2d8a5e','#c0392b','#a47d1e'][Math.floor(Math.random()*6)],
        vx: (Math.random()-0.5)*6, vy: Math.random()*4+3, rot: Math.random()*360, vr: (Math.random()-0.5)*10
    }));
    let frames = 0;
    function draw() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        pieces.forEach(p => {
            ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
            ctx.fillStyle = p.color; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*0.6);
            ctx.restore(); p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr; p.vy+=0.1;
        });
        frames++;
        if (frames < 120) requestAnimationFrame(draw);
        else ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    draw();
}

// ===== ACHIEVEMENTS =====
function checkAchievements() {
    const s = state.stats;
    s.modulesStudied = Object.keys(state.studiedTopics).length;
    ACHIEVEMENTS.forEach(ach => {
        if (!s.unlockedAch.includes(ach.id) && ach.condition(s)) {
            s.unlockedAch.push(ach.id);
            showAchievementToast(ach);
            addXp(25, 'Conquista: ' + ach.name);
        }
    });
    saveStats();
}

function showAchievementToast(ach) {
    const t = document.getElementById('achievement-toast');
    document.getElementById('achievement-icon').textContent = ach.icon;
    document.getElementById('achievement-name').textContent = ach.name;
    document.getElementById('achievement-desc').textContent = ach.desc;
    t.classList.remove('hidden'); t.style.animation='none'; t.offsetHeight; t.style.animation='';
    setTimeout(() => t.classList.add('hidden'), 4500);
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid'); if(!grid) return;
    grid.innerHTML = ACHIEVEMENTS.map(a => {
        const unlocked = state.stats.unlockedAch.includes(a.id);
        return `<div class="achievement-card ${unlocked?'unlocked':'locked'}"><span class="ach-icon">${unlocked?a.icon:'🔒'}</span><div class="ach-name">${a.name}</div><div class="ach-desc">${a.desc}</div></div>`;
    }).join('');
}

// ===== DAILY MISSIONS =====
function generateDailyMissions() {
    const today = new Date().toISOString().split('T')[0];
    if (state.missions && state.missions.date === today) return;
    const pool = [
        { text: 'Complete 1 aula', desc: 'Vá em Aprender e estude um tópico', xp: 15, key: 'lesson', target: 1 },
        { text: 'Acerte 5 questões no Quiz', desc: 'Faça um quiz e acerte pelo menos 5', xp: 20, key: 'quizCorrect', target: 5 },
        { text: 'Resolva 1 desafio de código', desc: 'Vá em Desafios e resolva um exercício', xp: 25, key: 'codeChallenge', target: 1 },
        { text: 'Revise 3 flashcards', desc: 'Complete pelo menos 3 flashcards', xp: 10, key: 'flashcards', target: 3 },
        { text: 'Faça 1 pergunta ao Tutor', desc: 'Tire uma dúvida com o Tutor IA', xp: 10, key: 'chatQuestion', target: 1 },
        { text: 'Complete 1 ciclo Pomodoro', desc: 'Estude com foco usando o Pomodoro', xp: 15, key: 'pomodoro', target: 1 },
        { text: 'Acerte 80%+ num Quiz médio', desc: 'Quiz no nível médio com 80%+ de acerto', xp: 30, key: 'quizMedium80', target: 1 },
    ];
    const shuffled = pool.sort(() => Math.random() - 0.5);
    state.missions = { date: today, items: shuffled.slice(0, 3).map(m => ({...m, progress: 0, completed: false})), allCompleted: false };
    localStorage.setItem('academy_missions', JSON.stringify(state.missions));
}

function updateMission(key, amount = 1) {
    if (!state.missions) return;
    state.missions.items.forEach(m => {
        if (m.key === key && !m.completed) {
            m.progress = Math.min(m.target, m.progress + amount);
            if (m.progress >= m.target) { m.completed = true; addXp(m.xp, 'Missão: ' + m.text); }
        }
    });
    if (!state.missions.allCompleted && state.missions.items.every(m => m.completed)) {
        state.missions.allCompleted = true;
        addXp(50, 'Bônus: todas missões completas!');
        fireConfetti();
    }
    localStorage.setItem('academy_missions', JSON.stringify(state.missions));
    renderMissions();
}

function renderMissions() {
    const items = state.missions?.items || [];
    const completed = items.filter(m => m.completed).length;
    // Dashboard preview
    const dashM = document.getElementById('dash-missions');
    if (dashM) dashM.innerHTML = items.map(m => `<div class="mission-item ${m.completed?'completed':''}"><div class="mission-check">${m.completed?'✓':''}</div><div class="mission-info"><strong>${m.text}</strong><span>${m.desc}</span></div><span class="mission-xp">+${m.xp} XP</span></div>`).join('');
    // Missions page
    const listM = document.getElementById('missions-list');
    if (listM) listM.innerHTML = items.map(m => `<div class="mission-item ${m.completed?'completed':''}"><div class="mission-check">${m.completed?'✓':''}</div><div class="mission-info"><strong>${m.text}</strong><span>${m.desc} (${m.progress}/${m.target})</span></div><span class="mission-xp">+${m.xp} XP</span></div>`).join('');
    const badge = document.getElementById('missions-badge');
    if (badge) badge.textContent = 3 - completed;
    const pFill = document.getElementById('missions-progress-fill');
    if (pFill) pFill.style.width = (completed/3*100)+'%';
    const pText = document.getElementById('missions-progress-text');
    if (pText) pText.textContent = `${completed}/3`;
}

// ===== SPACED REPETITION =====
function addToReview(module, topic) {
    const key = `${module}::${topic}`;
    const existing = state.reviewQueue.find(r => r.key === key);
    if (existing) { existing.nextReview = Date.now() + 24*60*60*1000; existing.interval = Math.min(existing.interval * 2, 7); }
    else state.reviewQueue.push({ key, module, topic, nextReview: Date.now() + 24*60*60*1000, interval: 1, strength: 50 });
    localStorage.setItem('academy_review', JSON.stringify(state.reviewQueue));
}

function getPendingReviews() { return state.reviewQueue.filter(r => r.nextReview <= Date.now()); }

function renderReviews() {
    const pending = getPendingReviews();
    const badge = document.getElementById('review-badge'); if(badge) badge.textContent = pending.length;
    const rp = document.getElementById('review-pending'); if(rp) rp.textContent = pending.length;
    const empty = document.getElementById('review-empty');
    const list = document.getElementById('review-list');
    if (pending.length === 0) { if(empty) empty.style.display='flex'; if(list) list.innerHTML=''; return; }
    if(empty) empty.style.display='none';
    if(list) list.innerHTML = pending.map(r => {
        const hoursPast = Math.max(0, Math.floor((Date.now() - r.nextReview) / 3600000));
        let urgency = 'ok', label = 'Em dia';
        if (hoursPast > 48) { urgency = 'urgent'; label = 'Atrasado!'; }
        else if (hoursPast > 12) { urgency = 'soon'; label = 'Revisar logo'; }
        return `<div class="review-item ${urgency}"><div class="review-info"><strong>${r.topic}</strong><span>${TOPICS[r.module]?.name || r.module}</span></div><span class="review-urgency ${urgency}">${label}</span><button class="btn-primary" style="width:auto;padding:8px 16px;font-size:0.8rem" onclick="startReview('${r.key}')">Revisar</button></div>`;
    }).join('');
}

window.startReview = async function(key) {
    const item = state.reviewQueue.find(r => r.key === key);
    if (!item) return;
    navigateTo('learn');
    document.getElementById('learn-module').value = item.module;
    document.getElementById('learn-module').dispatchEvent(new Event('change'));
    setTimeout(() => {
        const topicIdx = TOPICS[item.module]?.topics.indexOf(item.topic);
        if (topicIdx >= 0) { document.getElementById('learn-topic').value = topicIdx; document.getElementById('start-lesson').disabled = false; document.getElementById('start-lesson').click(); }
    }, 100);
    item.nextReview = Date.now() + item.interval * 24*60*60*1000;
    item.interval = Math.min(item.interval * 2, 14);
    item.strength = Math.min(100, item.strength + 15);
    state.stats.reviewsCompleted = (state.stats.reviewsCompleted||0) + 1;
    localStorage.setItem('academy_review', JSON.stringify(state.reviewQueue));
    saveStats(); renderReviews(); addXp(20, 'Revisão'); updateMission('lesson');
};

// ===== WEAKNESS RADAR =====
function trackWeakness(module, correct, total) {
    if (!state.weaknesses[module]) state.weaknesses[module] = { correct: 0, total: 0 };
    state.weaknesses[module].correct += correct;
    state.weaknesses[module].total += total;
    localStorage.setItem('academy_weak', JSON.stringify(state.weaknesses));
}

function renderWeaknesses() {
    const radar = document.getElementById('radar-visual');
    const details = document.getElementById('weakness-details');
    if (!radar || !details) return;
    const modules = Object.keys(TOPICS);
    const data = modules.map(m => {
        const w = state.weaknesses[m];
        const pct = w && w.total > 0 ? Math.round((w.correct / w.total) * 100) : 0;
        const hasData = w && w.total > 0;
        return { module: m, name: TOPICS[m].name, pct, hasData };
    });
    radar.innerHTML = data.map(d => {
        const cls = !d.hasData ? 'mid' : d.pct < 50 ? 'low' : d.pct < 75 ? 'mid' : 'high';
        const width = d.hasData ? d.pct : 0;
        return `<div class="radar-bar-item"><span class="radar-bar-label">${d.name}</span><div class="radar-bar-track"><div class="radar-bar-fill ${cls}" style="width:${width}%"></div></div><span class="radar-bar-pct">${d.hasData ? d.pct+'%' : '—'}</span></div>`;
    }).join('');
    const weakest = data.filter(d => d.hasData).sort((a,b) => a.pct - b.pct).slice(0, 3);
    if (weakest.length === 0) { details.innerHTML = '<div class="weakness-tip"><strong>Sem dados ainda</strong><p>Faça quizzes e exercícios para alimentar o radar!</p></div>'; return; }
    details.innerHTML = '<h3 style="margin-bottom:12px">Precisa melhorar:</h3>' + weakest.map(d => `<div class="weakness-tip"><strong>${d.name} — ${d.pct}%</strong><p>Faça mais quizzes e revise os tópicos desse módulo.</p></div>`).join('');
}

// ===== STREAK =====
function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (state.stats.lastDate === today) return;
    if (state.stats.lastDate === yesterday) state.stats.streak++;
    else if (state.stats.lastDate !== today) state.stats.streak = 1;
    state.stats.lastDate = today;
    saveStats();
}
function recordActivity() {
    const today = new Date().toISOString().split('T')[0];
    if (state.stats.lastDate !== today) updateStreak();
}

// ===== RENDER ALL =====
function renderAll() {
    renderXp(); renderMissions(); renderReviews(); renderWeaknesses(); renderAchievements(); renderDashboard();
    // Greeting
    const h = new Date().getHours();
    const greet = h < 12 ? 'Bom dia! Bora estudar!' : h < 18 ? 'Boa tarde! Foco nos estudos!' : 'Boa noite! Revisão antes de dormir?';
    const gt = document.getElementById('greeting-text'); if(gt) gt.textContent = greet;
}

function renderDashboard() {
    document.getElementById('streak-count').textContent = state.stats.streak;
    document.getElementById('quiz-count').textContent = state.stats.quizzes;
    document.getElementById('code-count').textContent = state.stats.challenges;
    const pct = state.stats.total > 0 ? Math.round((state.stats.correct / state.stats.total) * 100) : 0;
    document.getElementById('accuracy-pct').textContent = pct + '%';
    Object.keys(TOPICS).forEach(mod => {
        const fill = document.querySelector(`.progress-fill[data-progress="${mod}"]`);
        const prog = state.progress[mod] || 0;
        if (fill) { fill.style.width = prog+'%'; fill.parentElement.nextElementSibling.textContent = prog+'%'; }
    });
}

function updateModuleProgress(module, amount) {
    state.progress[module] = Math.min(100, (state.progress[module]||0) + amount);
    localStorage.setItem('academy_progress', JSON.stringify(state.progress));
    renderDashboard();
}
function saveStats() { localStorage.setItem('academy_stats', JSON.stringify(state.stats)); renderDashboard(); }
function showLoading(t='Gerando conteúdo com IA...') { document.getElementById('loading-text').textContent=t; document.getElementById('loading-overlay').classList.remove('hidden'); }
function hideLoading() { document.getElementById('loading-overlay').classList.add('hidden'); }

// ===== NAVIGATION =====
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => { navigateTo(item.dataset.page); document.getElementById('sidebar').classList.remove('open'); });
    });
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', () => { navigateTo('learn'); document.getElementById('learn-module').value=card.dataset.module; document.getElementById('learn-module').dispatchEvent(new Event('change')); });
    });
}
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${page}`).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
    if (page === 'weaknesses') renderWeaknesses();
    if (page === 'achievements') renderAchievements();
    if (page === 'review') renderReviews();
}

function setupMobile() {
    document.getElementById('menu-toggle').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));
    document.addEventListener('click', e => { const sb=document.getElementById('sidebar'); if(sb.classList.contains('open')&&!sb.contains(e.target)&&e.target!==document.getElementById('menu-toggle')) sb.classList.remove('open'); });
}
function setupApiModal() {
    document.getElementById('save-api-key').addEventListener('click', () => { const k=document.getElementById('api-key-input').value.trim(); if(k){state.apiKey=k;localStorage.setItem('gemini_api_key',k);document.getElementById('api-modal').classList.add('hidden');} });
    document.getElementById('api-key-input').addEventListener('keydown', e => { if(e.key==='Enter') document.getElementById('save-api-key').click(); });
}
function setupSettings() {
    document.getElementById('settings-btn').addEventListener('click', () => { document.getElementById('settings-panel').classList.remove('hidden'); document.getElementById('settings-api-key').value=state.apiKey; document.getElementById('settings-model').value=state.model; });
    document.getElementById('close-settings').addEventListener('click', () => document.getElementById('settings-panel').classList.add('hidden'));
    document.getElementById('settings-model').addEventListener('change', e => { state.model=e.target.value; localStorage.setItem('gemini_model',state.model); });
    document.getElementById('update-api-key').addEventListener('click', () => { const k=document.getElementById('settings-api-key').value.trim(); if(k){state.apiKey=k;localStorage.setItem('gemini_api_key',k);alert('API Key atualizada!');} });
    document.getElementById('reset-progress').addEventListener('click', () => { if(confirm('Tem certeza? Todo progresso será perdido.')){localStorage.clear();location.reload();} });
    document.getElementById('settings-panel').addEventListener('click', e => { if(e.target.id==='settings-panel') document.getElementById('settings-panel').classList.add('hidden'); });

    // Export
    document.getElementById('export-data').addEventListener('click', () => {
        const data = {
            _version: 1,
            _exportDate: new Date().toISOString(),
            gemini_api_key: localStorage.getItem('gemini_api_key'),
            gemini_model: localStorage.getItem('gemini_model'),
            academy_progress: localStorage.getItem('academy_progress'),
            academy_stats: localStorage.getItem('academy_stats'),
            academy_studied: localStorage.getItem('academy_studied'),
            academy_weak: localStorage.getItem('academy_weak'),
            academy_review: localStorage.getItem('academy_review'),
            academy_missions: localStorage.getItem('academy_missions')
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const date = new Date().toISOString().split('T')[0];
        a.href = url; a.download = `academy-backup-${date}.json`; a.click();
        URL.revokeObjectURL(url);
        localStorage.setItem('academy_last_backup', new Date().toISOString());
        updateBackupInfo();
    });

    // Import
    document.getElementById('import-file').addEventListener('change', e => {
        const file = e.target.files[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            try {
                const data = JSON.parse(ev.target.result);
                if (!data.academy_stats) { alert('Arquivo inválido.'); return; }
                if (!confirm('Isso vai substituir todo seu progresso atual. Continuar?')) return;
                Object.keys(data).forEach(k => {
                    if (k.startsWith('_')) return;
                    if (data[k] !== null) localStorage.setItem(k, data[k]);
                });
                alert('Backup importado com sucesso! Recarregando...');
                location.reload();
            } catch { alert('Erro ao ler o arquivo. Verifique se é um backup válido.'); }
        };
        reader.readAsText(file);
        e.target.value = '';
    });

    updateBackupInfo();
}

function updateBackupInfo() {
    const last = localStorage.getItem('academy_last_backup');
    const el = document.getElementById('last-backup-info');
    if (!el) return;
    if (last) {
        const d = new Date(last);
        const diff = Math.floor((Date.now() - d.getTime()) / 86400000);
        el.textContent = `Último backup: ${d.toLocaleDateString('pt-BR')}` + (diff >= 7 ? ' ⚠️ Faça um backup!' : '');
        if (diff >= 7) el.style.color = 'var(--danger)';
        else el.style.color = '';
    } else {
        el.textContent = '⚠️ Você nunca fez backup! Exporte agora.';
        el.style.color = 'var(--danger)';
    }
}

// ===== MARKDOWN =====
function renderMarkdown(text) {
    return text.replace(/```(\w*)\n([\s\S]*?)```/g, (_,l,c) => `<pre><code>${esc(c.trim())}</code></pre>`)
        .replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>').replace(/^### (.+)$/gm, '<h4>$1</h4>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>').replace(/^# (.+)$/gm, '<h2>$1</h2>')
        .replace(/^- (.+)$/gm, '<li>$1</li>').replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
        .replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')
        .replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>').replace(/<\/ul>\s*<ul>/g, '');
}
function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ===== LEARN PAGE =====
function setupLearnPage() {
    const ms=document.getElementById('learn-module'), ts=document.getElementById('learn-topic'), btn=document.getElementById('start-lesson');
    ms.addEventListener('change', () => { ts.innerHTML='<option value="">Selecione o tópico...</option>'; if(ms.value&&TOPICS[ms.value]) TOPICS[ms.value].topics.forEach((t,i)=>{const o=document.createElement('option');o.value=i;o.textContent=t;ts.appendChild(o);}); btn.disabled=true; });
    ts.addEventListener('change', () => btn.disabled=!ts.value);
    btn.addEventListener('click', async () => {
        const mod=ms.value, idx=ts.value; if(!mod||idx==='') return;
        const topic=TOPICS[mod].topics[idx], modName=TOPICS[mod].name;
        showLoading('Preparando sua aula...');
        try {
            const r = await callGemini(`Crie uma aula completa sobre "${topic}" (módulo: ${modName}) para a Apple Developer Academy.\n\nInclua: 1) Explicação teórica com analogias 2) Exemplos de código em C completos 3) Representação visual ASCII 4) Pegadinhas da prova 5) Exercício prático (sem resposta).\n\nUse markdown.`, SYSTEM_INSTRUCTION);
            document.getElementById('lesson-content').innerHTML = renderMarkdown(r);
            state.studiedTopics[mod] = true; localStorage.setItem('academy_studied', JSON.stringify(state.studiedTopics));
            state.stats.lessonsCompleted++; saveStats();
            addXp(15, 'Aula: '+topic); updateModuleProgress(mod, 5); addToReview(mod, topic);
            recordActivity(); updateMission('lesson'); checkAchievements();
        } catch(e) { document.getElementById('lesson-content').innerHTML=`<div class="lesson-placeholder"><p style="color:var(--danger)">${e.message}</p></div>`; }
        finally { hideLoading(); }
    });
}

// ===== QUIZ =====
function setupQuizPage() {
    const ms=document.getElementById('quiz-module'), btn=document.getElementById('start-quiz');
    document.querySelectorAll('.diff-btn').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.diff-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); }));
    document.querySelectorAll('.count-btn').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.count-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active'); }));
    ms.addEventListener('change', () => btn.disabled=!ms.value);
    btn.addEventListener('click', generateQuiz);
    document.getElementById('quiz-next').addEventListener('click', nextQuestion);
    document.getElementById('quiz-retry').addEventListener('click', () => { document.getElementById('quiz-results').classList.add('hidden'); document.getElementById('quiz-setup').style.display='flex'; });
}

async function generateQuiz() {
    const mod=document.getElementById('quiz-module').value; if(!mod) return;
    const diff=document.querySelector('.diff-btn.active').dataset.diff, count=parseInt(document.querySelector('.count-btn.active').dataset.count);
    const modName=mod==='all'?'todos os módulos':TOPICS[mod].name;
    const diffMap={easy:'fácil',medium:'médio',hard:'difícil'};
    showLoading('Gerando quiz...');
    try {
        const r = await callGemini(`Gere ${count} questões de múltipla escolha sobre "${modName}" (dificuldade: ${diffMap[diff]}) para a Apple Developer Academy.\n\nJSON puro:\n[{"question":"...","options":["A)...","B)...","C)...","D)..."],"correct":0,"explanation":"..."}]\n\nInclua código C quando relevante. APENAS JSON, sem markdown.`, SYSTEM_INSTRUCTION);
        const questions = JSON.parse(r.replace(/```json?\n?/g,'').replace(/```/g,'').trim());
        state.currentQuiz = { questions, current:0, score:0, answers:[], module:mod, diff, startTime:Date.now() };
        showQuizQ();
    } catch(e) { alert(e.message||'Erro. Tente novamente.'); } finally { hideLoading(); }
}

function showQuizQ() {
    const q=state.currentQuiz; if(!q) return;
    document.getElementById('quiz-setup').style.display='none';
    document.getElementById('quiz-area').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');
    const item=q.questions[q.current];
    document.getElementById('quiz-progress').textContent=`Questão ${q.current+1} de ${q.questions.length}`;
    document.getElementById('quiz-score').textContent=`Acertos: ${q.score}`;
    updateTimer('quiz-timer', q.startTime);
    document.getElementById('quiz-question').innerHTML=renderMarkdown(item.question);
    const optDiv=document.getElementById('quiz-options'); optDiv.innerHTML='';
    item.options.forEach((o,i)=>{const d=document.createElement('div');d.className='quiz-option';d.innerHTML=renderMarkdown(o);d.addEventListener('click',()=>selectQuizAnswer(i));optDiv.appendChild(d);});
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-next').classList.add('hidden');
}

function selectQuizAnswer(idx) {
    const q=state.currentQuiz, item=q.questions[q.current], opts=document.querySelectorAll('#quiz-options .quiz-option');
    opts.forEach(o=>o.classList.add('disabled')); opts[item.correct].classList.add('correct');
    if(idx!==item.correct) opts[idx].classList.add('wrong');
    const fb=document.getElementById('quiz-feedback'), ok=idx===item.correct;
    if(ok) { q.score++; addXp(5,'Quiz acerto'); fb.className='quiz-feedback correct'; fb.innerHTML=`<strong>Correto!</strong> ${item.explanation}`; }
    else { fb.className='quiz-feedback wrong'; fb.innerHTML=`<strong>Errado.</strong> ${item.explanation}`; }
    fb.classList.remove('hidden'); q.answers.push({idx,correct:ok});
    document.getElementById('quiz-score').textContent=`Acertos: ${q.score}`;
    document.getElementById('quiz-next').classList.remove('hidden');
    document.getElementById('quiz-next').textContent=q.current<q.questions.length-1?'Próxima →':'Ver Resultado';
    if(q.module!=='all') trackWeakness(q.module, ok?1:0, 1);
}

function nextQuestion() { state.currentQuiz.current++; if(state.currentQuiz.current<state.currentQuiz.questions.length) showQuizQ(); else showQuizResults(); }

function showQuizResults() {
    const q=state.currentQuiz, pct=Math.round(q.score/q.questions.length*100);
    document.getElementById('quiz-area').classList.add('hidden'); document.getElementById('quiz-results').classList.remove('hidden');
    document.getElementById('results-pct').textContent=pct+'%';
    document.getElementById('results-detail').textContent=`${q.score} de ${q.questions.length} corretas`;
    document.getElementById('results-xp').textContent=`+${q.score*5} XP ganhos`;
    let msg=pct>=90?'Excelente! Muito preparado!':pct>=70?'Bom! Continue praticando.':pct>=50?'Razoável. Revise os tópicos.':'Precisa estudar mais. Foco!';
    document.getElementById('results-message').textContent=msg;
    state.stats.quizzes++; state.stats.correct+=q.score; state.stats.total+=q.questions.length;
    if(pct===100 && q.questions.length>=10) state.stats.perfectQuiz=true;
    saveStats(); updateMission('quizCorrect', q.score);
    if(q.diff==='medium'&&pct>=80) updateMission('quizMedium80');
    if(q.module!=='all') updateModuleProgress(q.module, Math.round(pct/10));
    recordActivity(); checkAchievements();
    if(pct===100) fireConfetti();
}

function updateTimer(id, start) {
    clearInterval(window[`_timer_${id}`]);
    window[`_timer_${id}`] = setInterval(()=>{const e=Math.floor((Date.now()-start)/1000);document.getElementById(id).textContent=`⏱ ${String(Math.floor(e/60)).padStart(2,'0')}:${String(e%60).padStart(2,'0')}`;},1000);
}

// ===== CODE =====
function setupCodePage() {
    const ms=document.getElementById('code-module'), btn=document.getElementById('generate-challenge');
    document.querySelectorAll('.code-diff-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.code-diff-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');}));
    ms.addEventListener('change',()=>btn.disabled=!ms.value);
    btn.addEventListener('click', generateChallenge);
    document.getElementById('submit-code').addEventListener('click', submitCode);
    document.getElementById('hint-btn').addEventListener('click', ()=>{ const c=state.currentChallenge; if(!c||!c.hints) return; if(c.hintsUsed>=c.hints.length){alert('Sem mais dicas!');return;} alert('💡 Dica: '+c.hints[c.hintsUsed]); c.hintsUsed++; });
    document.getElementById('code-editor').addEventListener('keydown', e=>{ if(e.key==='Tab'){e.preventDefault();const t=e.target,s=t.selectionStart;t.value=t.value.substring(0,s)+'    '+t.value.substring(t.selectionEnd);t.selectionStart=t.selectionEnd=s+4;} });
}

async function generateChallenge() {
    const mod=document.getElementById('code-module').value; if(!mod) return;
    const diff=document.querySelector('.code-diff-btn.active').dataset.diff;
    showLoading('Gerando desafio...');
    try {
        const r = await callGemini(`Crie UM desafio de programação em C sobre "${TOPICS[mod].name}" (${diff==='easy'?'fácil':diff==='medium'?'médio':'difícil'}) para a Apple Developer Academy.\n\nJSON puro:\n{"title":"...","description":"...","examples":[{"input":"...","output":"..."}],"starterCode":"...","hints":["...","..."],"solution":"..."}\n\nAPENAS JSON.`, SYSTEM_INSTRUCTION);
        const ch = JSON.parse(r.replace(/```json?\n?/g,'').replace(/```/g,'').trim());
        state.currentChallenge = {...ch, module:mod, hintsUsed:0};
        document.getElementById('challenge-description').innerHTML=`<h3>${ch.title}</h3><p>${ch.description}</p>${(ch.examples||[]).map(e=>`<pre>Entrada: ${esc(e.input)}\nSaída: ${esc(e.output)}</pre>`).join('')}`;
        document.getElementById('code-editor').value=ch.starterCode||'#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}';
        document.getElementById('code-challenge').classList.remove('hidden');
        document.getElementById('code-feedback').classList.add('hidden');
    } catch(e) { alert(e.message); } finally { hideLoading(); }
}

async function submitCode() {
    const code=document.getElementById('code-editor').value, ch=state.currentChallenge; if(!code.trim()||!ch) return;
    showLoading('Avaliando...');
    try {
        const r = await callGemini(`Avalie este código C para "${ch.title}":\n\nDesafio: ${ch.description}\nSolução esperada:\n\`\`\`c\n${ch.solution}\n\`\`\`\nCódigo do aluno:\n\`\`\`c\n${code}\n\`\`\`\n\nJSON: {"correct":bool,"score":0-100,"feedback":"...","issues":["..."],"correctedCode":"ou null"}\nAPENAS JSON.`, SYSTEM_INSTRUCTION);
        const res = JSON.parse(r.replace(/```json?\n?/g,'').replace(/```/g,'').trim());
        const fb=document.getElementById('code-feedback'); fb.classList.remove('hidden','success','error'); fb.classList.add(res.correct?'success':'error');
        let html=`<h4>${res.correct?'✅ Correto!':'❌ Não está correto'} — ${res.score}/100</h4><p>${res.feedback}</p>`;
        if(res.issues?.length) html+=`<p><strong>Problemas:</strong></p><ul>${res.issues.map(i=>`<li>${i}</li>`).join('')}</ul>`;
        if(res.correctedCode&&!res.correct) html+=`<p><strong>Correção:</strong></p><pre>${esc(res.correctedCode)}</pre>`;
        fb.innerHTML=html;
        if(res.correct) { state.stats.challenges++; saveStats(); addXp(30,'Desafio correto'); updateModuleProgress(ch.module,8); updateMission('codeChallenge'); fireConfetti(); }
        trackWeakness(ch.module, res.correct?1:0, 1);
        recordActivity(); checkAchievements();
    } catch(e) { alert(e.message); } finally { hideLoading(); }
}

// ===== FLASHCARDS =====
function setupFlashcardsPage() {
    const ms=document.getElementById('flash-module'), btn=document.getElementById('generate-flashcards');
    ms.addEventListener('change',()=>btn.disabled=!ms.value);
    btn.addEventListener('click', generateFlashcards);
    document.getElementById('flashcard').addEventListener('click',()=>document.getElementById('flashcard').classList.toggle('flipped'));
    document.getElementById('flash-prev').addEventListener('click',()=>{if(state.currentFlashIndex>0){state.currentFlashIndex--;showFlash();}});
    document.getElementById('flash-next').addEventListener('click',()=>{if(state.currentFlashcards&&state.currentFlashIndex<state.currentFlashcards.length-1){state.currentFlashIndex++;showFlash();}});
    document.getElementById('flash-knew').addEventListener('click',()=>advFlash(true));
    document.getElementById('flash-didnt').addEventListener('click',()=>advFlash(false));
}
async function generateFlashcards() {
    const mod=document.getElementById('flash-module').value; if(!mod) return;
    showLoading('Gerando flashcards...');
    try {
        const r=await callGemini(`Gere 12 flashcards sobre "${TOPICS[mod].name}" para a Apple Developer Academy.\nJSON:[{"front":"pergunta curta","back":"resposta concisa"}]\nAPENAS JSON.`,SYSTEM_INSTRUCTION);
        state.currentFlashcards=JSON.parse(r.replace(/```json?\n?/g,'').replace(/```/g,'').trim());
        state.currentFlashIndex=0;
        document.getElementById('flashcard-area').classList.remove('hidden');
        document.getElementById('flash-total').textContent=state.currentFlashcards.length;
        showFlash(); recordActivity();
    } catch(e) { alert(e.message); } finally { hideLoading(); }
}
function showFlash() {
    const c=state.currentFlashcards[state.currentFlashIndex];
    document.getElementById('flash-question').innerHTML=renderMarkdown(c.front);
    document.getElementById('flash-answer').innerHTML=renderMarkdown(c.back);
    document.getElementById('flash-current').textContent=state.currentFlashIndex+1;
    document.getElementById('flashcard').classList.remove('flipped');
}
function advFlash(knew) {
    if(knew) { state.stats.correct++; addXp(2,'Flashcard'); }
    state.stats.total++; saveStats(); updateMission('flashcards');
    if(state.currentFlashIndex<state.currentFlashcards.length-1){state.currentFlashIndex++;showFlash();}
    else alert('Flashcards completos!');
}

// ===== EXAM SIMULATOR =====
function setupExamPage() {
    document.getElementById('start-exam').addEventListener('click', startExam);
    document.getElementById('exam-next').addEventListener('click', nextExamQ);
    document.getElementById('exam-retry').addEventListener('click',()=>{document.getElementById('exam-results').classList.add('hidden');document.getElementById('exam-setup').style.display='block';});
}

async function startExam() {
    showLoading('Gerando simulado completo (30 questões)... Isso pode levar um momento.');
    try {
        const allQuestions = [];
        const modules = Object.keys(TOPICS);
        // Generate 5 questions per module in batches
        for (const mod of modules) {
            const r = await callGemini(`Gere EXATAMENTE 5 questões de múltipla escolha sobre "${TOPICS[mod].name}" para simulado da Apple Developer Academy. Misture dificuldades (fácil, médio, difícil).\n\nJSON:[{"question":"...","options":["A)...","B)...","C)...","D)..."],"correct":0,"explanation":"...","module":"${mod}"}]\nAPENAS JSON.`, SYSTEM_INSTRUCTION);
            const qs = JSON.parse(r.replace(/```json?\n?/g,'').replace(/```/g,'').trim());
            qs.forEach(q => { q.module = mod; allQuestions.push(q); });
        }
        // Shuffle
        for (let i=allQuestions.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[allQuestions[i],allQuestions[j]]=[allQuestions[j],allQuestions[i]];}
        state.currentExam = { questions: allQuestions, current:0, score:0, answers:[], startTime:Date.now(), timeLimit:90*60*1000, moduleScores:{} };
        modules.forEach(m => state.currentExam.moduleScores[m] = {correct:0,total:0});
        showExamQ();
    } catch(e) { alert(e.message); } finally { hideLoading(); }
}

function showExamQ() {
    const ex=state.currentExam; if(!ex) return;
    document.getElementById('exam-setup').style.display='none';
    document.getElementById('exam-area').classList.remove('hidden');
    document.getElementById('exam-results').classList.add('hidden');
    const item=ex.questions[ex.current];
    document.getElementById('exam-progress').textContent=`Questão ${ex.current+1} de ${ex.questions.length}`;
    document.getElementById('exam-score').textContent=`Acertos: ${ex.score}`;
    document.getElementById('exam-module-tag').textContent=TOPICS[item.module]?.name||item.module;
    document.getElementById('exam-question').innerHTML=renderMarkdown(item.question);
    // Timer (countdown)
    clearInterval(window._examTimer);
    window._examTimer=setInterval(()=>{
        const remaining=Math.max(0,ex.timeLimit-(Date.now()-ex.startTime));
        const m=Math.floor(remaining/60000),s=Math.floor((remaining%60000)/1000);
        const el=document.getElementById('exam-timer');
        el.textContent=`⏱ ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        if(remaining<=300000) el.style.color='var(--danger)';
        if(remaining<=0){clearInterval(window._examTimer);showExamResults();}
    },1000);
    const optDiv=document.getElementById('exam-options'); optDiv.innerHTML='';
    item.options.forEach((o,i)=>{const d=document.createElement('div');d.className='quiz-option';d.innerHTML=renderMarkdown(o);d.addEventListener('click',()=>selectExamAnswer(i));optDiv.appendChild(d);});
    document.getElementById('exam-feedback').classList.add('hidden');
    document.getElementById('exam-next').classList.add('hidden');
}

function selectExamAnswer(idx) {
    const ex=state.currentExam, item=ex.questions[ex.current], opts=document.querySelectorAll('#exam-options .quiz-option');
    opts.forEach(o=>o.classList.add('disabled')); opts[item.correct].classList.add('correct');
    if(idx!==item.correct) opts[idx].classList.add('wrong');
    const ok=idx===item.correct;
    if(ok) { ex.score++; addXp(3,'Simulado acerto'); }
    ex.moduleScores[item.module].total++;
    if(ok) ex.moduleScores[item.module].correct++;
    trackWeakness(item.module,ok?1:0,1);
    const fb=document.getElementById('exam-feedback');
    fb.className=`quiz-feedback ${ok?'correct':'wrong'}`;
    fb.innerHTML=`<strong>${ok?'Correto!':'Errado.'}</strong> ${item.explanation}`;
    fb.classList.remove('hidden');
    document.getElementById('exam-score').textContent=`Acertos: ${ex.score}`;
    document.getElementById('exam-next').classList.remove('hidden');
    document.getElementById('exam-next').textContent=ex.current<ex.questions.length-1?'Próxima →':'Ver Resultado';
}

function nextExamQ() { state.currentExam.current++; if(state.currentExam.current<state.currentExam.questions.length) showExamQ(); else showExamResults(); }

function showExamResults() {
    clearInterval(window._examTimer);
    const ex=state.currentExam, pct=Math.round(ex.score/ex.questions.length*100);
    const elapsed=Math.floor((Date.now()-ex.startTime)/60000);
    document.getElementById('exam-area').classList.add('hidden');
    document.getElementById('exam-results').classList.remove('hidden');
    document.getElementById('exam-results-pct').textContent=pct+'%';
    document.getElementById('exam-results-detail').textContent=`${ex.score} de ${ex.questions.length} corretas`;
    document.getElementById('exam-results-xp').textContent=`+${ex.score*3+100} XP ganhos`;
    document.getElementById('exam-results-time').innerHTML=`<p>Tempo: ${elapsed} minutos</p>`;
    // Breakdown by module
    const bd=document.getElementById('exam-results-breakdown');
    bd.innerHTML=Object.keys(ex.moduleScores).map(m=>{const ms=ex.moduleScores[m];const p=ms.total>0?Math.round(ms.correct/ms.total*100):0;return `<div class="exam-breakdown-item"><span>${TOPICS[m]?.name||m}</span><span>${ms.correct}/${ms.total} (${p}%)</span></div>`;}).join('');
    let msg=pct>=90?'EXCELENTE! Você está pronto!':pct>=70?'BOM! Passou no simulado!':pct>=50?'QUASE! Revise as fraquezas.':'PRECISA ESTUDAR MAIS. Foque nos módulos fracos!';
    document.getElementById('exam-results-message').innerHTML=`<p><strong>${msg}</strong></p>`;
    addXp(100,'Simulado completo');
    state.stats.quizzes++; state.stats.correct+=ex.score; state.stats.total+=ex.questions.length;
    if(pct>=70) state.stats.examPassed=true;
    if(pct>=90) state.stats.examAced=true;
    saveStats(); recordActivity(); checkAchievements();
    if(pct>=70) fireConfetti();
}

// ===== CHAT =====
function setupChatPage() {
    document.getElementById('chat-send').addEventListener('click', sendChat);
    document.getElementById('chat-input').addEventListener('keydown', e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat();}});
    document.getElementById('chat-input').addEventListener('input', e=>{e.target.style.height='auto';e.target.style.height=Math.min(e.target.scrollHeight,120)+'px';});
    document.querySelectorAll('.quick-prompt').forEach(b=>b.addEventListener('click',()=>{document.getElementById('chat-input').value=b.dataset.prompt;sendChat();}));
}
async function sendChat() {
    const input=document.getElementById('chat-input'), msg=input.value.trim(); if(!msg) return;
    const msgs=document.getElementById('chat-messages');
    msgs.innerHTML+=`<div class="chat-msg user"><div class="msg-avatar">👤</div><div class="msg-content"><p>${esc(msg)}</p></div></div>`;
    input.value=''; input.style.height='auto';
    msgs.innerHTML+=`<div class="chat-msg bot" id="chat-loading"><div class="msg-avatar">🤖</div><div class="msg-content"><p><em>Pensando...</em></p></div></div>`;
    msgs.scrollTop=msgs.scrollHeight;
    try {
        const r=await callGemini(msg, SYSTEM_INSTRUCTION);
        document.getElementById('chat-loading')?.remove();
        msgs.innerHTML+=`<div class="chat-msg bot"><div class="msg-avatar">🤖</div><div class="msg-content">${renderMarkdown(r)}</div></div>`;
        addXp(3,'Pergunta ao tutor'); updateMission('chatQuestion'); recordActivity();
    } catch(e) { document.getElementById('chat-loading')?.remove(); msgs.innerHTML+=`<div class="chat-msg bot"><div class="msg-avatar">🤖</div><div class="msg-content"><p style="color:var(--danger)">Erro: ${e.message}</p></div></div>`; }
    msgs.scrollTop=msgs.scrollHeight;
}

// ===== POMODORO (floating widget) =====
function setupPomodoroPage() {
    let focusMin=25, breakMin=5, running=false, onBreak=false, remaining=25*60, interval=null;
    const widget = document.getElementById('pomo-widget');
    const wTime = document.getElementById('pomo-widget-time');
    const wLabel = document.getElementById('pomo-widget-label');
    const wStart = document.getElementById('pomo-widget-start');
    const wControls = document.getElementById('pomo-widget-controls');

    // Also keep the full page working
    const timeEl=document.getElementById('pomo-time'), labelEl=document.getElementById('pomo-label');
    const circle=document.getElementById('pomo-circle'), startBtn=document.getElementById('pomo-start');
    const circumference = 2*Math.PI*90;
    if (circle) circle.style.strokeDasharray=circumference;

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }

    function formatTime(sec) {
        const m=Math.floor(sec/60), s=sec%60;
        return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }

    function updateDisplay() {
        const timeStr = formatTime(remaining);
        // Widget
        if (wTime) wTime.textContent = timeStr;
        if (wLabel) {
            wLabel.textContent = onBreak ? 'PAUSA' : 'FOCO';
            wLabel.classList.toggle('break', onBreak);
        }
        // Full page
        if (timeEl) timeEl.textContent = timeStr;
        if (labelEl) labelEl.textContent = onBreak ? 'DESCANSO' : 'FOCO';
        if (circle) {
            const total = onBreak ? breakMin*60 : focusMin*60;
            const progress = ((total-remaining)/total)*circumference;
            circle.style.strokeDashoffset = circumference - progress;
            if(onBreak) circle.classList.add('break-mode'); else circle.classList.remove('break-mode');
        }
        // Tab title
        if (running) document.title = `${timeStr} ${onBreak?'☕':'🍅'} Academy Study Hub`;
        else document.title = 'Apple Academy Study Hub';
    }

    function notifyEnd(isBreak) {
        // Sound beep
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.connect(gain); gain.connect(ctx.destination);
            osc.frequency.value = isBreak ? 523 : 440;
            gain.gain.value = 0.3;
            osc.start(); setTimeout(()=>{osc.stop();ctx.close();}, 600);
        } catch(e) {}
        // Browser notification
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(isBreak ? '☕ Pausa acabou!' : '🍅 Foco concluído!', {
                body: isBreak ? 'Hora de voltar a estudar!' : 'Boa! Hora de descansar.',
                icon: '🍅'
            });
        }
        // Widget alarm animation
        widget.classList.add('alarm');
        setTimeout(() => widget.classList.remove('alarm'), 3000);
    }

    function start() {
        if (running) { clearInterval(interval); running=false; wStart.textContent='Continuar'; if(startBtn) startBtn.textContent='Continuar'; return; }
        running=true; wStart.textContent='Pausar'; if(startBtn) startBtn.textContent='Pausar';
        interval = setInterval(()=>{
            remaining--;
            if (remaining <= 0) {
                clearInterval(interval); running=false;
                if (!onBreak) {
                    state.stats.pomodorosCompleted=(state.stats.pomodorosCompleted||0)+1;
                    state.stats.pomoCyclesToday=(state.stats.pomoCyclesToday||0)+1;
                    state.stats.pomoTotalMin=(state.stats.pomoTotalMin||0)+focusMin;
                    saveStats(); addXp(10,'Pomodoro completo'); updateMission('pomodoro'); checkAchievements();
                    const pc=document.getElementById('pomo-cycles'); if(pc) pc.textContent=state.stats.pomoCyclesToday;
                    const pt=document.getElementById('pomo-total'); if(pt) pt.textContent=`${Math.floor(state.stats.pomoTotalMin/60)}h ${state.stats.pomoTotalMin%60}min`;
                    notifyEnd(false);
                    onBreak=true; remaining=breakMin*60;
                    wStart.textContent='Iniciar Pausa'; if(startBtn) startBtn.textContent='Iniciar Descanso';
                    fireConfetti();
                } else {
                    notifyEnd(true);
                    onBreak=false; remaining=focusMin*60;
                    wStart.textContent='Iniciar'; if(startBtn) startBtn.textContent='Iniciar';
                }
            }
            updateDisplay();
        }, 1000);
    }

    function reset() {
        clearInterval(interval); running=false; onBreak=false; remaining=focusMin*60;
        wStart.textContent='Iniciar'; if(startBtn) startBtn.textContent='Iniciar';
        updateDisplay();
    }

    // Widget controls
    wStart.addEventListener('click', start);
    document.getElementById('pomo-widget-reset').addEventListener('click', reset);
    document.getElementById('pomo-widget-close').addEventListener('click', () => {
        if (running && !confirm('Timer rodando. Fechar mesmo?')) return;
        reset(); widget.classList.add('hidden');
    });
    document.getElementById('pomo-widget-toggle').addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        wControls.style.display = wControls.style.display === 'none' ? 'flex' : 'none';
    });

    // Sidebar toggle opens widget
    document.getElementById('nav-pomo-toggle').addEventListener('click', () => {
        widget.classList.remove('hidden');
        document.getElementById('sidebar').classList.remove('open');
    });

    // Full page controls (if they navigate to pomodoro page)
    if (startBtn) startBtn.addEventListener('click', () => { widget.classList.remove('hidden'); start(); });
    const resetBtn = document.getElementById('pomo-reset');
    if (resetBtn) resetBtn.addEventListener('click', reset);

    document.querySelectorAll('.pomo-adj-btn').forEach(btn=>{
        btn.addEventListener('click',()=>{
            const target=btn.dataset.target, dir=parseInt(btn.dataset.dir);
            if(target==='focus'){focusMin=Math.max(5,Math.min(60,focusMin+dir*5));document.getElementById('pomo-focus-val').textContent=focusMin;if(!running&&!onBreak){remaining=focusMin*60;updateDisplay();}}
            else{breakMin=Math.max(1,Math.min(30,breakMin+dir));document.getElementById('pomo-break-val').textContent=breakMin;}
        });
    });

    updateDisplay();
    const pc=document.getElementById('pomo-cycles'); if(pc) pc.textContent=state.stats.pomoCyclesToday||0;
    const pt=document.getElementById('pomo-total'); if(pt) pt.textContent=`${Math.floor((state.stats.pomoTotalMin||0)/60)}h ${(state.stats.pomoTotalMin||0)%60}min`;
}

// ===== VIDEO AULAS =====
function setupVideosPage() {
    const customVideos = JSON.parse(localStorage.getItem('academy_custom_videos') || '[]');
    const watchedVideos = JSON.parse(localStorage.getItem('academy_watched_videos') || '[]');

    const filter = document.getElementById('video-module-filter');
    filter.addEventListener('change', () => renderVideos());

    document.getElementById('toggle-add-video').addEventListener('click', () => {
        document.getElementById('add-video-form').classList.toggle('hidden');
    });

    document.getElementById('save-custom-video').addEventListener('click', () => {
        const url = document.getElementById('custom-video-url').value.trim();
        const title = document.getElementById('custom-video-title').value.trim();
        const module = document.getElementById('custom-video-module').value;
        if (!url || !title) { alert('Preencha o link e o título.'); return; }
        const videoId = extractYouTubeId(url);
        if (!videoId) { alert('Link inválido. Cole um link do YouTube.'); return; }
        customVideos.push({ id: videoId, title, module, type: 'video', custom: true });
        localStorage.setItem('academy_custom_videos', JSON.stringify(customVideos));
        document.getElementById('custom-video-url').value = '';
        document.getElementById('custom-video-title').value = '';
        document.getElementById('add-video-form').classList.add('hidden');
        renderVideos();
    });

    function extractYouTubeId(url) {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
            /youtube\.com\/playlist\?list=([a-zA-Z0-9_-]+)/
        ];
        for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
        return null;
    }

    function isPlaylist(id) { return id.length > 11; }

    function getEmbedUrl(video) {
        if (video.type === 'playlist' || isPlaylist(video.id)) {
            return `https://www.youtube.com/embed/videoseries?list=${video.id}`;
        }
        return `https://www.youtube.com/embed/${video.id}`;
    }

    function renderVideos() {
        const mod = filter.value;
        const allVideos = [...CURATED_VIDEOS, ...customVideos];
        const filtered = mod === 'all' ? allVideos : allVideos.filter(v => v.module === mod);
        const grid = document.getElementById('videos-grid');

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="lesson-placeholder"><span class="placeholder-icon">🎬</span><p>Nenhum vídeo nesse módulo ainda.</p></div>';
            return;
        }

        grid.innerHTML = filtered.map((v, i) => {
            const watched = watchedVideos.includes(v.id);
            const modName = TOPICS[v.module]?.name || 'Geral';
            const deleteBtn = v.custom ? `<span class="video-delete" data-vid="${v.id}" title="Remover">✕</span>` : '';
            return `<div class="video-card">
                <iframe src="${getEmbedUrl(v)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                <div class="video-card-info">
                    <h4>${v.title}</h4>
                    <div class="video-meta">
                        <span class="video-module-tag">${modName}</span>
                        <span>
                            <span class="video-watched" data-vid="${v.id}">${watched ? '✅ Assistido' : '👁 Marcar assistido'}</span>
                            ${deleteBtn}
                        </span>
                    </div>
                </div>
            </div>`;
        }).join('');

        // Watch toggle
        grid.querySelectorAll('.video-watched').forEach(el => {
            el.addEventListener('click', () => {
                const vid = el.dataset.vid;
                const idx = watchedVideos.indexOf(vid);
                if (idx >= 0) { watchedVideos.splice(idx, 1); }
                else { watchedVideos.push(vid); addXp(5, 'Vídeo assistido'); recordActivity(); }
                localStorage.setItem('academy_watched_videos', JSON.stringify(watchedVideos));
                renderVideos();
            });
        });

        // Delete custom
        grid.querySelectorAll('.video-delete').forEach(el => {
            el.addEventListener('click', () => {
                const vid = el.dataset.vid;
                const idx = customVideos.findIndex(v => v.id === vid);
                if (idx >= 0 && confirm('Remover esse vídeo?')) {
                    customVideos.splice(idx, 1);
                    localStorage.setItem('academy_custom_videos', JSON.stringify(customVideos));
                    renderVideos();
                }
            });
        });
    }

    renderVideos();
}
