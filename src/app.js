export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
  
  activate() {
    console.log('activate')
  }
  bind() {
    console.log('bind')
    if (this.router.navigation.length > 0)
      console.log(this.router.navigation[0].href);
    else console.log('navigation array is empty at bind()')
  }
  attached(){
    console.log('attached')
    console.log(this.router.navigation[0].href);
  }
}
