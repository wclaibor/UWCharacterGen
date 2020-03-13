# Angular Modules Training

## Anatomy of an Angular Module

- declarations
  - The set of components, directives, and pipes (declarables) that belong to this module.
- ~~entryComponents~~ (Removed in Angular 9)
  - The set of components to compile when this NgModule is defined
  - Components that need to be compiled dynamically
- providers
  - The set of injectable objects that are available in the injector of this module.
- imports
  - The set of NgModules whose exported declarables are available to templates in this module.
- exports
  - The set of components, directives, and pipes declared in this NgModule that can be used in the template of any component that is part of an NgModule that imports this NgModule.
  - Exported declarations are the module's public API.
- bootstrap
  - The set of components that are bootstrapped when this module is bootstrapped.

## Types of Angular Modules

- Domain Feature Module
  - Components that relate to a specific feature
- Routed Feature Module
  - Components that are the target of a navigation route
  - Should contain your "pages"
  - Can be lazy-loaded
- Routing Module
  - Provides routing configuration
  - Defines routes
  - Provides route guards and resolver services
- Service Module
  - Provides utility services such as data access
- Widget Module
  - Makes shared components available

## Resources

- https://angular.io/guide/ngmodules
- https://angular.io/guide/module-types
