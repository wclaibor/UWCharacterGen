# Angular Modules Training

In this blog post we will explore the different types of Angular modules and
when they are used.

## Goals

1. Learn about the different types of Angular Modules and their use cases
1. Refactor an application with a single module into a well organized
   multi-module application

## The Code

For this training, we will be refactoring a simple application designed to
generate a character for the indie tabletop RPG <i>Uncharted Worlds</i> by Sean
Gomes. You can read more about the game [here](https://uncharted-worlds.com/).

The code is available from
[this repo](https://stash.arbfund.com/users/wclaiborne/repos/uwcharactergen/browse)
and the finished project can be access via this command

```bash
git checkout blog-post-final
```

To get started, clone the repository and run the following commands

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
  - _Will not cover in this training_
- Routed Feature Module
  - Components that are the target of a navigation route
  - Should contain your "pages"
  - Can be lazy-loaded
- Routing Module
  - Provides routing configuration
  - Defines routes
  - Provides route guards and resolver services
- Service Module

  - Provides utility services such as data access.
  - Allows you to set up your dependency injection.
  - Mostly used in Angular libraries or in testing modules.
  - See [HttpClientModule](https://angular.io/api/common/http/HttpClientModule)
    or
    [ImNgConfigModule](https://stash.arbfund.com/projects/NFORK/repos/northfork/browse/packages/im-ng-config/src/ng-config.module.ts)
    for an example.

  - _Will not cover in this training_

- Widget Module
  - Makes shared components available

## Widget Module

Let's start with a simple module type: The Widget Module. These modules are most
common in angular component libraries where components are generic and made for
reuse, but most large applications could benefit from moving commonly used
components into separate widget modules that can be imported only when needed.

A properly setup widget module should export a single "entry-point" component
and will only declare sub-components needed by the widget. Many applications use
a "SharedModule" that has all of the components that are commonly reused across
the application. This is an anti-pattern because it forces each module that
needs a component from the shared module to import all of the shared module.
Widget modules allow each module to only import the things that they need to
operate.

In our case, the `IconGeneratorComponent` is used in all of our pages as an icon
in the card header as well as in the main component as a canvas that will be
used in the final character sheet pdf. In order to reuse across our lazily
loaded modules, let's move it into its own widget module.

Run this command to have the Angular CLI create a new module for our component.

```bash
ng g m icon-generator
```

Now, in the newly generated `icon-generator.module.ts`, add
`IconGeneratorComponent` to the declaration and export arrays. The result should
look like this

```ts
@NgModule({
  declarations: [IconGeneratorComponent],
  imports: [CommonModule],
  exports: [IconGeneratorComponent],
})
export class IconGeneratorModule {}
```

Then, remove `IconGeneratorComponent` from the declarations array in
`app.module.ts` and add `IconGeneratorModule` as an import.

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

Lazy loading routes in Angular is accomplished using routed feature modules. So
the first step is to create a new Angular module file for each of our routes.
Right now, the only routes that exist are `Character Info`, `Attributes`, and
`Moves`. So let's run these commands to let the Angular CLI generate those
module files for us.

```bash
ng g m attributes
ng g m character-info
ng g m moves
```

Now we have modules, but nothing is in them. For the first step, let's import
all of our new modules into the `app-routing.module.ts` file, just to make sure
everything is connected. Your app.module should look something like this

```ts
@NgModule({
  ...
  imports: [
    ...
    MovesModule,
    CharacterInfoModule,
    AttributesModule,
    RouterModule.forRoot(routes, routerOptions),
    ...
  ],
  ...
})
export class AppRoutingModule {}
```

Next, remove the associated components from the declarations block in
`app.module.ts` and declare them in their new route modules. You'll notice that
your build is no longer working. That's because when we moved each of the route
components into their own module, we didn't include the material component
modules needed for each component to function. This is good because it allows us
to only pull in the parts of material components that each route needs and
reduce our bundle size. It does require some cleanup however. To fix it, pull
the @angular/material modules out of `app.module.ts` and add the subset required
for each route to that route's module. Then make sure your build is working and
your routes all still work.

**HINT** Most of the route modules will need `ReactiveFormsModule`,
`MatCardModule`, `MatInputModule`, and `MatSelectModule` as well as our
`IconGeneratorModule`

Next, we'll convert our routed feature modules into lazy-loaded modules. Add a
default route to each of our new feature modules that looks like this.

```ts
const routes: Routes = [
  {
    path: '',
    component: AttributesComponent,
  },
]

@NgModule({
  ...
  imports: [
    ...
    RouterModule.forChild(routes),
    ...
  ],
})
export class AttributesModule {}
```

Make sure you do this for the `AttributesModule`, the `CharacterInfoModule` and
the `MovesModule`.

Now all we have to do to get lazy loading working is point the
`app-routing.module.ts` at our feature modules instead of directly to our
components. Modify each of the child routes to look like this.

```ts
{
  path: 'attributes',
  loadChildren: () =>
    import('./attributes/attributes.module').then(
      mod => mod.AttributesModule,
    ),
},
```

Then remove the feature modules from your imports array. The final result will
look like this.

```ts
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characterInfo',
  },
  {
    path: 'attributes',
    loadChildren: () =>
      import('./attributes/attributes.module').then(
        mod => mod.AttributesModule,
      ),
  },
  {
    path: 'characterInfo',
    loadChildren: () =>
      import('./character-info/character-info.module').then(
        mod => mod.CharacterInfoModule,
      ),
  },
  {
    path: 'moves',
    loadChildren: () =>
      import('./moves/moves.module').then(mod => mod.MovesModule),
  },
]

const routerOptions: ExtraOptions = {
  enableTracing: false,
}

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characterInfo',
  },
  {
    path: 'attributes',
    loadChildren: () =>
      import('./attributes/attributes.module').then(
        mod => mod.AttributesModule,
      ),
  },
  {
    path: 'characterInfo',
    loadChildren: () =>
      import('./character-info/character-info.module').then(
        mod => mod.CharacterInfoModule,
      ),
  },
  {
    path: 'moves',
    loadChildren: () =>
      import('./moves/moves.module').then(mod => mod.MovesModule),
  },
]

const routerOptions: ExtraOptions = {
  enableTracing: false,
}

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Make sure all of your routes are working correctly and open the network tab of
your browser's dev tools to ensure that each page's chunk is loaded when you
route to it.

##

## Resources

- https://angular.io/guide/ngmodules
- https://angular.io/guide/module-types
