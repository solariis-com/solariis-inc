# Project Context Files

This directory contains architectural documentation and context files for the Solariis Inc platform.

## Purpose

These files help developers (both human and AI assistants like Claude Code) understand:
- **Domain logic**: Business rules, workflows, and service structure
- **Architectural decisions**: Why certain technologies and patterns were chosen
- **System design**: How different parts of the application interact
- **Data models**: Schema definitions and relationships

## Files

- **`architecture.md`** - System architecture, tech stack decisions, and design patterns
- **`service-matrix-schema.md`** - Service matrix structure (5 phases, service modules)
- **`database-schema.md`** - Supabase database tables and relationships
- **`user-flows.md`** - Key user journeys and interaction patterns
- **`api-contracts.md`** - Backend API specifications and endpoints
- **`design-system.md`** - Design tokens, component patterns, and style guide

## How to Use

1. **Before starting a new feature**: Read relevant context files to understand existing patterns
2. **When making architectural decisions**: Document them in `architecture.md`
3. **When adding new data models**: Update `database-schema.md`
4. **For AI assistants**: These files provide domain context without reading entire codebase

## Maintenance

Keep these files up-to-date as the system evolves. Treat them as living documentation.