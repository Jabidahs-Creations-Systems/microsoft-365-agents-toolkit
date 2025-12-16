import { ActivityTypes } from "@microsoft/agents-activity";
import { AgentApplication, MemoryStorage, TurnContext } from "@microsoft/agents-hosting";

// Define storage and application
const storage = new MemoryStorage();
export const agentApp = new AgentApplication({
  storage,
});

// Handle new members added to the conversation
agentApp.onConversationUpdate("membersAdded", async (context: TurnContext) => {
  await context.sendActivity("Hello! I'm your new agent. Send me a message to get started.");
});

// Listen for ANY message to be received
agentApp.onActivity(ActivityTypes.Message, async (context: TurnContext) => {
  const userMessage = context.activity.text;
  const response = `You said: "${userMessage}". This is my new agent responding!`;
  await context.sendActivity(response);
});
