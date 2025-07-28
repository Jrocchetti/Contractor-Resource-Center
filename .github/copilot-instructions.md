<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# PPG Contractor Portal Project Instructions

This is a Next.js project for a contractor portal website with the following characteristics:

## Project Structure
- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React functional components with hooks

## Design Guidelines
- Clean, professional design similar to Brand Central (https://brandcentral.netlify.app/)
- Primary color scheme: Blue (#3b82f6) with gray accents
- Responsive design for all screen sizes
- Professional appearance suitable for contractor resources

## Key Features
- Contractor resource portal with forms and documentation
- Quick access tools for W9, Code of Conduct, Dress Code, Direct Deposit, Insurance
- Professional guidelines and policies section
- Support and contact information
- Mobile-responsive navigation

## Code Style
- Use TypeScript for all components
- Follow Next.js App Router conventions
- Use Tailwind CSS utility classes for styling
- Implement responsive design patterns
- Use semantic HTML elements
- Include accessibility features (ARIA labels, keyboard navigation)

## Component Guidelines
- Create reusable components in `/src/components/`
- Use client components ('use client') only when necessary (state, event handlers)
- Server components by default for better performance
- Props should be typed with TypeScript interfaces

## File Organization
- Pages in `/src/app/` directory
- Components in `/src/components/` directory
- Global styles in `/src/app/globals.css`
- Use absolute imports with `@/` prefix
