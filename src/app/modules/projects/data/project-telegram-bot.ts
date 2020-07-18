import { Project, ProjectType } from '../models/project.model';

export const telegramBotProject: Project = {
  name: 'source-telegram-bot',
  title: `Source Telegram Bot`,
  shortDescription: `An interactive Telegram bot promoting social engagement.`,
  type: ProjectType.Work,
  tags: ['Telegram', '.NET', 'API', 'Professional'],
  svgLogoName: 'telegram',
  previewImgRelativePath: 'assets/images/projects/preview/telegram-bot.png',
  overview: `
  Early access and waitlists are common for any upcoming product that is under development. Gamification has become popular
  with these systems as it encourages shares with rewards. We created our own waitlist at Source and much of the tasks were assigned
  to me. Among them were integrating social platforms such as Twitter, Facebook, Linkedin and Telegram to allow users to
  signup and redeem rewards after authenticating and sharing on one of these platforms.

  <br><br>

  I took it one step further by also creating an interactive Telegram bot that users could engage after authenticating with Telegram.
  <br>

  <div class="grid-x grid-margin-x grid-margin-y">

  <div class="cell small-12">
  <ul>
  <li>The bot successfully interacted with user's that joined or left the Telegram channel it was in.</li>
  <li>It identified keywords in messages and replied with a personalized message.</li>
  <li>It had several commands that reported waitlist statistics of user's that authenticated on our system - such as
  rank, points, and number of referrals the user had.</li>
  <li>It provided resources and links for users to connect with Source.</li>
  </ul>
  </div>
  <br>
  <div class="cell small-12 medium-6">
  <a href="assets/images/projects/telegram-bot/telegram-commands-1.png" title="Telegram Bot Commands"
  aria-label="Telegram Bot Commands" target="_blank" rel="noopener">
  <img src="assets/images/projects/telegram-bot/telegram-commands-1.png" alt="Telegram Bot Commands">
  </a>
  </div>
  <div class="cell small-12 medium-6">
  <a href="assets/images/projects/telegram-bot/botfather-chat.png" title="Telegram Botfather"
  aria-label="Telegram Botfather" target="_blank" rel="noopener">
  <img src="assets/images/projects/telegram-bot/botfather-chat.png" alt="Telegram Botfather">
  </a>
  </div>
  </div>`
};
