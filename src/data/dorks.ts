import { GoogleDork } from '../types';

export const googleDorks: GoogleDork[] = [
  {
    id: '1',
    query: 'site:hackerone.com inurl:reports',
    description: 'Find HackerOne disclosed reports',
    category: 'development',
    platform: ['hackerone'],
    assetType: 'documentation',
    noiseLevel: 'low',
    tags: ['reports', 'disclosure', 'hackerone'],
    examples: ['site:hackerone.com/reports inurl:disclosed']
  },
  {
    id: '2',
    query: 'intitle:"Index of" "admin" "config"',
    description: 'Exposed admin configuration directories',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['admin', 'config', 'directory-listing'],
    examples: ['intitle:"Index of /admin"', 'intitle:"Index of /config"']
  },
  {
    id: '3',
    query: 'filetype:sql "CREATE TABLE" password',
    description: 'SQL dump files containing password tables',
    category: 'database-dumps',
    platform: ['generic'],
    assetType: 'database',
    noiseLevel: 'low',
    tags: ['sql', 'password', 'database', 'dump'],
    examples: ['filetype:sql "INSERT INTO users"', 'filetype:sql "password" "email"']
  },
  {
    id: '4',
    query: 'site:github.com "api_key" OR "secret_key"',
    description: 'API keys exposed in GitHub repositories',
    category: 'git-repositories',
    platform: ['generic'],
    assetType: 'repository',
    noiseLevel: 'medium',
    tags: ['github', 'api-key', 'secrets'],
    examples: ['site:github.com "AWS_SECRET_KEY"', 'site:github.com "STRIPE_SECRET"']
  },
  {
    id: '5',
    query: 'inurl:wp-admin intitle:"WordPress"',
    description: 'WordPress admin login pages',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'high',
    tags: ['wordpress', 'admin', 'login'],
    examples: ['inurl:wp-login.php', 'intitle:"Log In — WordPress"']
  },
  {
    id: '6',
    query: 'filetype:env "DB_PASSWORD"',
    description: 'Environment files with database credentials',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['env', 'database', 'credentials'],
    examples: ['filetype:env "DATABASE_URL"', 'filetype:env "JWT_SECRET"']
  },
  {
    id: '7',
    query: 'site:s3.amazonaws.com filetype:pdf',
    description: 'PDF files in public S3 buckets',
    category: 'cloud-storage',
    platform: ['generic'],
    assetType: 'storage',
    noiseLevel: 'medium',
    tags: ['s3', 'aws', 'pdf', 'bucket'],
    examples: ['site:s3.amazonaws.com filetype:xlsx', 'site:s3.amazonaws.com filetype:doc']
  },
  {
    id: '8',
    query: 'inurl:"/api/v1/" OR inurl:"/api/v2/"',
    description: 'API endpoints version 1 and 2',
    category: 'api-endpoints',
    platform: ['generic'],
    assetType: 'endpoint',
    noiseLevel: 'medium',
    tags: ['api', 'endpoint', 'version'],
    examples: ['inurl:"/api/users"', 'inurl:"/api/auth"']
  },
  {
    id: '9',
    query: 'intitle:"phpMyAdmin" "Welcome to phpMyAdmin"',
    description: 'phpMyAdmin database management interfaces',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'low',
    tags: ['phpmyadmin', 'database', 'mysql'],
    examples: ['intitle:"phpMyAdmin 4.8"', 'intitle:"phpMyAdmin 5.0"']
  },
  {
    id: '10',
    query: 'filetype:log "error" "exception"',
    description: 'Application error logs with exceptions',
    category: 'error-pages',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'high',
    tags: ['logs', 'error', 'exception'],
    examples: ['filetype:log "stack trace"', 'filetype:log "fatal error"']
  },
  {
    id: '11',
    query: 'site:bugcrowd.com inurl:"/programs/"',
    description: 'Bugcrowd program pages and scopes',
    category: 'development',
    platform: ['bugcrowd'],
    assetType: 'documentation',
    noiseLevel: 'low',
    tags: ['bugcrowd', 'programs', 'scope'],
    examples: ['site:bugcrowd.com inurl:program', 'site:bugcrowd.com "scope"']
  },
  {
    id: '12',
    query: 'inurl:".git" filetype:config',
    description: 'Git configuration files',
    category: 'git-repositories',
    platform: ['generic'],
    assetType: 'repository',
    noiseLevel: 'low',
    tags: ['git', 'config', 'repository'],
    examples: ['inurl:".git/config"', 'inurl:".git/HEAD"']
  }
];

export const technologyPatterns = {
  'Jenkins': /jenkins|build\.jenkins/i,
  'Jira': /jira|atlassian/i,
  'AWS S3': /s3\.amazonaws\.com/i,
  'Firebase': /firebase|firebaseapp/i,
  'WordPress': /wp-admin|wp-content|wordpress/i,
  'Docker': /docker|dockerfile/i,
  'MongoDB': /mongodb|mongo/i,
  'Redis': /redis/i,
  'MySQL': /mysql|phpmyadmin/i,
  'PostgreSQL': /postgresql|postgres/i,
  'Apache': /apache/i,
  'Nginx': /nginx/i,
  'PHP': /\.php|php/i,
  'Node.js': /node\.js|nodejs/i,
  'Django': /django/i,
  'Rails': /rails|ruby/i
};
