import { Project, ProjectType } from '../models/project.model';

export const warmainsProject: Project = {
  name: 'warmains',
  title: `Warmains`,
  shortDescription: `A character, talent, and raid planning tool for World of Warcraft.`,
  type: ProjectType.Personal,
  tags: ['Angular', 'Nodejs', 'Mongo', 'Gaming', 'Personal'],
  svgLogoName: 'horde-logo',
  previewImgRelativePath: 'assets/images/projects/preview/warmains.png',
  overview: `World of Warcraft is one of the largest MMORPG games of all time. At it's peak it had over 10 million active
  players. The game is also known for it's huge learning curve and the community has built thousands of online tools and
  in-game addons to aid players.
  <br><br>
  Warmains is one of these tools. It is a character planning tool that allows players to play around
  with different gear combinations to optimize their character's statistics.
  <br><br>
  <a href="assets/images/projects/warmains/warmains_1.png" title="Warmains Character"
  aria-label="Warmains Character" target="_blank" rel="noopener">
  <img src="assets/images/projects/warmains/warmains_1.png" alt="Warmains Character">
  </a>`
};
