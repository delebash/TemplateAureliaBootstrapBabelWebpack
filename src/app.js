export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'bsdataattributes',  name: 'bsdataattributes', moduleId: 'bsdataattributes', nav: true, title: 'bsdataattributes' },
      { route: 'bstooltipattached',  name: 'bstooltipattached', moduleId: 'bstooltipattached', nav: true, title: 'bstooltipattached' },
      { route: 'bstooltipcustattribholder',  name: 'bstooltipcustattribholder', moduleId: 'bstooltipcustattribholder', nav: true, title: 'bstooltipcustattribholder' }
    ]);

    this.router = router;
  }
}
