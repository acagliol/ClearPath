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


