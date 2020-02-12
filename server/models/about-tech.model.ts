import { Typegoose, prop } from '@hasezoey/typegoose';

class AboutTech extends Typegoose {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  cssClass: string;

  @prop({ required: true })
  orderNumber: number;

  @prop({ required: false })
  description: string;

  @prop({ required: false })
  link: string;

  @prop({ default: Date.now() })
  timestampCreated: Date;

  @prop({ default: Date.now() })
  timestampModified: Date;
}

const AboutTechModel = new AboutTech().getModelForClass(AboutTech, {
  schemaOptions: { versionKey: false }
});

export default AboutTechModel;
