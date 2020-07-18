import { Project } from '../models/project.model';
import { telegramBotProject } from './project-telegram-bot';
import { warmainsProject } from './project-warmains';

export const projects: Project[] = [warmainsProject, telegramBotProject];
