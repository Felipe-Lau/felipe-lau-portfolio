// Todo o conteúdo do site vive aqui — edite este arquivo para atualizar o portfólio.

export const profile = {
  name: 'Felipe Lau',
  roles: [
    'QA Pleno',
    'Especialista em Cypress & Playwright',
    'Automação Web, API & Mobile',
    'BDD com Gherkin',
    'Liderança em Qualidade'
  ],
  headline:
    'Pós-graduado em Engenharia da Qualidade de Software, atuo garantindo que produtos digitais funcionem como prometido — planejando estratégias de teste e automatizando fluxos web, API e mobile.',
  location: 'Florianópolis, SC — Brasil',
  email: 'felipelaucs@gmail.com',
  linkedin: 'https://www.linkedin.com/in/felipe-lau/',
  github: 'https://github.com/Felipe-Lau',
  githubUser: 'Felipe-Lau',
};

export const marqueeItems = [
  'Cypress',
  'Playwright',
  'Appium',
  'K6',
  'JavaScript',
  'TypeScript',
  'CodeCeptJS',
  'MySQL',
  'BDD / Gherkin',
  'Scrum',
  'JIRA',
  'Page Object Model',
];

export const about = {
  paragraphs: [
    'Comecei minha trajetória em tecnologia como desenvolvedor, o que hoje me dá uma visão diferenciada como QA: entendo o código por trás do bug, não só o sintoma. Desde 2023 atuo focado em Qualidade de Software, evoluindo de testes manuais estruturados para automação completa de fluxos web, API e mobile com Cypress, Playwright, Appium e K6.',
    'Mais do que executar testes, gosto de liderar a conversa sobre qualidade. Sou eu quem facilita os rituais do time (Dailys, Plannings, Refinements e Retrospectivas), conduzo POCs que definem quais ferramentas o projeto adota e uso BDD com Gherkin para alinhar negócio e desenvolvimento em torno do mesmo entendimento. Qualidade, para mim, é responsabilidade do time inteiro — meu papel é puxar esse assunto todos os dias.',
  ],
  stats: [
    { value: 3, suffix: '+', label: 'Anos em Qualidade de Software' },
    { value: 6, suffix: '', label: 'Experiências profissionais' },
    { value: 5, suffix: '', label: 'Ferramentas de automação no dia a dia' },
  ],
};

// Datas em 'YYYY-MM'; end: null = trabalho atual (o período e a duração são calculados pelo navegador)
export const experience = [
  {
    company: 'Dynamox',
    roles: [
      {
        title: 'QA Pleno',
        start: '2026-01',
        end: null,
        items: [
          'Elaboração de planos de teste abrangentes cobrindo todo o ciclo de vida do software',
          'Liderança de POCs para avaliação de novas ferramentas de teste',
          'Automação Web/API com Cypress e Playwright usando Page Object Model (POM)',
          'Automação mobile com Appium',
          'Testes de carga e estresse com K6',
          'Cenários BDD com Gherkin e facilitação de rituais ágeis (Scrum)',
        ],
      },
      {
        title: 'QA Júnior',
        start: '2025-05',
        end: '2026-01',
        items: [
          'Automação de testes web (Cypress, Playwright) e mobile (Python + Appium)',
          'Cenários de teste BDD com Gherkin',
          'Análise, reporte e colaboração no ciclo de resolução de defeitos',
        ],
      },
    ],
  },
  {
    company: 'Pieta.tech',
    roles: [
      {
        title: 'Analista de Teste / QA',
        start: '2024-02',
        end: '2025-07',
        items: [
          'Planos e casos de teste funcionais, de regressão, integração e sistema',
          'Início da automação de testes com Cypress',
          'Identificação e rastreamento de defeitos no JIRA',
          'Participação ativa em cerimônias ágeis',
        ],
      },
      {
        title: 'TI',
        start: '2023-04',
        end: '2024-04',
        items: [
          'Suporte técnico, configuração de VPN e servidores, documentação de processos',
          'Criação de MVPs no-code com Bubble',
        ],
      },
    ],
  },
  {
    company: 'Cogni',
    roles: [
      {
        title: 'Desenvolvedor',
        start: '2022-09',
        end: '2023-04',
        items: [
          'Desenvolvimento de aplicações web e mobile com HTML, CSS e Ionic',
          'Testes exploratórios no aplicativo e documentação de bugs encontrados',
        ],
      },
    ],
  },
  {
    company: 'Ritmo do Esporte',
    roles: [
      {
        title: 'Estagiário',
        start: '2022-05',
        end: '2022-09',
        items: ['Atuação na área de Suporte/Desenvolvimento'],
      },
    ],
  },
];

export const skillGroups = [
  {
    title: 'Automação de Testes',
    icon: 'bolt',
    tags: ['Cypress', 'Playwright', 'CodeCeptJS', 'Appium', 'K6' ],
  },
  {
    title: 'Metodologias & Processos',
    icon: 'flow',
    tags: ['BDD / Gherkin', 'Ágil / Scrum', 'Page Object Model', 'Estratégia de TI', 'Documentação'],
  },
  {
    title: 'Linguagens & Dados',
    icon: 'code',
    tags: ['JavaScript', 'TypeScript', 'MySQL', 'SQL'],
  },
  {
    title: 'Ferramentas',
    icon: 'wrench',
    tags: ['JIRA', 'Git', 'BitBucket' ,'Bubble (no-code)', 'Postman'],
  },
];

export const education = [
  {
    degree: 'Pós-graduação Lato Sensu — Engenharia da Qualidade de Software',
    school: 'Senac',
    period: 'fev/2025 — abr/2026',
  },
  {
    degree: 'Curso Superior de Tecnologia (CST) — Análise e Desenvolvimento de Sistemas',
    school: 'SENAI/SC — Serviço Nacional de Aprendizagem Industrial',
    period: 'fev/2022 — jul/2024',
  }
];
