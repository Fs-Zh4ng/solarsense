import { CohereClientV2 } from 'cohere-ai';

const API_KEY: string = "zLeAodVVy5MSQ5Q8b2yPQM7D0GcKvnq3kbdKChy8"

const cohere = new CohereClientV2({
    token: API_KEY});

(async () => {
  const messages = [{role: 'user', content: 'hello world!',},{role: ''}];

  const stream = await cohere.chatStream({
    model: 'command-r7b-12-2024',
    messages: messages,
  });

  for await (const chatEvent of stream) {
    if (chatEvent.type === 'content-delta') {
      console.log(chatEvent.delta?.message);
    }
  }
})();

// const messages = [
//   {
//     role: 'system',
//     content: 'You are a helpful, friendly, and informative chatbot trained in only repeating FACTUAL information about solar panels and their installation.',
//   }
// ];