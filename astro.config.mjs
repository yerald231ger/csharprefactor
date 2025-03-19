// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://csharprefactor.vercel.app',
	integrations: [
		starlight({
			title: 'Learn C#',
			description: 'A comprehensive guide to C# programming',
			social: {
				github: 'https://github.com/yerald231ger/csharprefactor',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', link: '/' },
					],
				},
				{
					label: 'C# Basics',
					items: [
						{ label: 'Overview', link: '/csharp-basics/' },
						{ label: 'Syntax and Basics', link: '/csharp-basics/syntax' },
						{ label: 'Control Structures', link: '/csharp-basics/control-flow' },
						{ label: 'Variables and Data Types', link: '/csharp-basics/data-types' },
						{ label: 'Operators', link: '/csharp-basics/operators' },
						{ label: 'Methods and Functions', link: '/csharp-basics/methods' },
						{ label: 'Error Handling', link: '/csharp-basics/error-handling' },
						{ label: 'Test Your Knowledge', link: '/csharp-basics/quiz-test' },
					],
				},
				{
					label: 'Object-Oriented Programming',
					items: [
						{ label: 'Overview', link: '/oop/' },
						{ label: 'Classes and Objects', link: '/oop/classes-objects' },
						{ label: 'Interactive Examples', link: '/oop/classes-objects-example' },
						{ label: 'Inheritance', link: '/oop/inheritance' },
						{ label: 'Polymorphism', link: '/oop/polymorphism' },
						{ label: 'Encapsulation', link: '/oop/encapsulation' },
						{ label: 'Abstraction', link: '/oop/abstraction' },
						{ label: 'Interfaces', link: '/oop/interfaces' },
					],
				},
				{
					label: 'Advanced C# Features',
					items: [
						{ label: 'Overview', link: '/advanced-features/' },
						{ label: 'LINQ', link: '/advanced-features/linq' },
						{ label: 'Async Programming', link: '/advanced-features/async-await' },
						{ label: 'Delegates and Events', link: '/advanced-features/delegates-events' },
						{ label: 'Generics', link: '/advanced-features/generics' },
						{ label: 'Extension Methods', link: '/advanced-features/extension-methods' },
						{ label: 'Records and Pattern Matching', link: '/advanced-features/records-patterns' },
					],
				},
				{
					label: 'Design Patterns',
					items: [
						{ label: 'Overview', link: '/design-patterns/' },
						{ label: 'Creational Patterns', link: '/design-patterns/creational/' },
						{ label: 'Structural Patterns', link: '/design-patterns/structural/' },
						{ label: 'Behavioral Patterns', link: '/design-patterns/behavioral/' },
					],
				},
				{
					label: 'Clean Architecture',
					items: [
						{ label: 'Overview', link: '/clean-architecture/' },
						{ label: 'SOLID Principles', link: '/clean-architecture/solid' },
						{ label: 'Layered Architecture', link: '/clean-architecture/layers' },
						{ label: 'Dependency Injection', link: '/clean-architecture/dependency-injection' },
					],
				},
				{
					label: 'Domain-Driven Design',
					items: [
						{ label: 'Overview', link: '/ddd/' },
						{ label: 'Core Concepts', link: '/ddd/core-concepts' },
						{ label: 'Strategic Design', link: '/ddd/strategic-design' },
						{ label: 'Tactical Patterns', link: '/ddd/tactical-patterns' },
					],
				},
				{
					label: 'C# Features Evolution',
					items: [
						{ label: 'Overview', link: '/csharp-evolution/' },
						{ label: 'C# Version History', link: '/csharp-evolution/version-history' },
						{ label: 'Latest Features', link: '/csharp-evolution/latest-features' },
					],
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
