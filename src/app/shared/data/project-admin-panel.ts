import { Project, ProjectType } from '../../projects/models/project.model';

export const adminPanelProject: Project = {
  name: 'source-admin-panel',
  title: `Source Waitlist Admin Panel`,
  shortDescription: `An admin panel allowing the marketing team easily perform CRUD commands for users, email templates, and more.`,
  type: ProjectType.Work,
  tags: ['Angular', '.NET', 'SQL', 'Professional'],
  svgLogoName: 'source-logo',
  previewImgRelativePath: 'assets/images/projects/preview/source.png',
  overview: `Admin panels allow non-developers to make changes to the application without needing to code.
  <br><br>
  As our waitlist continued to grow, the marketing team wanted to have the ability to reach out to individuals on the waitlist, add,
  remove, and update user properties along with rewards and email templates. My job was to create the tool needed to allow them
  to all those things.`,
  goals: `
  Create an admin panel that:
  <ul>
    <li>is intuitive - easy to navigate and use.</li>
    <li>allows admins to add, remove, update, and view (CRUD) Users, Rewards, and Email Templates.</li>
    <li>displays user's social media accounts (if authenticated) and accossicated intercom entry.</li>
    <li>displays history of User activity.</li>
    <li>shows daily statistics and a summary.</li>
  </ul>
  `,
  contributions: `
  <ul>
    <li>Added associative classes/tables and foreign keys where necessary for fast data retrieval from SQL database.</li>
    <li>Created admin API endpoints for Rewards, Reward History, Waitlist Users, Email Templates and Email History.</li>
    <li>Designed and implemented admin panel front-end using Angular 6, Foundation, and Angular Material components.</li>
  </ul>
  `,
  process: `
  <h4><small>1. Database Migrations</small></h4><br>
  <h4><small>2. Create API endpoints</small></h4><br>
  <h4><small>3. Add guarded admin route</small></h4><br>
  <h4><small>4. Add guarded child admin routes</small></h4><br>
  `,
  outcome: `
  The initial and revised goals for the admin panel were successfully met and after testing it was pushed to production.
  <br><br>
  Afterwards, optimizations were made by reducing unnecessary data sent with each object model from the back-end and
  incorportating pagination. Improvements were also made to the user interface by adding simple animations and icons.
  `
};
