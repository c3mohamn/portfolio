import { Typegoose, prop } from 'typegoose';

class AboutTech extends Typegoose {
  @prop({ required: true })
  title: string;

  @prop({ required: true })
  class: string;

  @prop({ required: false })
  description: string;

  @prop({ required: false })
  link: string;
}

export default AboutTech;
