import { SearchResult } from '../types';
import { technologyPatterns } from '../data/dorks';

// Mock search function - in a real implementation, this would integrate with actual search APIs
export const performSearch = async (query: string): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
  
  // Generate mock results based on the query
  const mockResults: SearchResult[] = [];
  const resultCount = Math.floor(Math.random() * 15) + 5; // 5-20 results
  
  for (let i = 0; i < resultCount; i++) {
    const domains = [
      'example.com', 'test.com', 'demo.org', 'staging.net', 'dev.io',
      'api.company.com', 'admin.site.org', 'backup.service.net',
      's3.amazonaws.com', 'github.com', 'gitlab.com'
    ];
    
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const url = `https://${domain}/${generateRandomPath()}`;
    
    const result: SearchResult = {
      id: `result-${i}`,
      title: generateResultTitle(query),
      url,
      snippet: generateResultSnippet(query, url),
      domain,
      detectedTechnologies: detectTechnologies(url + ' ' + generateResultSnippet(query, url)),
      riskLevel: generateRiskLevel(),
      timestamp: new Date().toISOString()
    };
    
    mockResults.push(result);
  }
  
  return mockResults.sort((a, b) => {
    const riskOrder = { critical: 0, high: 1, medium: 2, low: 3, info: 4 };
    return riskOrder[a.riskLevel as keyof typeof riskOrder] - riskOrder[b.riskLevel as keyof typeof riskOrder];
  });
};

const generateRandomPath = (): string => {
  const paths = [
    'admin/login.php',
    'wp-admin/',
    'api/v1/users',
    'config/database.yml',
    '.env',
    'backup.sql',
    'admin/dashboard',
    'phpmyadmin/',
    '.git/config',
    'uploads/sensitive.pdf',
    'api/swagger',
    'debug/phpinfo.php'
  ];
  
  return paths[Math.floor(Math.random() * paths.length)];
};

const generateResultTitle = (query: string): string => {
  const titles = [
    'Admin Dashboard - Login Required',
    'Database Configuration File',
    'API Documentation',
    'System Backup Directory',
    'Development Environment Setup',
    'User Authentication Portal',
    'Configuration Management System',
    'Debug Information Page',
    'File Upload Directory',
    'System Administration Panel'
  ];
  
  return titles[Math.floor(Math.random() * titles.length)];
};

const generateResultSnippet = (query: string, url: string): string => {
  const snippets = [
    'This page contains sensitive configuration information including database credentials and API keys.',
    'Administrative access portal for system management. Login required for authorized personnel only.',
    'Exposed directory listing showing backup files, configuration data, and system information.',
    'API endpoint documentation revealing available methods, parameters, and authentication requirements.',
    'Database dump file containing user information, passwords, and system configuration data.',
    'Development environment with debug information, system paths, and application details exposed.',
    'File upload directory with publicly accessible documents and potentially sensitive information.',
    'Git repository configuration file revealing project structure and deployment information.',
    'WordPress administration panel with user authentication and content management capabilities.',
    'System error log containing stack traces, file paths, and application debugging information.'
  ];
  
  return snippets[Math.floor(Math.random() * snippets.length)];
};

const detectTechnologies = (content: string): string[] => {
  const detected = [];
  
  for (const [tech, pattern] of Object.entries(technologyPatterns)) {
    if (pattern.test(content)) {
      detected.push(tech);
    }
  }
  
  // Add some random technologies for demo purposes
  const commonTech = ['Apache', 'Nginx', 'PHP', 'MySQL', 'WordPress', 'Node.js'];
  const randomTech = commonTech.filter(() => Math.random() > 0.7);
  
  return [...new Set([...detected, ...randomTech])].slice(0, 3);
};

const generateRiskLevel = (): 'info' | 'low' | 'medium' | 'high' | 'critical' => {
  const levels = ['info', 'low', 'medium', 'high', 'critical'];
  const weights = [0.1, 0.2, 0.4, 0.25, 0.05]; // Weighted distribution
  
  const random = Math.random();
  let cumulative = 0;
  
  for (let i = 0; i < levels.length; i++) {
    cumulative += weights[i];
    if (random <= cumulative) {
      return levels[i] as any;
    }
  }
  
  return 'medium';
};

export const exportResults = (results: SearchResult[], format: 'json' | 'csv' | 'markdown'): string => {
  switch (format) {
    case 'json':
      return JSON.stringify(results, null, 2);
      
    case 'csv':
      const headers = ['Title', 'URL', 'Domain', 'Risk Level', 'Technologies', 'Snippet'];
      const csvData = results.map(r => [
        `"${r.title.replace(/"/g, '""')}"`,
        r.url,
        r.domain,
        r.riskLevel,
        `"${r.detectedTechnologies.join(', ')}"`,
        `"${r.snippet.replace(/"/g, '""')}"`
      ].join(','));
      
      return [headers.join(','), ...csvData].join('\n');
      
    case 'markdown':
      return results.map(r => 
        `## ${r.title}\n\n` +
        `**URL:** ${r.url}\n` +
        `**Domain:** ${r.domain}\n` +
        `**Risk Level:** ${r.riskLevel}\n` +
        `**Technologies:** ${r.detectedTechnologies.join(', ')}\n\n` +
        `${r.snippet}\n\n---\n`
      ).join('\n');
      
    default:
      return '';
  }
};
