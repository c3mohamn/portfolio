import { Project, ProjectType } from '../../projects/models/project.model';

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
  <b>Why not just do this in the game?</b><br><br>
  <div class="grid-x grid-margin-x grid-margin-y">
    <div class="cell small-12 medium-4">
    Well, <u>gear is hard to get</u>. Especially the gear people want. You have to organize 10-40 man raids, slay dragons or demi-gods
  and one small mistake from one of those 40 players can cause your entire raid to die.
  It would be better to know what gear to aim for before you go off into the game and spend hours, even days, trying to obtain it.
    </div>
    <div class="cell small-12 medium-8">
    <a href="assets/images/projects/warmains/in-game-wipe.jpg" target="_blank" rel="noopener" title="Lich King Wipe"
  aria-label="Lich King Wipe Image">
  <img src="assets/images/projects/warmains/in-game-wipe.jpg" alt="Warcraft Wiping on Boss Encounter">
  </a>
    </div>
  </div>

  <br><br>
  This is where Warmains comes in. In addition to testing out gear, Warmains allows you to also test out talent points.
  <br><br>
  <b>What are talent points?</b><br><br>
  <div class="grid-x grid-margin-x grid-margin-y align-center">
    <div class="cell small-12 medium-6">
    <a href="assets/images/projects/warmains/priest-talents.jpg" target="_blank" rel="noopener" title="Priest Talents"
  aria-label="Priest Talents Image">
  <img src="assets/images/projects/warmains/priest-talents.jpg" alt="Priest Talents Image">
  </a>

    </div>
    <div class="cell small-12 medium-6">
    Talent points are points that your character gains each level from level 10 onwards. They can boost your stats, improve your current
  spells or even give you new spells. But you have a limited amount, and must choose wisely where you spend it. You can reset your talents
  and try out new builds, <u>but it costs gold</u>.
    </div>
    <div class="cell small-12 medium-6">
    <a href="assets/images/projects/warmains/in-game-reset-small.png" target="_blank" rel="noopener" title="Talent Reset"
    aria-label="Talent Reset Image">
    <img src="assets/images/projects/warmains/in-game-reset-small.png" alt="Warcraft Talent Reset Gold Cost">
    </a>
    </div>
  </div>
  <br><br>
  Again, this is where Warmains comes in allowing you to test out talent points before you spend them without having to spend any gold
  in-game.`,
  // goals: `
  // <ul>
  //   <li>Create a character planner that allows players to </li>
  //   <li>Re-create similar interfaces for character statistics and character talents panel.</li>
  //   <li>Re-create logic (formulas, algorithms, rules) for character statistics and talents.</li>
  //   <li></li>
  // </ul>
  // `,
  contributions: ``,
  process: ``,
  outcome: ``
};
