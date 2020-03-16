import { Project, ProjectType } from '../models/project.model';

export const telegramBotProject: Project = {
  name: 'source-telegram-bot',
  title: `Source Telegram Bot`,
  shortDescription: `An interactive Telegram bot promoting social engagement.`,
  type: ProjectType.Work,
  tags: ['Telegram', '.NET', 'API', 'Professional'],
  svgLogoName: 'telegram',
  previewImgRelativePath: 'assets/images/projects/preview/telegram-bot.png',
  overview: `Early access and waitlists are common for any upcoming product that is under development. Gamification has become popular
  with these systems as it encourages shares with rewards. We created our own waitlist at Source and much of the tasks were assigned
  to me. Among them were integrating social platforms such as Twitter, Facebook, Linkedin and Telegram to allow users to
  signup and redeem rewards after authenticating and sharing on one of these platforms.
  <br><br>
  I took it one step further by also creating an interactive Telegram bot that users could engage after authenticating with Telegram.`,
  goals: `
  <ul>
    <li>Promote user engagement with our Source Community on Telegram.</li>
    <li>Allow users to view their waitlist ranking and statistics inside the Telegram mobile or desktop app.</li>
    <li>Increase referrals on the waitlist system.</li>
  </ul>`,
  contributions: `
  <ul>
    <li>Implemented Telegram authentication and sharing on our waitlist system.</li>
    <li>Created the Telegram bot and defined usuable commands.</li>
    <li>Created an API end-point along with the necessary logic to perform incoming commands and interaction with the bot.</li>
  </ul>`,
  process: `
  <div class="grid-x grid-margin-x grid-margin-y">
  <div class="cell small-12 medium-6">
  <h4><small>1. Create the Telegram bot</small></h4><br>
  Telegram's way of doing this is unique. You have to
  connect with the 'Bot Father' who asks you a series of questions and finally creates a bot for you. Afterwards, you connect with it
  like you would with anyone else on Telegram.
  <br><br>
  <h4><small>2. Install Telegram Bot Nuget package</small></h4><br>
  The <a href="https://www.nuget.org/packages/Telegram.Bot/" aria-label="Telegram Bot Nuget package" title="Telegram Bot Nuget package"
  target="_blank" rel="noopener">
  Telegram.Bot</a> nuget package provides a types and functions that allows you to set up and recieve updates from your bot
  through a webhook.
  <br><br>
  <h4><small>3. Setup Webhook</small></h4><br>
  <h4><small>4. Create commands</small></h4><br>
  </div>
  <div class="cell small-12 medium-6">
  <a href="assets/images/projects/telegram-bot/botfather-chat.png" title="Telegram Botfather"
  aria-label="Telegram Botfather" target="_blank" rel="noopener">
  <img src="assets/images/projects/telegram-bot/botfather-chat.png" alt="Telegram Botfather">
  </a>
  </div>

  `,
  outcome: `
  <div class="grid-x grid-margin-x grid-margin-y">
  <div class="cell small-12 medium-6">
  <a href="assets/images/projects/telegram-bot/telegram-commands-1.png" title="Telegram Bot Commands"
  aria-label="Telegram Bot Commands" target="_blank" rel="noopener">
  <img src="assets/images/projects/telegram-bot/telegram-commands-1.png" alt="Telegram Bot Commands">
  </a>
  </div>
  <div class="cell small-12 medium-6">
  <ul>
  <li>The bot successfully interacted with user's that joined or left the Telegram channel it was in.</li>
  <li>It identified keywords in messages and replied with a personalized message.</li>
  <li>It had several commands that reported waitlist statistics of user's that authenticated on our system - such as
  rank, points, and number of referrals the user had.</li>
  <li>It provided resources and links for users to connect with Source.</li>
</ul>
<br>
Overall, it was a great learning experience for me as it was the first bot of it's kind I created.
  </div>
  </div>
  `
};
