# Brandweave AI Application

## Overview

This is a full-stack React application for Brandweave AI, a brand intelligence platform that helps businesses understand how AI models perceive their brand. The application features a modern frontend built with React, TypeScript, and Tailwind CSS, backed by an Express.js server with PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM for client-side routing
- **Styling**: Tailwind CSS with custom brand colors and responsive design
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: React Query for server state, React Hook Form for form state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with routes prefixed under `/api`
- **Middleware**: Express JSON parsing, logging middleware, error handling
- **Development**: Hot module replacement with Vite integration

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Environment-based DATABASE_URL configuration
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Key Components

### Client-Side Components
- **Layout System**: Consistent navbar, footer, and page structure
- **SEO Optimization**: React Helmet for meta tags and structured data
- **Form Handling**: Contact forms with validation and toast notifications
- **Chart Integration**: Recharts for data visualization
- **Responsive Design**: Mobile-first approach with responsive navigation

### Server-Side Components
- **Route Registration**: Modular route system with HTTP server creation
- **Storage Layer**: Interface-based storage with memory and database implementations
- **Development Tools**: Vite middleware integration for development mode
- **Error Handling**: Centralized error handling with status code management

### Shared Components
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Models**: User model with authentication fields
- **Type Safety**: End-to-end type safety from database to frontend

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Route Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Storage interface abstracts database operations using Drizzle ORM
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: React Query manages server state caching and synchronization

## External Dependencies

### Database & ORM
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **drizzle-kit**: Schema management and migration tools

### UI & Styling
- **@radix-ui/react-***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production server code

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle pushes schema changes to production database

### Replit Deployment
- **Platform**: Configured for Replit's autoscale deployment
- **Port Configuration**: Server runs on port 5000, exposed on port 80
- **Environment**: Production mode with NODE_ENV=production
- **Modules**: nodejs-20, web, postgresql-16 modules configured

### Development Workflow
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Database**: Development uses in-memory storage, production uses PostgreSQL
- **Build Process**: Parallel build process for client and server assets

## Changelog

- June 17, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.