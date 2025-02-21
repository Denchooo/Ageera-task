# Ageera-task

Full-Stack Application Tutorial: NestJS & React

This tutorial will guide you through building a full-stack application using NestJS (backend) and React (frontend). The application includes:

✅ User Authentication
✅ Entity Management
✅ Graphical Data Representation

Getting Started
1. Download & Setup
Download the provided Task.zip file.
Extract and navigate to the front(client) and back(server) folders.
Follow the setup steps for both frontend and backend.
Ensure you have necessary VS Code extensions (if any errors occur).

Backend(Server) - NestJS
1. Run NestJS Project

npm install
npm run dev


2. Create Entity Module
Run the following commands to generate the necessary files:

nest generate module entity
nest generate controller entity
nest generate service entity


3. Read JSON & Return Data
Task:
Read the entities.json file located in src/db/.
Implement a method in entity.service.ts to read and return this data.
Example entities.json Format:
json
CopyEdit
[
  { "id": 1, "name": "BESS" },
  { "id": 2, "name": "SOLAR" },
  { "id": 3, "name": "GRID" },
  { "id": 4, "name": "CONSUMPTION" },
  { "id": 5, "name": "GENERATOR" }
]

Implementation:
entity.service.ts → Fetch and return JSON data // TODO
entity.controller.ts → Expose API endpoint // TODO

4. Implement Graph Data Endpoint
Task:
Store separate CSV files for different entity types.
Read the correct CSV file based on the entityType parameter.
Format data correctly to meet frontend expectations.
Example bess.csv Format:
swift
CopyEdit
date,data.mean_meter-ac/ActivePower
2/19/2025 12:00:00 AM,0
2/19/2025 12:04:00 AM,0

✅ Read CSV file and prepare response data.
✅ Format values correctly for frontend visualization.
Implementation:
entity.controller.ts → Handle requests & return graph data // TODO

5. User Authentication (Login API)
Task:
Create a User entity.
Validate login credentials.
Implement the /user/login API.
Implementation:
user.controller.ts
typescript
CopyEdit
import { Controller } from '@nestjs/common';


@Controller('user')
export class UserController {
  // TODO: Implement Login API
}


Frontend (Client) - React
1. Setup React Project

npm install
npm run dev


2. Implement Login Page
Task:
Build a login form.
Send API request to /user/login.
On success → Redirect to Entities Page.
// TODO: Implement Login Page

3. Entity Page & Graph Data Fetching
Task:
Fetch entity data from /entities.
Fetch graph data from /entities/:entityType/graph-data.
Display data in cards & graph.
✅ Entity Types:
BESS
SOLAR
GENERATOR
GRID
CONSUMPTION
// TODO: Implement Entity Page & API calls

4. Graph UI Implementation
BESS Type Rules:
Positive values → Discharge series
Negative values → Charge series
Solar | Grid | Consumption Rules:
If value < 0 → Display as 0 in the graph
// TODO: The graph component is already added to the project, just use it

Expected Flow
✅ 1. User loads the application → Login screen appears
✅ 2. User logs in → Redirected to Entities Page
✅ 3. Entities Page displays:
All entities as cards
Combined entity data in graph
✅ 4. User selects an entity →
Graph updates to show only selected entity’s data

Conclusion
🎯 You’ve built a full-stack application using NestJS & React!
✅ Login Page → User authentication
✅ Entity Page → Fetch & display entities
✅ Graph UI → Dynamic data visualization with proper formatting

Bonus Points 💡
💎 Creative UI Styling – Use any library or custom styles
💎 Optimized API Handling – Implement caching or lazy loading
💎 Improved User Experience – Add animations, tooltips, or filters

Resources
📌 Figma – UI Design - https://www.figma.com/design/lKICHgo6QZeNuQUZ5Zpe8n/Ageera-Task?node-id=1-265&t=POf9t3DwjjiAFJjY-1
📌 Project Starter – Boilerplate code

