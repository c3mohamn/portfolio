import { Typegoose, prop } from 'typegoose';

class AboutTech extends Typegoose {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  class: string;

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

export default AboutTech;
