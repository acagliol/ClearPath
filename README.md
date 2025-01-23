# ClearPath

## MVP

### Alejo’s Vision:
- Trucker configurations
- Route optimization
- Subreddits - create forums/threads to allow user communications

### MVP for Smart Trucking Navigation System

#### Essential Features:
- **Truck-Specific Navigation:**
  - Input truck dimensions and weight.
  - Calculate routes that avoid low-clearance bridges, weight-restricted zones, and narrow roads.
  - Turn-by-turn navigation with real-time traffic updates.
- **Real-Time Hazard Reporting:**
  - Allow drivers to report road hazards such as accidents, closures, and severe weather.
  - Display these reports on the map with a simple user voting system for accuracy.
- **Parking and Fuel Suggestions:**
  - Show nearby parking spots filtered by amenities (e.g., showers, security, dining).
  - Provide live fuel price updates at nearby stations.
- **Fleet Manager Dashboard - hierarchical:**
  - Enable fleet managers to monitor routes and track driver progress in real-time.
  - Display basic metrics like delays and route changes.
- **Community Communication:**
  - Include a basic chat feature for drivers to share updates and advice.
- **Weather Alerts:**
  - Provide notifications about severe weather conditions along the route.
  - Radar-view map of weather conditions (rain, ice/sleet, snow, etc).
- **Multi-Stop Route Planning:**
  - Allow drivers to plan routes with multiple stops, optimizing for time or distance or both.
- **Basic Data Storage:**
  - Save favorite locations like fuel stops and parking areas for quick access.
  - Other users’ historical storage and trends.

#### Excluded Features for MVP:
- Advanced sensor integration (roof-mounted sensors).
- Predictive maintenance analytics.
- Electric vehicle charging station locators.
- Leaderboards or rewards systems.
- Advanced fleet analytics (e.g., fuel efficiency trends).
- Complex integrations with external platforms.

## Project Directory Structure

```
ClearPath/
├── backend/
├── frontend/
├── middleware/
├── database/
├── cloud/
```

### Recommended Stack:
- **Frontend:** React.js (Web) and React Native (Mobile).
- **Backend:** Node.js with Express.js.
- **Database:** PostgreSQL
- **Cloud:** AWS.
- **Middleware:** GraphQL
- **Mapping API:** Mapbox.
- **Sensor Programming:** Python for rapid prototyping, with optional C++ for optimization.






Potential Tree

ClearPath/
├── backend/                    # Backend-related code
│   ├── controllers/            # Controllers for route logic
│   │   ├── userController.js
│   │   ├── fleetController.js
│   │   └── hazardController.js
│   ├── routes/                 # API route definitions
│   │   ├── userRoutes.js
│   │   ├── fleetRoutes.js
│   │   └── hazardRoutes.js
│   ├── models/                 # Database models (PostgreSQL)
│   │   ├── User.js
│   │   ├── Fleet.js
│   │   └── Hazard.js
│   ├── middleware/             # Custom middleware for authentication, validation, etc.
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── config/                 # Configuration files
│   │   ├── db.js               # Database connection logic
│   │   └── serverConfig.js     # General server settings
│   ├── index.js                # Entry point for the backend
│   └── package.json
├── frontend/                   # Frontend code
│   ├── app/                    # React Native app folder
│   │   ├── (tabs)/             # Tab-based navigation
│   │   │   ├── _layout.tsx
│   │   │   ├── explore.tsx
│   │   │   └── index.tsx
│   │   ├── pages/              # Static or dynamic pages
│   │   │   ├── _layout.tsx     # Layout for the pages
│   │   │   ├── +not-found.tsx  # 404 page
│   │   │   └── test.tsx        # Example page
│   │   ├── components/         # Reusable components
│   │   │   ├── ui/             # UI-specific components
│   │   │   │   ├── Collapsible.tsx
│   │   │   │   ├── ExternalLink.tsx
│   │   │   │   ├── HapticTab.tsx
│   │   │   │   ├── ThemedText.tsx
│   │   │   │   └── ThemedView.tsx
│   │   ├── constants/          # Constants for the app
│   │   │   └── Colors.ts
│   │   ├── hooks/              # Custom hooks
│   │   │   ├── useColorScheme.ts
│   │   │   └── useThemeColor.ts
│   │   ├── assets/             # Static assets
│   │       ├── fonts/
│   │       └── images/
│   ├── public-mobile/          # Mobile-specific public files
│   ├── public-web/             # Web-specific public files
│   ├── scripts/                # Utility scripts
│   │   └── reset-project.js
│   ├── package.json
│   └── tsconfig.json           # TypeScript configuration
├── middleware/                 # Middleware services (GraphQL)
│   ├── schema/                 # GraphQL schemas
│   │   ├── userSchema.js
│   │   ├── fleetSchema.js
│   │   └── hazardSchema.js
│   ├── resolvers/              # GraphQL resolvers
│   │   ├── userResolvers.js
│   │   ├── fleetResolvers.js
│   │   └── hazardResolvers.js
│   └── index.js                # Middleware entry point
├── database/                   # Database-related files
│   ├── migrations/             # SQL migration scripts
│   │   ├── 001_create_users.sql
│   │   ├── 002_create_fleets.sql
│   │   └── 003_create_hazards.sql
│   ├── seeds/                  # Seed data for testing
│   ├── schema.sql              # Database schema definition
│   └── config.js               # Database configuration
├── cloud/                      # Cloud configurations and services
│   ├── aws/                    # AWS-specific settings
│   │   └── s3Config.js
│   └── mapbox/                 # Mapbox integration
│       └── mapboxConfig.js
└── README.md                   # Project documentation
