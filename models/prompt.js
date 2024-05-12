import { Schema, model, models } from "mongoose"


const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  title: {
    type: String,
    require: [true, 'Prompt title cannot be empty']
  },
  tags: {
    type: String,
    require: [true, 'Prompt tags cannot be empty']
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);
export default Prompt;