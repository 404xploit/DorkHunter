import type { GoogleDork } from '../types';
import adminPanelsDorks from './dorks/admin-panels.json';
import apiEndpointsDorks from './dorks/api-endpoints.json';
import authenticationDorks from './dorks/authentication.json';
import backupFilesDorks from './dorks/backup-files.json';
import cloudStorageDorks from './dorks/cloud-storage.json';
import cmsDorks from './dorks/cms.json';
import configFilesDorks from './dorks/config-files.json';
import databaseDumpsDorks from './dorks/database-dumps.json';
import developmentDorks from './dorks/development.json';
import developmentEnvironmentsDorks from './dorks/development-environments.json';
import devopsDorks from './dorks/devops.json';
import documentationDorks from './dorks/documentation.json';
import ecommerceDorks from './dorks/ecommerce.json';
import errorPagesDorks from './dorks/error-pages.json';
import gitRepositoriesDorks from './dorks/git-repositories.json';
import logFilesDorks from './dorks/log-files.json';
import monitoringDorks from './dorks/monitoring.json';
import projectManagementDorks from './dorks/project-management.json';
import reconnaissanceDorks from './dorks/reconnaissance.json';
import serverInfoDorks from './dorks/server-info.json';
import versionControlDorks from './dorks/version-control.json';
import wordpressDorks from './dorks/wordpress.json';

const catalog = [
  ...adminPanelsDorks,
  ...apiEndpointsDorks,
  ...authenticationDorks,
  ...backupFilesDorks,
  ...cloudStorageDorks,
  ...cmsDorks,
  ...configFilesDorks,
  ...databaseDumpsDorks,
  ...developmentDorks,
  ...developmentEnvironmentsDorks,
  ...devopsDorks,
  ...documentationDorks,
  ...ecommerceDorks,
  ...errorPagesDorks,
  ...gitRepositoriesDorks,
  ...logFilesDorks,
  ...monitoringDorks,
  ...projectManagementDorks,
  ...reconnaissanceDorks,
  ...serverInfoDorks,
  ...versionControlDorks,
  ...wordpressDorks,
] as GoogleDork[];

export const googleDorks = catalog.sort((a, b) => Number(a.id) - Number(b.id));

export const technologyPatterns: Record<string, RegExp> = {
  Jenkins: /jenkins|build\.jenkins/i,
  Jira: /jira|atlassian/i,
  'AWS S3': /s3\.amazonaws\.com/i,
  Firebase: /firebase|firebaseapp/i,
  WordPress: /wp-admin|wp-content|wordpress/i,
  Docker: /docker|dockerfile/i,
  MongoDB: /mongodb|mongo/i,
  Redis: /redis/i,
  MySQL: /mysql|phpmyadmin/i,
  PostgreSQL: /postgresql|postgres/i,
  Apache: /apache/i,
  Nginx: /nginx/i,
  PHP: /\.php|php/i,
  'Node.js': /node\.js|nodejs/i,
  Django: /django/i,
  Rails: /rails|ruby/i,
};
