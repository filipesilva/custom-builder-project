const { Observable } = require('rxjs');


class MyBuilder {
  run(browserConfig) {
    return new Observable(obs => {
      console.log(browserConfig);
      obs.next({ success: true });
      obs.complete();
    });
  }
}

exports.default = MyBuilder;
