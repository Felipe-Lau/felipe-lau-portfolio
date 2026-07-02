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
  'Python',
  'MySQL',
  'BDD / Gherkin',
  'Scrum',
  'JIRA',
  'Page Object Model',
];

export const about = {
  paragraphs: [
    'Comecei minha trajetória em tecnologia como desenvolvedor, o que hoje me dá uma visão diferenciada como QA: entendo o código por trás do bug, não só o sintoma. Desde 2023 atuo focado em Qualidade de Software, migrando de testes manuais estruturados para automação completa de fluxos web, API e mobile.',
    'Hoje, como QA Pleno, lidero planejamento de estratégia de testes, POCs de novas ferramentas, automação com Cypress, Playwright e Appium, testes de performance com K6 e cenários BDD com Gherkin — sempre em ciclos ágeis, facilitando rituais Scrum e colaborando de perto com o time de desenvolvimento.',
  ],
  stats: [
    { value: 3, suffix: '+', label: 'Anos em Qualidade de Software' },
    { value: 6, suffix: '', label: 'Experiências profissionais' },
    { value: 4, suffix: '', label: 'Ferramentas de automação no dia a dia' },
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
    tags: ['Cypress', 'Playwright', 'Appium', 'K6'],
  },
  {
    title: 'Metodologias & Processos',
    icon: 'flow',
    tags: ['BDD / Gherkin', 'Ágil / Scrum', 'Page Object Model', 'Estratégia de TI', 'Documentação'],
  },
  {
    title: 'Linguagens & Dados',
    icon: 'code',
    tags: ['JavaScript', 'Python', 'MySQL', 'SQL'],
  },
  {
    title: 'Ferramentas',
    icon: 'wrench',
    tags: ['JIRA', 'Git', 'Bubble (no-code)'],
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
