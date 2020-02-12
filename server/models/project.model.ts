import { Typegoose, prop } from '@hasezoey/typegoose';

class Project extends Typegoose {
  @prop({ required: false })
  orderNumber: string;

  @prop({ required: true })
  name: string;

  @prop({ required: true })
  title: string;

  @prop({ required: true })
  shortDescription: string;

  @prop({ required: true })
  type: ProjectType;

  @prop({ required: false })
  overview: string;

  @prop({ required: false })
  goals: string;

  @prop({ required: false })
  contributions: string;

  @prop({ required: false })
  process: string;

  @prop({ required: false })
  outcome: string;

  @prop({ required: false })
  tags: string[];

  @prop({ required: true })
  svgLogoName: string;

  @prop({ required: true })
  previewImgRelativePath: string;

  @prop({ required: false })
  overviewImgRelativePath: string;

  @prop({ required: false })
  processImgRelativePath: string;

  @prop({ default: Date.now() })
  timestampCreated: Date;

  @prop({ default: Date.now() })
  timestampModified: Date;
}

enum ProjectType {
  Work = 'Work',
  School = 'School',
  Personal = 'Personal'
}

const ProjectModel = new Project().getModelForClass(Project, {
  schemaOptions: { versionKey: false }
});

export default ProjectModel;
