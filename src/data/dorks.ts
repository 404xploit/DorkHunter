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
  },
  {
    id: '13',
    query: 'inurl:"/admin/" intitle:"Login"',
    description: 'Admin login pages',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['admin', 'login'],
    examples: ['inurl:"/admin/login.php"', 'intitle:"Admin Panel Login"']
  },
  {
    id: '14',
    query: 'inurl:"/backup/" OR inurl:"/old/" filetype:zip OR filetype:tar.gz',
    description: 'Backup files or old versions of websites',
    category: 'backup-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'medium',
    tags: ['backup', 'old', 'zip', 'tar.gz'],
    examples: ['inurl:"/backup/website.zip"', 'inurl:"/old/site.tar.gz"']
  },
  {
    id: '15',
    query: 'inurl:"/test/" OR inurl:"/dev/" OR inurl:"/staging/"',
    description: 'Test, development, or staging environments',
    category: 'development-environments',
    platform: ['generic'],
    assetType: 'environment',
    noiseLevel: 'high',
    tags: ['test', 'dev', 'staging'],
    examples: ['inurl:"/test/index.php"', 'inurl:"/dev/login.html"']
  },
  {
    id: '16',
    query: 'intitle:"Dashboard" inurl:"/login"',
    description: 'Login pages for dashboards',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['dashboard', 'login'],
    examples: ['intitle:"Admin Dashboard" inurl:"/login"', 'intitle:"Control Panel" inurl:"/login"']
  },
  {
    id: '17',
    query: 'filetype:log intext:"password"',
    description: 'Log files containing passwords',
    category: 'log-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['log', 'password'],
    examples: ['filetype:log intext:"user:password"', 'filetype:log intext:"login_credentials"']
  },
  {
    id: '18',
    query: 'inurl:"/phpinfo.php"',
    description: 'PHP info pages exposing server configuration',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['phpinfo', 'config', 'server'],
    examples: ['inurl:"/info.php"', 'inurl:"/test.php" intitle:"phpinfo()"']
  },
  {
    id: '19',
    query: 'inurl:"/robots.txt" intext:"Disallow: /"',
    description: 'Robots.txt files disallowing access to sensitive directories',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['robots.txt', 'disallow', 'sensitive'],
    examples: ['inurl:"/robots.txt" intext:"Disallow: /admin"', 'inurl:"/robots.txt" intext:"Disallow: /private"']
  },
  {
    id: '20',
    query: 'inurl:"/config.php" OR inurl:"/settings.php" intext:"DB_HOST"',
    description: 'Configuration files with database connection details',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['config', 'settings', 'database'],
    examples: ['inurl:"/config.php" intext:"DB_USER"', 'inurl:"/settings.php" intext:"DB_NAME"']
  },
  {
    id: '21',
    query: 'inurl:"/admin/" intext:"Powered by"',
    description: 'Admin panels with 


admin panel identification
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['admin', 'powered-by'],
    examples: ['inurl:"/admin/" intext:"Powered by WordPress"']
  },
  {
    id: '22',
    query: 'inurl:"/wp-content/uploads/" filetype:zip OR filetype:rar',
    description: 'WordPress uploaded files containing archives',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'file',
    noiseLevel: 'medium',
    tags: ['wordpress', 'uploads', 'zip', 'rar'],
    examples: ['inurl:"/wp-content/uploads/2023/" filetype:zip']
  },
  {
    id: '23',
    query: 'inurl:"/vendor/" intext:"composer.json"',
    description: 'Exposed Composer vendor directories',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['composer', 'vendor', 'php'],
    examples: ['inurl:"/vendor/composer/installed.json"']
  },
  {
    id: '24',
    query: 'inurl:"/node_modules/" intext:"package.json"',
    description: 'Exposed Node.js node_modules directories',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['nodejs', 'node_modules', 'package.json'],
    examples: ['inurl:"/node_modules/express/package.json"']
  },
  {
    id: '25',
    query: 'inurl:"/sitemap.xml" filetype:xml',
    description: 'Sitemap XML files revealing website structure',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['sitemap', 'xml', 'recon'],
    examples: ['inurl:"/sitemap_index.xml"']
  },
  {
    id: '26',
    query: 'inurl:"/crossdomain.xml" filetype:xml',
    description: 'Cross-domain policy files',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['crossdomain', 'xml', 'flash'],
    examples: ['inurl:"/clientaccesspolicy.xml"']
  },
  {
    id: '27',
    query: 'inurl:"/swagger-ui.html" OR inurl:"/api-docs"',
    description: 'Swagger/OpenAPI documentation pages',
    category: 'api-endpoints',
    platform: ['generic'],
    assetType: 'documentation',
    noiseLevel: 'low',
    tags: ['swagger', 'openapi', 'api-docs'],
    examples: ['inurl:"/swagger/index.html"', 'inurl:"/v2/api-docs"']
  },
  {
    id: '28',
    query: 'inurl:"/admin/" intext:"version"',
    description: 'Admin panels revealing software versions',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['admin', 'version', 'software'],
    examples: ['inurl:"/admin/" intext:"WordPress version"']
  },
  {
    id: '29',
    query: 'inurl:"/wp-config.php.bak" OR inurl:"/wp-config.php.old"',
    description: 'Backup files of WordPress configuration',
    category: 'wordpress',
    platform: ['wordpress'],", path = 



    assetType: 'file',
    noiseLevel: 'low',
    tags: ['wordpress', 'config', 'backup'],
    examples: ['inurl:"/wp-config.php.orig"']
  },
  {
    id: '30',
    query: 'inurl:"/wp-content/debug.log"',
    description: 'WordPress debug log files',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['wordpress', 'debug', 'logs'],
    examples: ['inurl:"/wp-content/debug.log" intext:"error"']
  },
  {
    id: '31',
    query: 'inurl:"/wp-content/plugins/" intext:"readme.txt"',
    description: 'WordPress plugin readme files revealing versions',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'file',
    noiseLevel: 'medium',
    tags: ['wordpress', 'plugins', 'versions'],
    examples: ['inurl:"/wp-content/plugins/akismet/readme.txt"']
  },
  {
    id: '32',
    query: 'inurl:"/admin/" intext:"Powered by Joomla"
',
    description: 'Joomla admin panels',
    category: 'admin-panels',
    platform: ['joomla'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['joomla', 'admin', 'powered-by'],
    examples: ['inurl:"/administrator/" intitle:"Joomla! Administration"']
  },
  {
    id: '33',
    query: 'inurl:"/drupal/" intext:"Powered by Drupal"
',
    description: 'Drupal installations',
    category: 'cms',
    platform: ['drupal'],
    assetType: 'website',
    noiseLevel: 'medium',
    tags: ['drupal', 'cms', 'powered-by'],
    examples: ['inurl:"/user/login" intext:"Drupal"']
  },
  {
    id: '34',
    query: 'inurl:"/opencart/admin/" intitle:"OpenCart Administration"
',
    description: 'OpenCart admin panels',
    category: 'ecommerce',
    platform: ['opencart'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['opencart', 'admin', 'ecommerce'],
    examples: ['inurl:"/admin/index.php" intitle:"OpenCart"']
  },
  {
    id: '35',
    query: 'inurl:"/magento/admin/" intitle:"Magento Admin"
',
    description: 'Magento admin panels',
    category: 'ecommerce',
    platform: ['magento'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['magento', 'admin', 'ecommerce'],
    examples: ['inurl:"/admin/dashboard/" intitle:"Magento"']
  },
  {
    id: '36',
    query: 'inurl:"/cpanel/" intitle:"cPanel Login"
',
    description: 'cPanel login pages',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['cpanel', 'admin', 'login'],
    examples: ['inurl:"/cpanel" intitle:"cPanel"']
  },
  {
    id: '37',
    query: 'inurl:"/webmail/" intitle:"Webmail Login"
',
    description: 'Webmail login pages',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['webmail', 'login'],
    examples: ['inurl:"/roundcube/" intitle:"Roundcube Webmail"']
  },
  {
    id: '38',
    query: 'inurl:"/phpmyadmin/" intitle:"phpMyAdmin"
',
    description: 'phpMyAdmin login pages',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'low',
    tags: ['phpmyadmin', 'database', 'login'],
    examples: ['inurl:"/phpmyadmin/index.php"']
  },
  {
    id: '39',
    query: 'inurl:"/admin.php" intitle:"Admin Panel"
',
    description: 'Generic admin panel login pages',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'high',
    tags: ['admin', 'login'],
    examples: ['inurl:"/admin.php" intitle:"Administration"']
  },
  {
    id: '40',
    query: 'inurl:"/login.php" intitle:"Login"
',
    description: 'Generic login pages',
    category: 'authentication',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'high',
    tags: ['login', 'authentication'],
    examples: ['inurl:"/login.php" intitle:"User Login"']
  },
  {
    id: '41',
    query: 'inurl:"/register.php" intitle:"Register"
',
    description: 'Generic registration pages',
    category: 'authentication',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['register', 'authentication'],
    examples: ['inurl:"/signup.php" intitle:"Sign Up"']
  },
  {
    id: '42',
    query: 'inurl:"/forgot.php" intitle:"Forgot Password"
',
    description: 'Generic forgot password pages',
    category: 'authentication',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['forgot-password', 'authentication'],
    examples: ['inurl:"/reset.php" intitle:"Password Reset"']
  },
  {
    id: '43',
    query: 'inurl:"/search.php" intext:"search"
',
    description: 'Generic search pages',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'high',
    tags: ['search', 'recon'],
    examples: ['inurl:"/search.php?q="']
  },
  {
    id: '44',
    query: 'inurl:"/download.php" intext:"download"
',
    description: 'Generic download pages',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['download', 'recon'],
    examples: ['inurl:"/download.php?file="']
  },
  {
    id: '45',
    query: 'inurl:"/upload.php" intext:"upload"
',
    description: 'Generic upload pages',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['upload', 'recon'],
    examples: ['inurl:"/upload.php" intext:"Choose file"']
  },
  {
    id: '46',
    query: 'inurl:"/view.php" intext:"view"
',
    description: 'Generic view pages',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['view', 'recon'],
    examples: ['inurl:"/view.php?id="']
  },
  {
    id: '47',
    query: 'inurl:"/edit.php" intext:"edit"
',
    description: 'Generic edit pages',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['edit', 'recon'],
    examples: ['inurl:"/edit.php?id="']
  },
  {
    id: '48',
    query: 'inurl:"/delete.php" intext:"delete"
',
    description: 'Generic delete pages',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['delete', 'recon'],
    examples: ['inurl:"/delete.php?id="']
  },
  {
    id: '49',
    query: 'inurl:"/admin/" intext:"control panel"
',
    description: 'Admin control panels',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['admin', 'control-panel'],
    examples: ["inurl:\"/admin/\" intext:\"site administration\""]
  },
  {
    id: '50',
    query: 'inurl:"/user/" intext:"profile"
',
    description: 'User profile pages',
    category: 'reconnaissance',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'medium',
    tags: ['user', 'profile', 'recon'],
    examples: ['inurl:"/user/view.php?id="']
  },
  {
    id: '51',
    query: 'inurl:"/api/" intext:"swagger"
',
    description: 'API documentation with Swagger',
    category: 'api-endpoints',
    platform: ['generic'],
    assetType: 'documentation',
    noiseLevel: 'low',
    tags: ['api', 'swagger', 'documentation'],
    examples: ['inurl:"/api/v1/swagger-ui.html"']
  },
  {
    id: '52',
    query: 'inurl:"/docs/" intext:"api documentation"
',
    description: 'Generic API documentation pages',
    category: 'api-endpoints',
    platform: ['generic'],
    assetType: 'documentation',
    noiseLevel: 'low',
    tags: ['api', 'documentation'],
    examples: ['inurl:"/docs/api.html"']
  },
  {
    id: '53',
    query: 'inurl:"/test.php" intext:"phpinfo()"
',
    description: 'Test PHP info pages',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['phpinfo', 'test', 'config'],
    examples: ['inurl:"/info.php" intext:"PHP Version"']
  },
  {
    id: '54',
    query: 'inurl:"/admin/" intext:"dashboard"
',
    description: 'Admin dashboards',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['admin', 'dashboard'],
    examples: ['inurl:"/admin/home.php" intext:"Welcome to the Dashboard"']
  },
  {
    id: '55',
    query: 'inurl:"/login" intext:"username" intext:"password"
',
    description: 'Login pages with username and password fields',
    category: 'authentication',
    platform: ['generic'],
    assetType: 'page',
    noiseLevel: 'high',
    tags: ['login', 'username', 'password'],
    examples: ['inurl:"/signin" intext:"email" intext:"password"']
  },
  {
    id: '56',
    query: 'inurl:"/admin/" intext:"version"
',
    description: 'Admin panels revealing software versions',
    category: 'admin-panels',
    platform: ['generic'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['admin', 'version', 'software'],
    examples: ['inurl:"/admin/" intext:"WordPress version"']
  },
  {
    id: '57',
    query: 'inurl:"/backup/" filetype:sql
',
    description: 'SQL backup files',
    category: 'database-dumps',
    platform: ['generic'],
    assetType: 'database',
    noiseLevel: 'low',
    tags: ['sql', 'backup', 'database'],
    examples: ['inurl:"/db_backup/" filetype:sql']
  },
  {
    id: '58',
    query: 'inurl:"/dump.sql" OR inurl:"/database.sql"
',
    description: 'Common SQL dump file names',
    category: 'database-dumps',
    platform: ['generic'],
    assetType: 'database',
    noiseLevel: 'low',
    tags: ['sql', 'dump', 'database'],
    examples: ['inurl:"/backup/dump.sql"']
  },
  {
    id: '59',
    query: 'inurl:"/config.bak" OR inurl:"/config.old"
',
    description: 'Backup configuration files',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['config', 'backup'],
    examples: ['inurl:"/settings.bak"']
  },
  {
    id: '60',
    query: 'inurl:"/error_log" filetype:log
',
    description: 'Apache error logs',
    category: 'log-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'medium',
    tags: ['error', 'log', 'apache'],
    examples: ['inurl:"/access_log" filetype:log']
  },
  {
    id: '61',
    query: 'inurl:"/php.ini.bak" OR inurl:"/php.ini.old"
',
    description: 'Backup PHP configuration files',
    category: 'config-files',
    platform: ['generic'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['php', 'config', 'backup'],
    examples: ['inurl:"/php.ini.orig"']
  },
  {
    id: '62',
    query: 'inurl:"/admin/" intext:"Powered by OpenCart"
',
    description: 'OpenCart admin panels',
    category: 'ecommerce',
    platform: ['opencart'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['opencart', 'admin', 'powered-by'],
    examples: ['inurl:"/admin/index.php" intext:"OpenCart"']
  },
  {
    id: '63',
    query: 'inurl:"/admin/" intext:"Powered by Magento"
',
    description: 'Magento admin panels',
    category: 'ecommerce',
    platform: ['magento'],
    assetType: 'panel',
    noiseLevel: 'medium',
    tags: ['magento', 'admin', 'powered-by'],
    examples: ['inurl:"/admin/dashboard/" intext:"Magento"']
  },
  {
    id: '64',
    query: 'inurl:"/wp-content/plugins/" intext:"changelog.txt"
',
    description: 'WordPress plugin changelog files',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['wordpress', 'plugins', 'changelog'],
    examples: ['inurl:"/wp-content/plugins/woocommerce/changelog.txt"']
  },
  {
    id: '65',
    query: 'inurl:"/wp-content/themes/" intext:"style.css"
',
    description: 'WordPress theme style.css files revealing theme info',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'file',
    noiseLevel: 'medium',
    tags: ['wordpress', 'themes', 'style.css'],
    examples: ['inurl:"/wp-content/themes/twentytwentyfour/style.css"']
  },
  {
    id: '66',
    query: 'inurl:"/wp-json/wp/v2/users"
',
    description: 'WordPress REST API endpoint for users',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'endpoint',
    noiseLevel: 'low',
    tags: ['wordpress', 'rest-api', 'users'],
    examples: ['inurl:"/wp-json/wp/v2/posts"']
  },
  {
    id: '67',
    query: 'inurl:"/wp-json/oembed/1.0/embed"
',
    description: 'WordPress oEmbed endpoint',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'endpoint',
    noiseLevel: 'low',
    tags: ['wordpress', 'oembed'],
    examples: ['inurl:"/wp-json/oembed/1.0/proxy"']
  },
  {
    id: '68',
    query: 'inurl:"/wp-includes/" intext:"version"
',
    description: 'WordPress includes directory revealing version',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'file',
    noiseLevel: 'low',
    tags: ['wordpress', 'version'],
    examples: ['inurl:"/wp-includes/version.php"']
  },
  {
    id: '69',
    query: 'inurl:"/wp-admin/admin-ajax.php"
',
    description: 'WordPress admin-ajax.php endpoint',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'endpoint',
    noiseLevel: 'medium',
    tags: ['wordpress', 'ajax'],
    examples: ['inurl:"/wp-admin/admin-post.php"']
  },
  {
    id: '70',
    query: 'inurl:"/xmlrpc.php"
',
    description: 'WordPress XML-RPC endpoint',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'endpoint',
    noiseLevel: 'low',
    tags: ['wordpress', 'xmlrpc'],
    examples: ['inurl:"/xmlrpc.php" intext:"XML-RPC server accepts POST requests only."']
  },
  {
    id: '71',
    query: 'inurl:"/wp-login.php" intext:"Error: Invalid username."
',
    description: 'WordPress login page with error messages',
    category: 'wordpress',
    platform: ['wordpress'],
    assetType: 'page',
    noiseLevel: 'low',
    tags: ['wordpress', 'login', 'error'],
    examples: ['inurl:"/wp-login.php" intext:"Error: The password you entered for the username is incorrect."']
  },
  {
    id: '72',
    query: 'inurl:"/wp-content/uploads/" intext:"private"
',
    description: 'WordPress uploaded files with 


sensitive content
    category: ["wordpress", "sensitive-data"],
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["wordpress", "uploads", "private"],
    examples: ["inurl:\"/wp-content/uploads/\" intext:\"confidential\""]
  },
  {
    id: "73",
    query: "inurl:\"/admin/\" intext:\"Powered by Joomla\"",
    description: "Joomla admin panels",
    category: "admin-panels",
    platform: ["joomla"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["joomla", "admin", "powered-by"],
    examples: ["inurl:\"/administrator/\" intitle:\"Joomla! Administration\""]
  },
  {
    id: "74",
    query: "inurl:\"/drupal/\" intext:\"Powered by Drupal\"",
    description: "Drupal installations",
    category: "cms",
    platform: ["drupal"],
    assetType: "website",
    noiseLevel: "medium",
    tags: ["drupal", "cms", "powered-by"],
    examples: ["inurl:\"/user/login\" intext:\"Drupal\""]
  },
  {
    id: "75",
    query: "inurl:\"/opencart/admin/\" intitle:\"OpenCart Administration\"",
    description: "OpenCart admin panels",
    category: "ecommerce",
    platform: ["opencart"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["opencart", "admin", "ecommerce"],
    examples: ["inurl:\"/admin/index.php\" intitle:\"OpenCart\""]
  },
  {
    id: "76",
    query: "inurl:\"/magento/admin/\" intitle:\"Magento Admin\"",
    description: "Magento admin panels",
    category: "ecommerce",
    platform: ["magento"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["magento", "admin", "ecommerce"],
    examples: ["inurl:\"/admin/dashboard/\" intitle:\"Magento\""]
  },
  {
    id: "77",
    query: "inurl:\"/cpanel/\" intitle:\"cPanel Login\"",
    description: "cPanel login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["cpanel", "admin", "login"],
    examples: ["inurl:\"/cpanel\" intitle:\"cPanel\""]
  },
  {
    id: "78",
    query: "inurl:\"/webmail/\" intitle:\"Webmail Login\"",
    description: "Webmail login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["webmail", "login"],
    examples: ["inurl:\"/roundcube/\" intitle:\"Roundcube Webmail\""]
  },
  {
    id: "79",
    query: "inurl:\"/phpmyadmin/\" intitle:\"phpMyAdmin\"",
    description: "phpMyAdmin login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "low",
    tags: ["phpmyadmin", "database", "login"],
    examples: ["inurl:\"/phpmyadmin/index.php\""]
  },
  {
    id: "80",
    query: "inurl:\"/admin.php\" intitle:\"Admin Panel\"",
    description: "Generic admin panel login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "high",
    tags: ["admin", "login"],
    examples: ["inurl:\"/admin.php\" intitle:\"Administration\""]
  },
  {
    id: "81",
    query: "inurl:\"/login.php\" intitle:\"Login\"",
    description: "Generic login pages",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "high",
    tags: ["login", "authentication"],
    examples: ["inurl:\"/login.php\" intitle:\"User Login\""]
  },
  {
    id: "82",
    query: "inurl:\"/register.php\" intitle:\"Register\"",
    description: "Generic registration pages",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["register", "authentication"],
    examples: ["inurl:\"/signup.php\" intitle:\"Sign Up\""]
  },
  {
    id: "83",
    query: "inurl:\"/forgot.php\" intitle:\"Forgot Password\"",
    description: "Generic forgot password pages",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["forgot-password", "authentication"],
    examples: ["inurl:\"/reset.php\" intitle:\"Password Reset\""]
  },
  {
    id: "84",
    query: "inurl:\"/search.php\" intext:\"search\"",
    description: "Generic search pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "high",
    tags: ["search", "recon"],
    examples: ["inurl:\"/search.php?q=\""]
  },
  {
    id: "85",
    query: "inurl:\"/download.php\" intext:\"download\"",
    description: "Generic download pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["download", "recon"],
    examples: ["inurl:\"/download.php?file=\""]
  },
  {
    id: "86",
    query: "inurl:\"/upload.php\" intext:\"upload\"",
    description: "Generic upload pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["upload", "recon"],
    examples: ["inurl:\"/upload.php\" intext:\"Choose file\""]
  },
  {
    id: "87",
    query: "inurl:\"/view.php\" intext:\"view\"",
    description: "Generic view pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["view", "recon"],
    examples: ["inurl:\"/view.php?id=\""]
  },
  {
    id: "88",
    query: "inurl:\"/edit.php\" intext:\"edit\"",
    description: "Generic edit pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["edit", "recon"],
    examples: ["inurl:\"/edit.php?id=\""]
  },
  {
    id: "89",
    query: "inurl:\"/delete.php\" intext:\"delete\"",
    description: "Generic delete pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["delete", "recon"],
    examples: ["inurl:\"/delete.php?id=\""]
  },
  {
    id: "90",
    query: "inurl:\"/admin/\" intext:\"control panel\"",
    description: "Admin control panels",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["admin", "control-panel"],
    examples: ["inurl:\"/admin/\" intext:\"site administration\""]
  },
  {
    id: "91",
    query: "inurl:\"/user/\" intext:\"profile\"",
    description: "User profile pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["user", "profile", "recon"],
    examples: ["inurl:\"/user/view.php?id=\""]
  },
  {
    id: "92",
    query: "inurl:\"/api/\" intext:\"swagger\"",
    description: "API documentation with Swagger",
    category: "api-endpoints",
    platform: ["generic"],
    assetType: "documentation",
    noiseLevel: "low",
    tags: ["api", "swagger", "documentation"],
    examples: ["inurl:\"/api/v1/swagger-ui.html\""]
  },
  {
    id: "93",
    query: "inurl:\"/docs/\" intext:\"api documentation\"",
    description: "Generic API documentation pages",
    category: "api-endpoints",
    platform: ["generic"],
    assetType: "documentation",
    noiseLevel: "low",
    tags: ["api", "documentation"],
    examples: ["inurl:\"/docs/api.html\""]
  },
  {
    id: "94",
    query: "inurl:\"/test.php\" intext:\"phpinfo()\"",
    description: "Test PHP info pages",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["phpinfo", "test", "config"],
    examples: ["inurl:\"/info.php\" intext:\"PHP Version\""]
  },
  {
    id: "95",
    query: "inurl:\"/admin/\" intext:\"dashboard\"",
    description: "Admin dashboards",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["admin", "dashboard"],
    examples: ["inurl:\"/admin/home.php\" intext:\"Welcome to the Dashboard\""]
  },
  {
    id: "96",
    query: "inurl:\"/login\" intext:\"username\" intext:\"password\"",
    description: "Login pages with username and password fields",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "high",
    tags: ["login", "username", "password"],
    examples: ["inurl:\"/signin\" intext:\"email\" intext:\"password\""]
  },
  {
    id: "97",
    query: "inurl:\"/admin/\" intext:\"version\"",
    description: "Admin panels revealing software versions",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["admin", "version", "software"],
    examples: ["inurl:\"/admin/\" intext:\"WordPress version\""]
  },
  {
    id: "98",
    query: "inurl:\"/backup/\" filetype:sql",
    description: "SQL backup files",
    category: "database-dumps",
    platform: ["generic"],
    assetType: "database",
    noiseLevel: "low",
    tags: ["sql", "backup", "database"],
    examples: ["inurl:\"/db_backup/\" filetype:sql\""]
  },
  {
    id: "99",
    query: "inurl:\"/dump.sql\" OR inurl:\"/database.sql\"",
    description: "Common SQL dump file names",
    category: "database-dumps",
    platform: ["generic"],
    assetType: "database",
    noiseLevel: "low",
    tags: ["sql", "dump", "database"],
    examples: ["inurl:\"/backup/dump.sql\""]
  },
  {
    id: "100",
    query: "inurl:\"/config.bak\" OR inurl:\"/config.old\"",
    description: "Backup configuration files",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["config", "backup"],
    examples: ["inurl:\"/settings.bak\""]
  },
  {
    id: "101",
    query: "inurl:\"/error_log\" filetype:log",
    description: "Apache error logs",
    category: "log-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["error", "log", "apache"],
    examples: ["inurl:\"/access_log\" filetype:log\""]
  },
  {
    id: "102",
    query: "inurl:\"/php.ini.bak\" OR inurl:\"/php.ini.old\"",
    description: "Backup PHP configuration files",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["php", "config", "backup"],
    examples: ["inurl:\"/php.ini.orig\""]
  },
  {
    id: "103",
    query: "inurl:\"/admin/\" intext:\"Powered by OpenCart\"",
    description: "OpenCart admin panels",
    category: "ecommerce",
    platform: ["opencart"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["opencart", "admin", "powered-by"],
    examples: ["inurl:\"/admin/index.php\" intext:\"OpenCart\""]
  },
  {
    id: "104",
    query: "inurl:\"/admin/\" intext:\"Powered by Magento\"",
    description: "Magento admin panels",
    category: "ecommerce",
    platform: ["magento"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["magento", "admin", "powered-by"],
    examples: ["inurl:\"/admin/dashboard/\" intext:\"Magento\""]
  },
  {
    id: "105",
    query: "inurl:\"/wp-content/plugins/\" intext:\"changelog.txt\"",
    description: "WordPress plugin changelog files",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["wordpress", "plugins", "changelog"],
    examples: ["inurl:\"/wp-content/plugins/woocommerce/changelog.txt\""]
  },
  {
    id: "106",
    query: "inurl:\"/wp-content/themes/\" intext:\"style.css\"",
    description: "WordPress theme style.css files revealing theme info",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["wordpress", "themes", "style.css"],
    examples: ["inurl:\"/wp-content/themes/twentytwentyfour/style.css\""]
  },
  {
    id: "107",
    query: "inurl:\"/wp-json/wp/v2/users\"",
    description: "WordPress REST API endpoint for users",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "low",
    tags: ["wordpress", "rest-api", "users"],
    examples: ["inurl:\"/wp-json/wp/v2/posts\""]
  },
  {
    id: "108",
    query: "inurl:\"/wp-json/oembed/1.0/embed\"",
    description: "WordPress oEmbed endpoint",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "low",
    tags: ["wordpress", "oembed"],
    examples: ["inurl:\"/wp-json/oembed/1.0/proxy\""]
  },
  {
    id: "109",
    query: "inurl:\"/wp-includes/\" intext:\"version\"",
    description: "WordPress includes directory revealing version",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["wordpress", "version"],
    examples: ["inurl:\"/wp-includes/version.php\""]
  },
  {
    id: "110",
    query: "inurl:\"/wp-admin/admin-ajax.php\"",
    description: "WordPress admin-ajax.php endpoint",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "medium",
    tags: ["wordpress", "ajax"],
    examples: ["inurl:\"/wp-admin/admin-post.php\""]
  },
  {
    id: "111",
    query: "inurl:\"/xmlrpc.php\"",
    description: "WordPress XML-RPC endpoint",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "low",
    tags: ["wordpress", "xmlrpc"],
    examples: ["inurl:\"/xmlrpc.php\" intext:\"XML-RPC server accepts POST requests only.\""]
  },
  {
    id: "112",
    query: "inurl:\"/wp-login.php\" intext:\"Error: Invalid username.\"",
    description: "WordPress login page with error messages",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "page",
    noiseLevel: "low",
    tags: ["wordpress", "login", "error"],
    examples: ["inurl:\"/wp-login.php\" intext:\"Error: The password you entered for the username is incorrect.\""]
  },
  {
    id: "113",
    query: "inurl:\"/wp-content/uploads/\" intext:\"private\"",
    description: "WordPress uploaded files with sensitive content",
    category: ["wordpress", "sensitive-data"],
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["wordpress", "uploads", "private"],
    examples: ["inurl:\"/wp-content/uploads/\" intext:\"confidential\""]
  },
  {
    id: "114",
    query: "inurl:\


/.env\" filetype:env",
    description: "Exposed .env files",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["env", "config", "credentials"],
    examples: ["inurl:\"/.env.example\" filetype:env"]
  },
  {
    id: "115",
    query: "inurl:\"/.git/config\"",
    description: "Exposed Git configuration files",
    category: "git-repositories",
    platform: ["generic"],
    assetType: "repository",
    noiseLevel: "low",
    tags: ["git", "config", "repository"],
    examples: ["inurl:\"/.git/HEAD\""]
  },
  {
    id: "116",
    query: "inurl:\"/.svn/wc.db\"",
    description: "Exposed SVN working copy databases",
    category: "version-control",
    platform: ["generic"],
    assetType: "database",
    noiseLevel: "low",
    tags: ["svn", "database", "version-control"],
    examples: ["inurl:\"/.svn/entries\""]
  },
  {
    id: "117",
    query: "inurl:\"/.DS_Store\" filetype:ds_store",
    description: "Exposed macOS .DS_Store files",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["ds_store", "macos", "recon"],
    examples: ["inurl:\"/.DS_Store\" intext:\"Icon\""]
  },
  {
    id: "118",
    query: "inurl:\"/WEB-INF/web.xml\"",
    description: "Exposed Java web application deployment descriptors",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["java", "web.xml", "config"],
    examples: ["inurl:\"/WEB-INF/applicationContext.xml\""]
  },
  {
    id: "119",
    query: "inurl:\"/server-status\" intitle:\"Apache Status\"",
    description: "Exposed Apache server status pages",
    category: "server-info",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "low",
    tags: ["apache", "server-status", "info"],
    examples: ["inurl:\"/server-info\" intitle:\"Apache Server Information\""]
  },
  {
    id: "120",
    query: "inurl:\"/nginx_status\" intitle:\"Nginx Status\"",
    description: "Exposed Nginx server status pages",
    category: "server-info",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "low",
    tags: ["nginx", "server-status", "info"],
    examples: ["inurl:\"/stub_status\" intitle:\"Nginx stub_status\""]
  },
  {
    id: "121",
    query: "inurl:\"/jmx-console/\" intitle:\"JBoss JMX Management Console\"",
    description: "Exposed JBoss JMX Management Consoles",
    category: "admin-panels",
    platform: ["jboss"],
    assetType: "panel",
    noiseLevel: "low",
    tags: ["jboss", "jmx-console", "admin"],
    examples: ["inurl:\"/web-console/\" intitle:\"JBoss Web Console\""]
  },
  {
    id: "122",
    query: "inurl:\"/axis2/axis2-admin/\" intitle:\"Apache Axis2 Administration Console\"",
    description: "Exposed Apache Axis2 Administration Consoles",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "low",
    tags: ["axis2", "admin-console", "apache"],
    examples: ["inurl:\"/axis2-admin/login\""]
  },
  {
    id: "123",
    query: "inurl:\"/manager/html\" intitle:\"Tomcat Web Application Manager\"",
    description: "Exposed Tomcat Web Application Manager interfaces",
    category: "admin-panels",
    platform: ["tomcat"],
    assetType: "panel",
    noiseLevel: "low",
    tags: ["tomcat", "manager", "admin"],
    examples: ["inurl:\"/host-manager/html\" intitle:\"Tomcat Virtual Host Manager\""]
  },
  {
    id: "124",
    query: "inurl:\"/solr/\" intitle:\"Solr Admin\"",
    description: "Exposed Solr admin interfaces",
    category: "admin-panels",
    platform: ["solr"],
    assetType: "panel",
    noiseLevel: "low",
    tags: ["solr", "admin", "search"],
    examples: ["inurl:\"/solr/#/\""]
  },
  {
    id: "125",
    query: "inurl:\"/_plugin/head/\" intitle:\"Elasticsearch Head\"",
    description: "Exposed Elasticsearch Head plugin interfaces",
    category: "admin-panels",
    platform: ["elasticsearch"],
    assetType: "panel",
    noiseLevel: "low",
    tags: ["elasticsearch", "head", "admin"],
    examples: ["inurl:\"/_plugin/kopf/\" intitle:\"Kopf - Elasticsearch Admin\""]
  },
  {
    id: "126",
    query: "inurl:\"/jenkins/\" intitle:\"Jenkins\"",
    description: "Exposed Jenkins CI/CD servers",
    category: "devops",
    platform: ["jenkins"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["jenkins", "ci-cd", "devops"],
    examples: ["inurl:\"/jenkins/login\""]
  },
  {
    id: "127",
    query: "inurl:\"/gitlab/\" intitle:\"GitLab\"",
    description: "Exposed GitLab servers",
    category: "devops",
    platform: ["gitlab"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["gitlab", "git", "devops"],
    examples: ["inurl:\"/users/sign_in\" intitle:\"GitLab\""]
  },
  {
    id: "128",
    query: "inurl:\"/jira/\" intitle:\"Jira\"",
    description: "Exposed Jira instances",
    category: "project-management",
    platform: ["jira"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["jira", "project-management", "atlassian"],
    examples: ["inurl:\"/secure/Dashboard.jspa\" intitle:\"Jira\""]
  },
  {
    id: "129",
    query: "inurl:\"/confluence/\" intitle:\"Confluence\"",
    description: "Exposed Confluence instances",
    category: "documentation",
    platform: ["confluence"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["confluence", "documentation", "atlassian"],
    examples: ["inurl:\"/display/\" intitle:\"Confluence\""]
  },
  {
    id: "130",
    query: "inurl:\"/nexus/\" intitle:\"Nexus Repository Manager\"",
    description: "Exposed Nexus Repository Manager instances",
    category: "devops",
    platform: ["nexus"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["nexus", "repository", "devops"],
    examples: ["inurl:\"/#browse/welcome\" intitle:\"Nexus Repository Manager\""]
  },
  {
    id: "131",
    query: "inurl:\"/artifactory/\" intitle:\"Artifactory\"",
    description: "Exposed Artifactory instances",
    category: "devops",
    platform: ["artifactory"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["artifactory", "repository", "devops"],
    examples: ["inurl:\"/ui/login\" intitle:\"Artifactory\""]
  },
  {
    id: "132",
    query: "inurl:\"/grafana/\" intitle:\"Grafana\"",
    description: "Exposed Grafana instances",
    category: "monitoring",
    platform: ["grafana"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["grafana", "monitoring", "dashboard"],
    examples: ["inurl:\"/login\" intitle:\"Grafana\""]
  },
  {
    id: "133",
    query: "inurl:\"/kibana/\" intitle:\"Kibana\"",
    description: "Exposed Kibana instances",
    category: "monitoring",
    platform: ["kibana"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["kibana", "monitoring", "elasticsearch"],
    examples: ["inurl:\"/app/kibana\" intitle:\"Kibana\""]
  },
  {
    id: "134",
    query: "inurl:\"/prometheus/\" intitle:\"Prometheus\"",
    description: "Exposed Prometheus instances",
    category: "monitoring",
    platform: ["prometheus"],
    assetType: "server",
    noiseLevel: "low",
    tags: ["prometheus", "monitoring"],
    examples: ["inurl:\"/graph\" intitle:\"Prometheus Time Series Collection and Processing Server\""]
  },
  {
    id: "135",
    query: "inurl:\"/phpinfo.php\" intext:\"PHP Version\"",
    description: "PHP info pages exposing server configuration",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["phpinfo", "config", "server"],
    examples: ["inurl:\"/info.php\" intitle:\"phpinfo()\""]
  },
  {
    id: "136",
    query: "inurl:\"/robots.txt\" intext:\"Disallow: /admin\"",
    description: "Robots.txt files disallowing access to admin directories",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["robots.txt", "disallow", "admin"],
    examples: ["inurl:\"/robots.txt\" intext:\"Disallow: /private\""]
  },
  {
    id: "137",
    query: "inurl:\"/config.php.bak\" OR inurl:\"/settings.php.bak\"",
    description: "Backup configuration files with database connection details",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["config", "settings", "backup", "database"],
    examples: ["inurl:\"/config.php.old\"", "inurl:\"/settings.php.old\""]
  },
  {
    id: "138",
    query: "inurl:\"/wp-config.php.bak\" OR inurl:\"/wp-config.php.old\"",
    description: "Backup files of WordPress configuration",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["wordpress", "config", "backup"],
    examples: ["inurl:\"/wp-config.php.orig\""]
  },
  {
    id: "139",
    query: "inurl:\"/wp-content/debug.log\"",
    description: "WordPress debug log files",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["wordpress", "debug", "logs"],
    examples: ["inurl:\"/wp-content/debug.log\" intext:\"error\""]
  },
  {
    id: "140",
    query: "inurl:\"/wp-content/plugins/\" intext:\"readme.txt\"",
    description: "WordPress plugin readme files revealing versions",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["wordpress", "plugins", "versions"],
    examples: ["inurl:\"/wp-content/plugins/akismet/readme.txt\""]
  },
  {
    id: "141",
    query: "inurl:\"/admin/\" intext:\"Powered by Joomla\"",
    description: "Joomla admin panels",
    category: "admin-panels",
    platform: ["joomla"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["joomla", "admin", "powered-by"],
    examples: ["inurl:\"/administrator/\" intitle:\"Joomla! Administration\""]
  },
  {
    id: "142",
    query: "inurl:\"/drupal/\" intext:\"Powered by Drupal\"",
    description: "Drupal installations",
    category: "cms",
    platform: ["drupal"],
    assetType: "website",
    noiseLevel: "medium",
    tags: ["drupal", "cms", "powered-by"],
    examples: ["inurl:\"/user/login\" intext:\"Drupal\""]
  },
  {
    id: "143",
    query: "inurl:\"/opencart/admin/\" intitle:\"OpenCart Administration\"",
    description: "OpenCart admin panels",
    category: "ecommerce",
    platform: ["opencart"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["opencart", "admin", "ecommerce"],
    examples: ["inurl:\"/admin/index.php\" intitle:\"OpenCart\""]
  },
  {
    id: "144",
    query: "inurl:\"/magento/admin/\" intitle:\"Magento Admin\"",
    description: "Magento admin panels",
    category: "ecommerce",
    platform: ["magento"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["magento", "admin", "ecommerce"],
    examples: ["inurl:\"/admin/dashboard/\" intitle:\"Magento\""]
  },
  {
    id: "145",
    query: "inurl:\"/cpanel/\" intitle:\"cPanel Login\"",
    description: "cPanel login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["cpanel", "admin", "login"],
    examples: ["inurl:\"/cpanel\" intitle:\"cPanel\""]
  },
  {
    id: "146",
    query: "inurl:\"/webmail/\" intitle:\"Webmail Login\"",
    description: "Webmail login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["webmail", "login"],
    examples: ["inurl:\"/roundcube/\" intitle:\"Roundcube Webmail\""]
  },
  {
    id: "147",
    query: "inurl:\"/phpmyadmin/\" intitle:\"phpMyAdmin\"",
    description: "phpMyAdmin login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "low",
    tags: ["phpmyadmin", "database", "login"],
    examples: ["inurl:\"/phpmyadmin/index.php\""]
  },
  {
    id: "148",
    query: "inurl:\"/admin.php\" intitle:\"Admin Panel\"",
    description: "Generic admin panel login pages",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "high",
    tags: ["admin", "login"],
    examples: ["inurl:\"/admin.php\" intitle:\"Administration\""]
  },
  {
    id: "149",
    query: "inurl:\"/login.php\" intitle:\"Login\"",
    description: "Generic login pages",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "high",
    tags: ["login", "authentication"],
    examples: ["inurl:\"/login.php\" intitle:\"User Login\""]
  },
  {
    id: "150",
    query: "inurl:\"/register.php\" intitle:\"Register\"",
    description: "Generic registration pages",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["register", "authentication"],
    examples: ["inurl:\"/signup.php\" intitle:\"Sign Up\""]
  },
  {
    id: "151",
    query: "inurl:\"/forgot.php\" intitle:\"Forgot Password\"",
    description: "Generic forgot password pages",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["forgot-password", "authentication"],
    examples: ["inurl:\"/reset.php\" intitle:\"Password Reset\""]
  },
  {
    id: "152",
    query: "inurl:\"/search.php\" intext:\"search\"",
    description: "Generic search pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "high",
    tags: ["search", "recon"],
    examples: ["inurl:\"/search.php?q=\""]
  },
  {
    id: "153",
    query: "inurl:\"/download.php\" intext:\"download\"",
    description: "Generic download pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["download", "recon"],
    examples: ["inurl:\"/download.php?file=\""]
  },
  {
    id: "154",
    query: "inurl:\"/upload.php\" intext:\"upload\"",
    description: "Generic upload pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["upload", "recon"],
    examples: ["inurl:\"/upload.php\" intext:\"Choose file\""]
  },
  {
    id: "155",
    query: "inurl:\"/view.php\" intext:\"view\"",
    description: "Generic view pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["view", "recon"],
    examples: ["inurl:\"/view.php?id=\""]
  },
  {
    id: "156",
    query: "inurl:\"/edit.php\" intext:\"edit\"",
    description: "Generic edit pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["edit", "recon"],
    examples: ["inurl:\"/edit.php?id=\""]
  },
  {
    id: "157",
    query: "inurl:\"/delete.php\" intext:\"delete\"",
    description: "Generic delete pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["delete", "recon"],
    examples: ["inurl:\"/delete.php?id=\""]
  },
  {
    id: "158",
    query: "inurl:\"/admin/\" intext:\"control panel\"",
    description: "Admin control panels",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["admin", "control-panel"],
    examples: ["inurl:\"/admin/\" intext:\"site administration\""]
  },
  {
    id: "159",
    query: "inurl:\"/user/\" intext:\"profile\"",
    description: "User profile pages",
    category: "reconnaissance",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "medium",
    tags: ["user", "profile", "recon"],
    examples: ["inurl:\"/user/view.php?id=\""]
  },
  {
    id: "160",
    query: "inurl:\"/api/\" intext:\"swagger\"",
    description: "API documentation with Swagger",
    category: "api-endpoints",
    platform: ["generic"],
    assetType: "documentation",
    noiseLevel: "low",
    tags: ["api", "swagger", "documentation"],
    examples: ["inurl:\"/api/v1/swagger-ui.html\""]
  },
  {
    id: "161",
    query: "inurl:\"/docs/\" intext:\"api documentation\"",
    description: "Generic API documentation pages",
    category: "api-endpoints",
    platform: ["generic"],
    assetType: "documentation",
    noiseLevel: "low",
    tags: ["api", "documentation"],
    examples: ["inurl:\"/docs/api.html\""]
  },
  {
    id: "162",
    query: "inurl:\"/test.php\" intext:\"phpinfo()\"",
    description: "Test PHP info pages",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["phpinfo", "test", "config"],
    examples: ["inurl:\"/info.php\" intext:\"PHP Version\""]
  },
  {
    id: "163",
    query: "inurl:\"/admin/\" intext:\"dashboard\"",
    description: "Admin dashboards",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["admin", "dashboard"],
    examples: ["inurl:\"/admin/home.php\" intext:\"Welcome to the Dashboard\""]
  },
  {
    id: "164",
    query: "inurl:\"/login\" intext:\"username\" intext:\"password\"",
    description: "Login pages with username and password fields",
    category: "authentication",
    platform: ["generic"],
    assetType: "page",
    noiseLevel: "high",
    tags: ["login", "username", "password"],
    examples: ["inurl:\"/signin\" intext:\"email\" intext:\"password\""]
  },
  {
    id: "165",
    query: "inurl:\"/admin/\" intext:\"version\"",
    description: "Admin panels revealing software versions",
    category: "admin-panels",
    platform: ["generic"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["admin", "version", "software"],
    examples: ["inurl:\"/admin/\" intext:\"WordPress version\""]
  },
  {
    id: "166",
    query: "inurl:\"/backup/\" filetype:sql",
    description: "SQL backup files",
    category: "database-dumps",
    platform: ["generic"],
    assetType: "database",
    noiseLevel: "low",
    tags: ["sql", "backup", "database"],
    examples: ["inurl:\"/db_backup/\" filetype:sql\""]
  },
  {
    id: "167",
    query: "inurl:\"/dump.sql\" OR inurl:\"/database.sql\"",
    description: "Common SQL dump file names",
    category: "database-dumps",
    platform: ["generic"],
    assetType: "database",
    noiseLevel: "low",
    tags: ["sql", "dump", "database"],
    examples: ["inurl:\"/backup/dump.sql\""]
  },
  {
    id: "168",
    query: "inurl:\"/config.bak\" OR inurl:\"/config.old\"",
    description: "Backup configuration files",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["config", "backup"],
    examples: ["inurl:\"/settings.bak\""]
  },
  {
    id: "169",
    query: "inurl:\"/error_log\" filetype:log",
    description: "Apache error logs",
    category: "log-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["error", "log", "apache"],
    examples: ["inurl:\"/access_log\" filetype:log\""]
  },
  {
    id: "170",
    query: "inurl:\"/php.ini.bak\" OR inurl:\"/php.ini.old\"",
    description: "Backup PHP configuration files",
    category: "config-files",
    platform: ["generic"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["php", "config", "backup"],
    examples: ["inurl:\"/php.ini.orig\""]
  },
  {
    id: "171",
    query: "inurl:\"/admin/\" intext:\"Powered by OpenCart\"",
    description: "OpenCart admin panels",
    category: "ecommerce",
    platform: ["opencart"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["opencart", "admin", "powered-by"],
    examples: ["inurl:\"/admin/index.php\" intext:\"OpenCart\""]
  },
  {
    id: "172",
    query: "inurl:\"/admin/\" intext:\"Powered by Magento\"",
    description: "Magento admin panels",
    category: "ecommerce",
    platform: ["magento"],
    assetType: "panel",
    noiseLevel: "medium",
    tags: ["magento", "admin", "powered-by"],
    examples: ["inurl:\"/admin/dashboard/\" intext:\"Magento\""]
  },
  {
    id: "173",
    query: "inurl:\"/wp-content/plugins/\" intext:\"changelog.txt\"",
    description: "WordPress plugin changelog files",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["wordpress", "plugins", "changelog"],
    examples: ["inurl:\"/wp-content/plugins/woocommerce/changelog.txt\""]
  },
  {
    id: "174",
    query: "inurl:\"/wp-content/themes/\" intext:\"style.css\"",
    description: "WordPress theme style.css files revealing theme info",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["wordpress", "themes", "style.css"],
    examples: ["inurl:\"/wp-content/themes/twentytwentyfour/style.css\""]
  },
  {
    id: "175",
    query: "inurl:\"/wp-json/wp/v2/users\"",
    description: "WordPress REST API endpoint for users",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "low",
    tags: ["wordpress", "rest-api", "users"],
    examples: ["inurl:\"/wp-json/wp/v2/posts\""]
  },
  {
    id: "176",
    query: "inurl:\"/wp-json/oembed/1.0/embed\"",
    description: "WordPress oEmbed endpoint",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "low",
    tags: ["wordpress", "oembed"],
    examples: ["inurl:\"/wp-json/oembed/1.0/proxy\""]
  },
  {
    id: "177",
    query: "inurl:\"/wp-includes/\" intext:\"version\"",
    description: "WordPress includes directory revealing version",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "low",
    tags: ["wordpress", "version"],
    examples: ["inurl:\"/wp-includes/version.php\""]
  },
  {
    id: "178",
    query: "inurl:\"/wp-admin/admin-ajax.php\"",
    description: "WordPress admin-ajax.php endpoint",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "medium",
    tags: ["wordpress", "ajax"],
    examples: ["inurl:\"/wp-admin/admin-post.php\""]
  },
  {
    id: "179",
    query: "inurl:\"/xmlrpc.php\"",
    description: "WordPress XML-RPC endpoint",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "endpoint",
    noiseLevel: "low",
    tags: ["wordpress", "xmlrpc"],
    examples: ["inurl:\"/xmlrpc.php\" intext:\"XML-RPC server accepts POST requests only.\""]
  },
  {
    id: "180",
    query: "inurl:\"/wp-login.php\" intext:\"Error: Invalid username.\"",
    description: "WordPress login page with error messages",
    category: "wordpress",
    platform: ["wordpress"],
    assetType: "page",
    noiseLevel: "low",
    tags: ["wordpress", "login", "error"],
    examples: ["inurl:\"/wp-login.php\" intext:\"Error: The password you entered for the username is incorrect.\""]
  },
  {
    id: "181",
    query: "inurl:\"/wp-content/uploads/\" intext:\"private\"",
    description: "WordPress uploaded files with sensitive content",
    category: ["wordpress", "sensitive-data"],
    platform: ["wordpress"],
    assetType: "file",
    noiseLevel: "medium",
    tags: ["wordpress", "uploads", "private"],
    examples: ["inurl:\"/wp-content/uploads/\" intext:\"confidential\""]
  }
];

export const technologyPatterns = {
  "Jenkins": /jenkins|build\.jenkins/i,
  "Jira": /jira|atlassian/i,
  "AWS S3": /s3\.amazonaws\.com/i,
  "Firebase": /firebase|firebaseapp/i,
  "WordPress": /wp-admin|wp-content|wordpress/i,
  "Docker": /docker|dockerfile/i,
  "MongoDB": /mongodb|mongo/i,
  "Redis": /redis/i,
  "MySQL": /mysql|phpmyadmin/i,
  "PostgreSQL": /postgresql|postgres/i,
  "Apache": /apache/i,
  "Nginx": /nginx/i,
  "PHP": /\.php|php/i,
  "Node.js": /node\.js|nodejs/i,
  "Django": /django/i,
  "Rails": /rails|ruby/i
};
