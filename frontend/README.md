# Angular Modules Training

## Goals

1. Learn about the different types of Angular Modules and their use cases
1. Refactor an application with a single module into a well organized
   multi-module application

## The Code

For this training, we will be refactoring a simple application designed to
generate a character for the indie tabletop RPG <i>Uncharted Worlds</i> by Sean
Gomes. You can read more about the game [here](https://uncharted-worlds.com/).

To get started, clone
[this repo](https://stash.arbfund.com/users/wclaiborne/repos/uwcharactergen/browse),
and run the following commands

```bash
# If you use yarn
yarn && yarn start

# If you use npm
npm i && npm start
```

Take a moment to familiarize yourself with the running application. You'll
notice that the `app.module.ts` file looks a little bloated. We will be trimming
it down as we make new modules.

## Anatomy of an Angular Module

- declarations
  - The set of components, directives, and pipes (declarables) that belong to
    this module.
- ~~entryComponents~~ (Removed in Angular 9)
  - The set of components to compile when this NgModule is defined
  - Components that need to be compiled dynamically
- providers
  - The set of injectable objects that are available in the injector of this
    module.
- imports
  - The set of NgModules whose exported declarables are available to templates
    in this module.
- exports
  - The set of components, directives, and pipes declared in this NgModule that
    can be used in the template of any component that is part of an NgModule
    that imports this NgModule.
  - Exported declarations are the module's public API.
- bootstrap
  - The set of components that are bootstrapped when this module is
    bootstrapped.

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

## Router Module

Let's start with a common scenario. Our application has grown beyond its
original scope to include many different pages, all of which are included in the
root `app.module.ts` file. To fix this, we'll need to create a routing module
and a routed feature module for each page in our application.

First, let's create the routing module. For simple applications, it's perfectly
acceptable to keep all of your routing in your root app.module, but more complex
applications need more complex routing. Once you start adding things like route
guards, resolvers, and child routing, it becomes necessary to break that
functionality into a separate module. Run the following command to generate a
routing module using the Angular CLI.

```bash
cd frontend
ng g m app-routing --module app --flat
```

Now we'll need to move the routes const from the `app.module.ts` into our new
module, import Angular's `RouterModule` and re-export it. Your final file will
look something like this

```ts
const routes: Routes = [
 ...
]

const routerOptions: ExtraOptions = {
  enableTracing: false,
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Apply your routes
    RouterModule.forRoot(routes, routerOptions)
  ],
  // The RouterModule needs to be re-exported so that downstream modules have access to directives like routerLink and routerOutlet
  exports: [RouterModule],
})
```

Now we just need to clean up `app.module.ts`. Remove `RouterModule` from the
imports array.

You will probably need to restart your webpack dev server, but the application
routing should still be working at this point. Next, we'll tackle adding lazy
loading to our application

## Lazy Loaded Routes

## Resources

- https://angular.io/guide/ngmodules
- https://angular.io/guide/module-types
