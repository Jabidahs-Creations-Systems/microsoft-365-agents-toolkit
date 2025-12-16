# Overview of My New Agent template

This is a demonstration agent template built on top of [Microsoft 365 Agents SDK](https://aka.ms/m365sdkdocs).

This template showcases a simple custom agent that responds to user messages. This is an example agent to demonstrate the agent creation process.

## Get started with the template

> **Prerequisites**
>
> To run the template in your local dev machine, you will need:
>
> - [Node.js](https://nodejs.org/), supported versions: 18, 20
> - [Microsoft 365 Agents Toolkit Visual Studio Code Extension](https://aka.ms/teams-toolkit) latest version or [Microsoft 365 Agents Toolkit CLI](https://aka.ms/teams-toolkit-cli).
> - A [Microsoft 365 account for development](https://docs.microsoft.com/microsoftteams/platform/toolkit/accounts).

### Configurations
1. Open the project in Visual Studio Code.

### Conversation with agent
1. Select the Microsoft 365 Agents Toolkit icon on the left in the VS Code toolbar.
1. In the Account section, sign in with your [Microsoft 365 account](https://docs.microsoft.com/microsoftteams/platform/toolkit/accounts) if you haven't already.
1. Press F5 to start debugging which launches your app in Teams using a web browser. Select `Debug in Teams (Edge)` or `Debug in Teams (Chrome)`.
1. When Teams launches in the browser, select the Add button in the dialog to install your app to Teams.
1. You will receive a welcome message from the agent, or send any message to get a response.

**Congratulations**! You are running an application that can now interact with users in Teams.

## What's included in the template

| Folder       | Contents                                            |
| - | - |
| `.vscode/`   | VS Code files for debugging                         |
| `appPackage/` | Templates for the Teams application manifest        |
| `env/`       | Environment files                                   |
| `infra/`     | Templates for provisioning Azure resources          |
| `src/`       | The source code for the application                 |

The following files can be customized and demonstrate an example implementation to get you started:

| File                                 | Contents                                           |
| - | - |
| `src/index.ts`                       | Application entry point and `restify` handlers     |
| `src/agent.ts`                       | Main agent implementation and message handlers     |

## Extend the template

You can customize this template by:
- Modifying the agent's responses in `src/agent.ts`
- Adding new message handlers
- Integrating with external APIs or services
- Enhancing the agent's capabilities with AI models
